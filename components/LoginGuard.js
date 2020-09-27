import { useUser } from 'context/userContext'
import { Text } from 'grommet'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FullPageSpinner from './Spinner/FullPage'

export default function LoginGuard({ children }) {
  const { user } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isCorrectUser, setIsCorrectUser] = useState(false)

  if (!user?.username) {
    if (typeof window === 'object') {
      router.replace('/logout')
    }
  }

  useEffect(() => {
    let url = `${user.host}:${user.port}/player_api.php?username=${user.username}&password=${user.password}&output=ts`
    fetch(url)
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => {
              if (data?.user_info?.auth === 1) {
                setIsCorrectUser(true)
                setLoading(false)
              }
            })
            .catch((e) => {
              console.log(e)
              setLoading(false)
            })
        } else {
          setLoading(false)
        }
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullPageSpinner />
  }

  if (!isCorrectUser) {
    router.push('/logout')
  }

  return <>{children}</>
}
