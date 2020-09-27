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
    user.playerApiUrl = `${user?.host}:${user?.port}/player_api.php?username=${user?.username}&password=${user?.password}&type=m3u_plus&output=ts`

    localStorage.setItem('xtream_user', JSON.stringify(user))
    setUser({ ...user })
  }
  function removeUser() {
    localStorage.removeItem('xtream_user')
    setUser({})
  }

  return (
    <UserContext.Provider value={{ user, saveUser, removeUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
