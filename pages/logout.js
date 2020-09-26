import { useUser } from 'context/userContext'
import { Text } from 'grommet'
import LoginLayout from 'layout/Login'
import Head from 'next/head'
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
      <Head>
        <title>XTREAM CODES browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>Loging out...</Text>{' '}
    </LoginLayout>
  )
}
