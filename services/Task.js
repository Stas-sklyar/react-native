export const fetchTasks = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Task 1',
          completed: true
        },
        {
          id: 2,
          title: 'Task 2',
          completed: false
        },
        {
          id: 3,
          title: 'Task 3',
          completed: false
        }
      ])
    }, 1500)
  })
}

export const fetchTakenTasks = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Task 1',
          completed: true
        },
        {
          id: 3,
          title: 'Task 3',
          completed: false
        }
      ])
    }, 3000)
  })
}

export const createTask = async task => {
  console.log(task)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}
