//
import { elements } from './ui.js';

export const initTimer = () => {
    elements.startBtn.addEventListener('click', () => {
        startTimer(
            (time) => elements.timer.innerText = time, // onTick
            (isWork) => alert(isWork ? "Back to Work! 💪" : "Take a Break! ☕") // onComplete
        );
    });

    elements.pauseBtn.addEventListener('click', stopTimer);
    
    elements.resetBtn.addEventListener('click', () => {
        elements.timer.innerText = restTimer();
    });
};
//

// n9smo lw9t ela joj w9t lkhdma o w9t raha 
const work = 1*30;
const brek = 1 * 10 ;

let timeLeft = work;
let timerId = null;
let workTime = true ; //bach n3rfo wach hna fkhdma ola raha 
export const formatTime = (seconds) => {
    const mins =Math.floor(seconds /60);
    const secs = seconds%60;
    return `${mins.toString().padStart(2,'0')}: ${secs.toString().padStart(2,'0')}`; // ila kan ra9m sgher mn 10 zid 0 9bl
};
//logic dyal start
export const startTimer = (onTick , onComplete )=> {
    if (timerId) return; // ila lw9t kan khdam madir  walo 
    timerId = setInterval(()=> {
        timeLeft--;
        onTick(formatTime(timeLeft));//kandifo lw9t jdid l ui 
        if (timeLeft<=0){
            stopTimer();
            //switch bin lkhdma o raha 
            workTime = !workTime;
            timeLeft = workTime ? work :brek ;
            onComplete(workTime); // ka9olo l ui bli salat lmar7ala 

        }

    },1000);
};
// logic dyal stop
export const stopTimer = () => {
    clearInterval(timerId);
    timerId = null;
};
 //logic dyal reset 
 export const restTimer = ()=>{
    stopTimer();
    workTime = true; 
    timeLeft = work;
    return formatTime(timeLeft);
 };