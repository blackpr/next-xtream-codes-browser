import { Box, Button, InfiniteScroll, Text } from 'grommet'
import Link from 'next/link'
import copy from 'copy-to-clipboard'
import Notification from './Notification'
import { useState } from 'react'
import { useUser } from 'context/userContext'

export default function MoviesCategoryList({ movies }) {
  const [showNotification, setShowNotification] = useState(false)
  const { user } = useUser()

  function handleCopyUrl(item) {
    const url = `${user?.host}:${user?.port}/${item.stream_type || 'movie'}/${
      user?.username
    }/${user?.password}/${item?.stream_id}.${item?.container_extension}`
    copy(url)
    setShowNotification(true)
  }

  return (
    <Box>
      <InfiniteScroll items={movies}>
        {(item) => (
          <Box
            key={item?.stream_id}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
            fill
            alignContent="center"
            justify="center"
            direction="row"
            gap="medium"
          >
            <Link
              href="/movies/[categoryId]/[seriesId]"
              as={`/movies/${item?.category_id}/${item?.stream_id}`}
              key={item?.stream_id}
            >
              <Box direction="row">
                <Text>{item?.name}</Text>{' '}
                <Text>
                  {' '}
                  {' - '} {`Rating: ${item?.rating}`}
                </Text>
              </Box>
            </Link>
            <Button
              onClick={() => handleCopyUrl(item)}
              size="small"
              label="Copy URL"
            />
          </Box>
        )}
      </InfiniteScroll>
      <Notification
        type="ok"
        onClose={() => setShowNotification(false)}
        open={showNotification}
      >
        <Text>Copied to clipboard</Text>
      </Notification>
    </Box>
  )
}
