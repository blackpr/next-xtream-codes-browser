import { useSeriesSingle } from 'hooks/series'
import ContentSpinner from './Spinner/ContentSpinner'
import SereisSingleList from './SeriesSingleList'
import { useRouter } from 'next/router'

export default function SeriesSingleContnet() {
  const router = useRouter()
  const { seriesId } = router.query
  const { series, isLoading, isError } = useSeriesSingle(seriesId)

  if (isLoading) return <ContentSpinner />
  if (isError) return <div>oops :(</div>

  return <SereisSingleList series={series} />
}
