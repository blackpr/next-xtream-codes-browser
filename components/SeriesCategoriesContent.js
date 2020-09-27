import { useSeriesCategories } from 'hooks/series'
import SeriesCategoriesList from './SeriesCategoriesList'

export default function SeriesCategoriesContent() {
  const { categories, isLoading, isError } = useSeriesCategories()

  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>
  return <SeriesCategoriesList categories={categories} />
}
