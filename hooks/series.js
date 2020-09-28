import { useUser } from 'context/userContext'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

// cors proxy because of mixed content
// https://github.com/netnr/workers

export function useSeriesCategories() {
  const { user } = useUser()
  const { data, error } = useSWR(
    `https://cors.zme.ink/${user.playerApiUrl}&action=get_series_categories`,
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
    `https://cors.zme.ink/${user.playerApiUrl}&action=get_series&category_id=${categoryId}`,
    fetcher
  )
  return {
    series: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useSeriesSingle(seriesId) {
  const { user } = useUser()
  const { data, error } = useSWR(
    `https://cors.zme.ink/${user.playerApiUrl}&action=get_series_info&series_id=${seriesId}`,
    fetcher
  )
  return {
    series: data,
    isLoading: !error && !data,
    isError: error,
  }
}
