export const fetchColleagues = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          email: 'jan@example.com',
          firstName: 'Jan',
          lastName: 'Jansen',
          status: 'active'
        },
        {
          id: '2',
          email: 'piet@example.com',
          firstName: 'Piet',
          lastName: 'Pietersen',
          status: 'inactive'
        }
      ])
    }, 1500)
  })
}

export const createColleague = async colleague => {
  console.log(colleague)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}
