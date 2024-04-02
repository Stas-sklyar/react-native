export const fetchClients = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          email: 'test.email@gmail.com',
          name: 'Client 1',
          status: 'active',
          begeleiders: ['Begeleider 2', 'Begeleider 3'],
          assignedTasks: [
            {
              id: 1,
              title: 'Task 1'
            },
            {
              id: 2,
              title: 'Task 2'
            }
          ],
          assignedExercise: [
            {
              id: 2,
              title: 'Exercise 2'
            },
            {
              id: 3,
              title: 'Exercise 3'
            }
          ]
        },
        {
          id: 2,
          email: 'test.email@gmail.com',
          name: 'Client 2',
          status: 'inactive',
          begeleiders: ['Begeleider 1', 'Begeleider 2'],
          assignedTasks: [],
          assignedExercise: []
        },
        {
          id: 3,
          email: 'test.email@gmail.com',
          name: 'Client 3',
          status: 'active',
          begeleiders: ['Begeleider 3'],
          assignedTasks: [],
          assignedExercise: []
        }
      ])
    }, 1000)
  })
}

export const createClient = async client => {
  console.log(client)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}

export const assignTaskToClient = async ({clientId, taskId}) => {
  console.log(clientId, taskId)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}

export const assignExerciseToClient = async ({clientId, exerciseId}) => {
  console.log(clientId, exerciseId)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}
