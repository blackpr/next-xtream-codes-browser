import { Box, Button, InfiniteScroll, Text } from 'grommet'
import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { useUser } from 'context/userContext'
import Notification from './Notification'

export default function ChannelCategoryList({ channels }) {
  const [showNotification, setShowNotification] = useState(false)
  const { user } = useUser()

  function handleCopyUrl(item) {
    const url = `${user?.host}:${user?.port}/${user?.username}/${user?.password}/${item?.stream_id}`
    copy(url)
    setShowNotification(true)
  }

  return (
    <Box>
      <InfiniteScroll items={channels}>
        {(item) => (
          <Box
            as="a"
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
            <Text>{item?.name}</Text>
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
