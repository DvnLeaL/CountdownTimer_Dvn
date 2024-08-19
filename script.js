const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const tickSound = document.getElementById('tick-sound');

const newSems = '17 Sep 2024';

function countdown() {
    const newSemsDate = new Date(newSems);
    const currentDate = new Date();

    const totalSeconds = (newSemsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// Initial Call
countdown();

setInterval(countdown, 1000);
