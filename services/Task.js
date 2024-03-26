import axios from 'axios';

export const fetchTasks = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: 'Task 1',
                },
                {
                    id: 2,
                    title: 'Task 2',
                },
                {
                    id: 3,
                    title: 'Task 3',
                }
            ]);
        }, 1500);
    });
};

export const fetchTakenTasks = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: 'Task 1',
                },
                {
                    id: 3,
                    title: 'Task 3',
                }
            ]);
        }, 3000);
    });
};

export const createTask = async (task) => {
    console.log(task)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
};