import { useUser } from 'context/userContext'
import { Text } from 'grommet'
import LoginLayout from 'layout/Login'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Logout() {
  const router = useRouter()
  const { removeUser } = useUser()

  useEffect(() => {
    removeUser()
    router.push('/login')
  }, [])

  return (
    <LoginLayout LoginNav={() => {}}>
      <Text>Loging out...</Text>{' '}
    </LoginLayout>
  )
}
