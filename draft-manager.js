// Config load (assume config.json is fetched or hardcoded for simplicity)
async function loadConfig() {
  const response = await fetch('./config.json');
  const config = await response.json();
  // Basic validation
  if (!config.teams || config.numRounds <= 0) throw new Error('Invalid config');
  document.documentElement.style.setProperty('--theme-color', config.themeColor);
  return config;
}

const config = await loadConfig();
// Initialize Supabase with direct values
const supabase = window.supabase.createClient(
  'https://suqhwtwfvpcyvcbnycsa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cWh3dHdmdnBjeXZjYm55Y3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzk2MzAsImV4cCI6MjA2NzAxNTYzMH0.ROawOqve1AezL2Asi0MqcWy4GbISImG_CNbaXxNg2lo'
);

let currentPick = 1;
let timerInterval;
let timeLeft = config.pickTimeSeconds;
let isPaused = false;
let draftOrder = config.teams; // For snake: reverse even rounds
let playerPool = [];

// Load player pool
async function loadPlayerPool() {
  const response = await fetch(config.playerPoolFile);
  playerPool = await response.json(); // Assume array of strings
  const datalist = document.getElementById('player-datalist');
  playerPool.forEach(player => {
    const option = document.createElement('option');
    option.value = player;
    datalist.appendChild(option);
  });
}
loadPlayerPool();

// Real-time subscription
const channel = supabase.channel('draft-updates');
channel.on('postgres_changes', { event: '*', schema: 'public', table: 'draft_picks' }, payload => {
  updateDraftBoard();
  showToast('Draft updated in real-time!');
}).subscribe();

// Update UI board
async function updateDraftBoard() {
  const { data: picks } = await supabase.from('draft_picks').select('*').order('pick');
  const board = document.getElementById('draft-board');
  board.innerHTML = '';
  const teams = {};
  picks.forEach(pick => {
    const slug = pick.team_slug || slugify(pick.team);
    if (!teams[slug]) teams[slug] = { name: pick.team, picks: [] };
    teams[slug].picks.push(pick);
  });
  Object.values(teams).forEach(team => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `<h3>${team.name}</h3><img src="logos/${slugify(team.name)}.png" alt="${team.name} logo" onerror="this.style.display='none'"><ul>${team.picks.map(p => `<li>Round ${p.round}: ${p.player} ${p.notes ? `(${p.notes})` : ''}</li>`).join('')}</ul>`;
    board.appendChild(card);
  });
  document.getElementById('progress').textContent = `Draft Progress: ${picks.length}/${config.numTeams * config.picksPerTeam} picks complete`;
}

// Timer logic
function startTimer() {
  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      document.getElementById('timer').textContent = formatTime(timeLeft);
      if (timeLeft <= 0 && config.autoSkipOnTimeout) advancePick(true);
    }
  }, 1000);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Submit pick with validation
async function submitPick() {
  const player = document.getElementById('player-input').value.trim();
  if (!player || playerPool.includes(player) === false) return showToast('Invalid player!', 'error');
  // Check duplicate
  const { data: existing } = await supabase.from('draft_picks').select('player').eq('player', player);
  if (existing.length > 0) return showToast('Player already drafted!', 'error');

  const round = Math.ceil(currentPick / config.numTeams);
  const teamIndex = config.draftType === 'snake' && round % 2 === 0 ? config.numTeams - (currentPick % config.numTeams) : currentPick % config.numTeams;
  const team = draftOrder[teamIndex - 1] || draftOrder[0];
  const notes = document.getElementById('notes-input').value;

  await supabase.from('draft_picks').insert({ pick: currentPick, round, team, player, notes });
  advancePick();
  showToast('Pick submitted!');
}

// Advance pick
function advancePick(skip = false) {
  if (skip) showToast('Timed out - skipped!');
  currentPick++;
  timeLeft = config.pickTimeSeconds;
  document.getElementById('current-team').textContent = getCurrentTeamName();
  updateDraftBoard();
}

// Get current team with snake support
function getCurrentTeamName() {
  const round = Math.ceil(currentPick / config.numTeams);
  const pickInRound = currentPick % config.numTeams || config.numTeams;
  const index = config.draftType === 'snake' && round % 2 === 0 ? config.numTeams - pickInRound + 1 : pickInRound;
  return draftOrder[index - 1];
}

// Toast notification (vanilla)
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.background = type === 'error' ? '#dc3545' : '#28a745';
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
}

// Event listeners
document.getElementById('start-draft').addEventListener('click', () => {
  startTimer();
  document.querySelectorAll('button:not(#start-draft').forEach(b => b.disabled = false);
  document.getElementById('start-draft').disabled = true;
});
document.getElementById('pause-draft').addEventListener('click', () => isPaused = true);
document.getElementById('resume-draft').addEventListener('click', () => isPaused = false);
document.getElementById('submit-pick').addEventListener('click', submitPick);
// Add for undo, toggle traded (similar... implement undo as delete last from DB)
// Initial update
updateDraftBoard();
function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}