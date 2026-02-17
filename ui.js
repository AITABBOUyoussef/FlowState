export const elements = {
    form: document.getElementById('todo-form'),
    input: document.getElementById('input-tache'),
    list: document.getElementById('todo-list'),
    timer: document.getElementById('timer-display'),
    msg: document.getElementById('msg-mtv'), 

    startBtn: document.getElementById('start-btn'),
    pauseBtn: document.getElementById('pause-btn'),
    resetBtn: document.getElementById('reset-btn'),
};


export const renderTask = (task, onDelete) => {
  
    const li = document.createElement('li');
    
   
    li.className = "flex justify-between items-center bg-white p-4 mb-2 rounded-xl shadow-sm border-l-4 border-blue-500 transition-all hover:shadow-md";
    
    
    li.innerHTML = `
        <span class="text-gray-700 font-medium">${task.title}</span>
        <button class="okey-btn bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-lg transition-colors text-sm font-bold">
            okey
        </button>
        <button class="delete-btn bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded-lg transition-colors text-sm font-bold">
            Supprimer
        </button>
    `;

    
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        onDelete(task.id, li);
    });

    
    elements.list.prepend(li);
};


export const toggleEmptyState = (tasksLength) => {
    if (tasksLength === 0) {
        elements.msg.classList.remove('hidden');
    } else {
        elements.msg.classList.add('hidden');
    }
};


export const clearInput = () => {
    elements.input.value = '';
    elements.input.focus();
};