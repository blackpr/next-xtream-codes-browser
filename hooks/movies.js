import { useUser } from 'context/userContext'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export function useMoviesCategories() {
  const { user } = useUser()
  const { data, error } = useSWR(
    `${user.playerApiUrl}&action=get_vod_categories`,
    fetcher
  )
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  }
}
