export const fetchQuotes = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        Array.from({length: 53}, (_, index) => ({
          week: index + 1,
          quote: `Quote N ${index + 1}`
        }))
      )
    }, 1500)
  })
}
