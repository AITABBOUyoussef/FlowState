// // js/ui.js
// export const elements = {
//     form: document.getElementById('todo-form'),
//     input: document.getElementById('input-tache'),
//     list: document.getElementById('todo-list'),
//     timer: document.getElementById('timer-display'),
//     msg: document.getElementById('msg-mtv'),

//     startBtn: document.getElementById('start-btn'),
//     pauseBtn: document.getElementById('pause-btn'),
//     resetBtn: document.getElementById('reset-btn'),
    
// };


// import { elements } from './ui.js'; 

// export const renderTask = (task) => {
//     // 1. Creer l-element 'li'
//     const li = document.createElement('li');
    
//     // 2. Zid lih les classes Tailwind (bach yji nqi)
//     li.className = "flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500";
    
//     // 3. 3mmer l-west dyalo b l-HTML
//     // Khass t-zid l-titre dial l-task o wa7d l-bouton dial Delete
//     li.innerHTML = `
//         <span class="text-gray-700">${task.title}</span>
//         <button class="text-red-500 hover:text-red-700 font-bold" onclick="handleDelete(${task.id})">
//             Supprimer
//         </button>
//     `;
    
//     // 4. Lo7 had l-li f l-list (ul) li 3ndna f elements
//     elements.list.appendChild(li);
// };



// js/ui.js

// 1. Centralisation dial les sélecteurs 
export const elements = {
    form: document.getElementById('todo-form'),
    input: document.getElementById('input-tache'),
    list: document.getElementById('todo-list'),
    timer: document.getElementById('timer-display'),
    msg: document.getElementById('msg-mtv'), // L-Empty State message

    startBtn: document.getElementById('start-btn'),
    pauseBtn: document.getElementById('pause-btn'),
    resetBtn: document.getElementById('reset-btn'),
};

/**
 * Affiche une tâche dans le DOM
 * @param {Object} task - L'objet task {id, title, completed}
 * @param {Function} onDelete - La fonction à appeler pour supprimer
 */
export const renderTask = (task, onDelete) => {
    // Créer l'élément li
    const li = document.createElement('li');
    
    // Ajouter les classes Tailwind pour un design propre
    li.className = "flex justify-between items-center bg-white p-4 mb-2 rounded-xl shadow-sm border-l-4 border-blue-500 transition-all hover:shadow-md";
    
    // Contenu HTML de la tâche
    li.innerHTML = `
        <span class="text-gray-700 font-medium">${task.title}</span>
        <button class="delete-btn bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded-lg transition-colors text-sm font-bold">
            Supprimer
        </button>
    `;

    // Gestionnaire d'événement pour le bouton supprimer
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        onDelete(task.id, li); // Appelle la fonction de suppression passée en paramètre
    });

    // Ajouter au début de la liste
    elements.list.prepend(li);
};

/**
 * Gère l'affichage du message motivant (Empty State)
 * @param {number} tasksLength - Nombre de tâches actuelles
 */
export const toggleEmptyState = (tasksLength) => {
    if (tasksLength === 0) {
        elements.msg.classList.remove('hidden');
    } else {
        elements.msg.classList.add('hidden');
    }
};

/**
 * Nettoie l'input après l'ajout
 */
export const clearInput = () => {
    elements.input.value = '';
    elements.input.focus();
};