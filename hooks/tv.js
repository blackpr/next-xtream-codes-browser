import { useUser } from 'context/userContext'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export function useTvCategories() {
  const { user } = useUser()
  const { data, error } = useSWR(
    `${user.playerApiUrl}&action=get_live_categories`,
    fetcher
  )
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  }
}
