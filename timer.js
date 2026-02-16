import { elements } from './ui.js';


const workTimeMinutes = 1 * 60; 
const breakTimeMinutes =1 * 60;

let timeLeft = workTimeMinutes;
let timerId = null;
let isWorking = true; 


export const formatTime = (seconds) => {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    if (mins < 10) { mins = "0" + mins; }
    if (secs < 10) { secs = "0" + secs; }

    return mins + ":" + secs;
};


export const startTimer = () => {
    if (timerId !== null) { return; } 

    timerId = setInterval(function() {
        timeLeft = timeLeft - 1; 
        elements.timer.innerText = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;

            if (isWorking === true) {
                isWorking = false;
                timeLeft = breakTimeMinutes;
                alert("Take a Break! ");
            } else {
                isWorking = true;
                timeLeft = workTimeMinutes;
                alert("Back to Work! ");
            }
            elements.timer.innerText = formatTime(timeLeft);
        }
    }, 1000);
};

export const stopTimer = () => {
    clearInterval(timerId);
    timerId = null;
};

export const resetTimer = () => {
    stopTimer();
    isWorking = true;
    timeLeft = workTimeMinutes;
    elements.timer.innerText = formatTime(timeLeft);
};

export const initTimer = () => {
    elements.startBtn.addEventListener('click', startTimer);
    elements.pauseBtn.addEventListener('click', stopTimer);
    elements.resetBtn.addEventListener('click', resetTimer);
};