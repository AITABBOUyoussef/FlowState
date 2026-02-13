
import { initTodo } from './todo.js';
import { initTimer } from './timer.js';

// Lancer l'application une fois le DOM chargé
document.addEventListener('DOMContentLoaded', () => {
    initTodo();
    initTimer();
    console.log("FlowState est opérationnel ! ");
});