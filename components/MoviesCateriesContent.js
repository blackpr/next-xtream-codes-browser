import { TextInput } from 'grommet'
import { Search } from 'grommet-icons'
import { useMoviesCategories } from 'hooks/movies'
import { useState } from 'react'
import MoviesCategoriesList from './MoviesCategoriesList'
import ContentSpinner from './Spinner/ContentSpinner'

export default function MoviesCategoriesContent() {
  const { categories, isLoading, isError } = useMoviesCategories()
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
      <MoviesCategoriesList categories={filterdCategories} />
    </>
  )
}
