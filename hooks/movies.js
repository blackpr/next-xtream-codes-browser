import { useUser } from 'context/userContext'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'
import makeTempUrl from 'utils/makeTempUrl'

// cors proxy because of mixed content
// https://github.com/netnr/workers

export function useMoviesCategories() {
  const { user } = useUser()
  // const { data, error } = useSWR(
  //   `https://cors.zme.ink/${user.playerApiUrl}&action=get_vod_categories`,
  //   fetcher
  // )
  const { data, error } = useSWR(
    makeTempUrl(`${user.playerApiUrl}&action=get_vod_categories`),
    fetcher
  )
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useMoviesCategory(categoryId) {
  const { user } = useUser()
  // const { data, error } = useSWR(
  //   `https://cors.zme.ink/${user.playerApiUrl}&action=get_vod_streams&category_id=${categoryId}`,
  //   fetcher
  // )
  const { data, error } = useSWR(
    makeTempUrl(
      `${user.playerApiUrl}&action=get_vod_streams&category_id=${categoryId}`
    ),
    fetcher
  )
  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useMovieSingle(movieId) {
  const { user } = useUser()
  // const { data, error } = useSWR(
  //   `https://cors.zme.ink/${user.playerApiUrl}&action=get_vod_info&vod_id=${movieId}`,
  //   fetcher
  // )
  const { data, error } = useSWR(
    makeTempUrl(`${user.playerApiUrl}&action=get_vod_info&vod_id=${movieId}`),
    fetcher
  )
  return {
    movie: data,
    isLoading: !error && !data,
    isError: error,
  }
}
