import { TextInput } from 'grommet'
import { Search } from 'grommet-icons'
import { useTvCategory } from 'hooks/tv'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ChannelCategoryList from './ChannelCategoryList'
import ContentSpinner from './Spinner/ContentSpinner'

export default function ChannelCategoryContent() {
  const router = useRouter()
  const { categoryId } = router.query
  const { channels, isLoading, isError } = useTvCategory(categoryId)

  const [searchInput, setSearchInput] = useState('')

  if (isLoading) return <ContentSpinner />
  if (isError) return <div>oops :(</div>

  let fiteredChannels = [...channels]

  if (searchInput) {
    fiteredChannels = channels.filter((channels) =>
      channels?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
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
      <ChannelCategoryList channels={fiteredChannels} />
    </>
  )
}
