let timer = null;
let seconds = 0;
let running = false;
let lapCount = 1;

// Run when page loads
window.onload = function () {
    updateDisplay();
};

function formatTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    document.getElementById("display").innerText = formatTime(seconds);
}

function start() {
    if (running) return;

    running = true;
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function pause() {
    running = false;
    clearInterval(timer);
}

function reset() {
    pause();
    seconds = 0;
    lapCount = 1;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    let lapTime = formatTime(seconds);

    let li = document.createElement("li");
    li.innerText = `Lap ${lapCount++}: ${lapTime}`;

    document.getElementById("laps").appendChild(li);
}
