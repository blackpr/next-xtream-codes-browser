import { useSeriesCategories } from 'hooks/series'

export default function SeriesCategoriesContent() {
  const { categories, isLoading, isError } = useSeriesCategories()

  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>
  console.log(categories)
  return <div>series categories</div>
}
