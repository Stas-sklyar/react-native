import React, {createContext, useContext, useState} from 'react'

const AuthContext = createContext(null)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [role, setRole] = useState('user')
  const [clientId, setClientId] = useState('1')

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout, role, clientId}}>
      {children}
    </AuthContext.Provider>
  )
}
