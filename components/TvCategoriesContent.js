import { TextInput } from 'grommet'
import { useState } from 'react'
import ContentSpinner from './Spinner/ContentSpinner'
import { Search } from 'grommet-icons'
import ChannelCategoriesList from './ChannelsCategoriesList'
import { useTvCategories } from 'hooks/tv'

export default function TvCategoriesContent() {
  const { categories, isLoading, isError } = useTvCategories()
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
      <ChannelCategoriesList categories={filterdCategories} />
    </>
  )
}
