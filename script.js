let timer; // Holds setInterval() object
let time = 0; // Current time in milliseconds
let running = false; // Is the stopwatch running?
let laps = []; // Array to store lap times

function startStop() {
  if (running === false) {
    running = true;
    document.getElementById('startStopBtn').innerText = 'Stop';
    timer = setInterval(updateDisplay, 10); // Update display every 10 milliseconds
  } else {
    running = false;
    document.getElementById('startStopBtn').innerText = 'Start';
    clearInterval(timer);
  }
}

function reset() {
  running = false;
  clearInterval(timer);
  time = 0;
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('startStopBtn').innerText = 'Start';
  laps = [];
  updateLaps();
}

function lap() {
    if (running) {
      laps.push(time);
      updateLaps();
    }
  }
  
  

function updateDisplay() {
  time++;
  const minutes = Math.floor(time / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = (time % 6000) % 100;
  document.getElementById('display').innerText =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function updateLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';
    laps.forEach((lapTime, index) => {
      const li = document.createElement('li');
      const minutes = Math.floor(lapTime / 6000);
      const seconds = Math.floor((lapTime % 6000) / 100);
      const milliseconds = (lapTime % 6000) % 100;
      li.innerText = `Lap ${index + 1}: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
      lapsList.appendChild(li);
    });
  }
  
