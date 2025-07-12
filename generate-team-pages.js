import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function loadConfig() {
  const configPath = path.join(__dirname, 'config.json');
  const raw = await fs.readFile(configPath, 'utf-8');
  const config = JSON.parse(raw);
  // Validation
  if (!config.teams || !config.prizeBreakdown) throw new Error('Invalid config: missing keys');
  return config;
}

async function main() {
  try {
    const config = await loadConfig();
    const { data: picks, error } = await supabase.from('draft_picks').select('*').order('pick');
    if (error) throw new Error(`Supabase error: ${error.message}`);

    const teams = {};
    picks.forEach(pick => {
      const slug = pick.team_slug || slugify(pick.team);
      if (!teams[slug]) teams[slug] = { name: pick.team, picks: [] };
      teams[slug].picks.push(pick);
    });

    const templatePath = path.join(__dirname, 'templates/team.html');
    const template = await fs.readFile(templatePath, 'utf-8');

    const outputDir = path.join(__dirname, 'teams');
    await fs.mkdir(outputDir, { recursive: true });

    for (const [slug, teamData] of Object.entries(teams)) {
      const listHTML = teamData.picks.map(p => `
        <li>Round ${p.round}, Pick #${p.pick}: ${p.player}${p.notes ? ` (${p.notes})` : ''}${p.traded ? ' (Traded)' : ''}</li>
      `).join('');

      let logoHTML = '';
      const logoPath = path.join(__dirname, 'logos', `${slug}.png`);
      try {
        await fs.access(logoPath);
        logoHTML = `<img class="logo" src="../logos/${slug}.png" alt="${teamData.name} logo">`;
      } catch {}

      const html = template
        .replace(/{{eventTitle}}/g, config.eventTitle)
        .replace('{{team}}', teamData.name)
        .replace('{{players}}', listHTML)
        .replace('{{logo}}', logoHTML);

      const filePath = path.join(outputDir, `${slug}.html`);
      await fs.writeFile(filePath, html);
      console.log(`✅ Created: teams/${slug}.html`);
    }

    // ... (rest index.html generation remains similar, but sort prizeBreakdown by place
    config.prizeBreakdown.sort((a, b) => a.place - b.place);
    // Rest of the script...
  } catch (err) {
    console.error('Error generating pages:', err.message);
    process.exit(1);
  }
}

main();