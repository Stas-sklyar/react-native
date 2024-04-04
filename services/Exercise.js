export const fetchExercises = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Exercise 1',
          questions: ['Question 1', 'Question 2', 'Question 3']
        },
        {
          id: 2,
          title: 'Exercise 2',
          questions: []
        },
        {
          id: 3,
          title: 'Exercise 3',
          questions: ['Question 2']
        }
      ])
    }, 1000)
  })
}

export const createExercise = async exercise => {
  console.log(exercise)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}

export const createExerciseExecutionReport = async ({clientId, exerciseId, answers}) => {
  console.log({clientId, exerciseId, answers})
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}

export const fetchExercisesAssignedToSpecificClientId = async clientId => {
  console.log('fetchExercisesAssignedToSpecificClientId', clientId)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Assigned Exercise 1',
          questions: ['Question 1', 'Question 2', 'Question 3']
        },
        {
          id: 2,
          title: 'Assigned Exercise 2',
          questions: []
        },
        {
          id: 3,
          title: 'Assigned Exercise 3',
          questions: ['Question 2']
        }
      ])
    }, 1000)
  })
}
