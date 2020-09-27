import { useUser } from 'context/userContext'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export function useSeriesCategories() {
  const { user } = useUser()
  const { data, error } = useSWR(
    `${user.playerApiUrl}&action=get_series_categories`,
    fetcher
  )
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useSeriesCategory(categoryId) {
  const { user } = useUser()
  const { data, error } = useSWR(
    `${user.playerApiUrl}&action=get_series&category_id=${categoryId}`,
    fetcher
  )
  return {
    series: data,
    isLoading: !error && !data,
    isError: error,
  }
}
