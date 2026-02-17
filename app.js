
import { initTodo } from './todo.js';
import { initTimer } from './timer.js';

document.addEventListener('DOMContentLoaded', () => {
    initTodo();
    initTimer();
    console.log("FlowState est opérationnel  ");
});