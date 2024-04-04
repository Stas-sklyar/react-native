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
