import { TextInput } from 'grommet'
import { Search } from 'grommet-icons'
import { useSeriesCategory } from 'hooks/series'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SeriesCategoryList from './SeriesCategoryList'
import ContentSpinner from './Spinner/ContentSpinner'

export default function SeriesCategoryContent() {
  const router = useRouter()
  const { categoryId } = router.query
  const { series, isLoading, isError } = useSeriesCategory(categoryId)

  const [searchInput, setSearchInput] = useState('')

  if (isLoading) return <ContentSpinner />
  if (isError) return <div>oops :(</div>

  let filterdSeries = [...series]

  if (searchInput) {
    filterdSeries = series.filter((serie) =>
      serie?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
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
      <SeriesCategoryList series={filterdSeries} />
    </>
  )
}
