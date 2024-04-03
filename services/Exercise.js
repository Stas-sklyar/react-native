export const fetchExercises = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Exercise 1'
        },
        {
          id: 2,
          title: 'Exercise 2'
        },
        {
          id: 3,
          title: 'Exercise 3'
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