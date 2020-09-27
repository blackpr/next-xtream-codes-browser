import ContentSpinner from './Spinner/ContentSpinner'
import { useRouter } from 'next/router'
import { useMovieSingle } from 'hooks/movies'
import MoviesSingleDetails from './MoviesSingleDetails'

export default function MoviesSingleContent() {
  const router = useRouter()
  const { movieId } = router.query
  const { movie, isLoading, isError } = useMovieSingle(movieId)

  if (isLoading) return <ContentSpinner />
  if (isError) return <div>oops :(</div>

  return <MoviesSingleDetails movie={movie} />
}
