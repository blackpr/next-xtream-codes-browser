import { TextInput } from 'grommet'
import { Search } from 'grommet-icons'
import { useMoviesCategory } from 'hooks/movies'
import { useRouter } from 'next/router'
import { useState } from 'react'
import MoviesCategoryList from './MoviesCategoryList'
import ContentSpinner from './Spinner/ContentSpinner'

export default function MoviesCategoryContent() {
  const router = useRouter()
  const { categoryId } = router.query
  const { movies, isLoading, isError } = useMoviesCategory(categoryId)

  const [searchInput, setSearchInput] = useState('')

  if (isLoading) return <ContentSpinner />
  if (isError) return <div>oops :(</div>

  let filteredMovies = [...movies]

  if (searchInput) {
    filteredMovies = movies.filter((movie) =>
      movie?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
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
      <MoviesCategoryList movies={filteredMovies} />
    </>
  )
}
