import { useSeriesCategories } from 'hooks/series'
import SeriesCategoriesList from './SeriesCategoriesList'
import ContentSpinner from './Spinner/ContentSpinner'

export default function SeriesCategoriesContent() {
  const { categories, isLoading, isError } = useSeriesCategories()

  if (isLoading) return <ContentSpinner />
  if (isError) return <div>oops :(</div>

  return <SeriesCategoriesList categories={categories} />
}
