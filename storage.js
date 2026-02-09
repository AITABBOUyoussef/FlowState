const STORAGE_KEY = 'flowstate_tasks';

export const saveTasks = (tasks) => {
    localStorage.setItem('flowstate_tasks' , JSON.stringify(tasks));
};

export const getTasks = () => {
    const data = localStorage.getItem('flowstate_tasks');
    return data ? JSON.parse(data) : [];
};