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

// Load player pool from Supabase
async function loadPlayerPool() {
  try {
    console.log('Loading players from Supabase...');
    
    // Fetch players from Supabase
    const { data: players, error } = await supabase
      .from('players')  // Make sure this matches your Supabase table name
      .select('name')   // Assuming 'name' is the column with player names
      .order('name');   // Optional: order players alphabetically

    if (error) {
      console.error('Error fetching players from Supabase:', error);
      throw error;
    }

    if (!players || players.length === 0) {
      console.warn('No players found in Supabase');
      playerPool = [];
    } else {
      // Extract player names from the Supabase response
      playerPool = players.map(player => player.name);
      console.log(`Loaded ${playerPool.length} players from Supabase`);
    }
    
    // If we still don't have players, use a default list as fallback
    if (!playerPool || playerPool.length === 0) {
      console.warn('Using default player list as fallback');
      playerPool = [
        'Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5',
        'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10'
      ];
    }
    
    // Populate the datalist
    const datalist = document.getElementById('player-datalist');
    if (datalist) {
      // Clear existing options
      datalist.innerHTML = '';
      
      // Add new options
      playerPool.forEach(player => {
        if (player && player.trim() !== '') {
          const option = document.createElement('option');
          option.value = player;
          datalist.appendChild(option);
        }
      });
      
      console.log(`Populated dropdown with ${playerPool.length} players`);
    } else {
      console.error('Could not find player-datalist element');
    }
  } catch (error) {
    console.error('Error loading player pool:', error);
  }
}

// Call loadPlayerPool when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the player pool
  loadPlayerPool();
  
  // Set up player input field
  const playerInput = document.getElementById('player-input');
  if (playerInput) {
    // Enable/disable submit button based on input
    playerInput.addEventListener('input', (e) => {
      const submitButton = document.getElementById('submit-pick');
      if (submitButton) {
        submitButton.disabled = !e.target.value.trim();
      }
    });
    
    // Auto-focus the input field when the page loads
    playerInput.focus();
  }
  
  // Set up submit button handler
  const submitButton = document.getElementById('submit-pick');
  if (submitButton) {
    submitButton.addEventListener('click', async () => {
      const playerName = playerInput.value.trim();
      if (playerName) {
        await handlePlayerSelection(playerName);
        playerInput.value = ''; // Clear the input
        submitButton.disabled = true;
      }
    });
  }
  
  // Allow pressing Enter to submit
  if (playerInput) {
    playerInput.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter' && playerInput.value.trim()) {
        const playerName = playerInput.value.trim();
        await handlePlayerSelection(playerName);
        playerInput.value = ''; // Clear the input
        const submitButton = document.getElementById('submit-pick');
        if (submitButton) submitButton.disabled = true;
      }
    });
  }
});

// Handle player selection
async function handlePlayerSelection(playerName) {
  if (!playerName) return;
  
  try {
    // Here you would typically record the pick in your Supabase database
    // For example:
    /*
    const { data, error } = await supabase
      .from('draft_picks')
      .insert([
        { 
          pick_number: currentPick,
          player_name: playerName,
          team_name: getCurrentTeam(),
          timestamp: new Date().toISOString()
        }
      ]);
    
    if (error) throw error;
    */
    
    console.log(`Selected player: ${playerName}`);
    showToast(`Selected: ${playerName}`);
    
    // Move to next pick
    currentPick++;
    updateDraftBoard();
    
  } catch (error) {
    console.error('Error recording pick:', error);
    showToast('Error recording pick. Check console for details.', true);
  }
}

// Helper function to show toast messages
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.backgroundColor = isError ? '#dc3545' : '#28a745';
    
    // Hide after 3 seconds
    setTimeout(() => {
      toast.style.display = 'none';
    }, 3000);
  }
}

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