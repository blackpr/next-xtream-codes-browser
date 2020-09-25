import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()
export default function UserContextComp({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window === 'object') {
      return JSON.parse(localStorage.getItem('xtream_user') || '{}')
    }
    return {}
  })

  function saveUser(user = {}) {
    localStorage.setItem('xtream_user', JSON.stringify(user))
    setUser({ ...user })
  }

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
