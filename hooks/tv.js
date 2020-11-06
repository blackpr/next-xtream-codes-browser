import { useUser } from 'context/userContext'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

// cors proxy because of mixed content
// https://github.com/netnr/workers

export function useTvCategories() {
  const { user } = useUser()
  // const { data, error } = useSWR(
  //   `https://cors.zme.ink/${user.playerApiUrl}&action=get_live_categories`,
  //   fetcher
  // )
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

export function useTvCategory(categoryId) {
  const { user } = useUser()
  // const { data, error } = useSWR(
  //   `https://cors.zme.ink/${user.playerApiUrl}&action=get_live_streams&category_id=${categoryId}`,
  //   fetcher
  // )
  const { data, error } = useSWR(
    `${user.playerApiUrl}&action=get_live_streams&category_id=${categoryId}`,
    fetcher
  )
  return {
    channels: data,
    isLoading: !error && !data,
    isError: error,
  }
}
