import { TextInput } from 'grommet'
import { useSeriesCategories } from 'hooks/series'
import { useState } from 'react'
import SeriesCategoriesList from './SeriesCategoriesList'
import ContentSpinner from './Spinner/ContentSpinner'
import { Search } from 'grommet-icons'

export default function SeriesCategoriesContent() {
  const { categories, isLoading, isError } = useSeriesCategories()
  const [searchInput, setSearchInput] = useState('')

  if (isLoading) return <ContentSpinner />
  if (isError) return <div>oops :(</div>

  let filterdCategories = [...categories]

  if (searchInput) {
    filterdCategories = categories.filter((category) =>
      category?.category_name
        ?.toLowerCase()
        ?.includes(searchInput?.toLowerCase())
    )
  }

  return (
    <>
      <TextInput
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        icon={<Search color="brand" />}
        placeholder="search ..."
      />
      <SeriesCategoriesList categories={filterdCategories} />
    </>
  )
}
