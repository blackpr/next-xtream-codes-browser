import { useUser } from 'context/userContext'
import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Box, Button, Heading, Paragraph, Text } from 'grommet'
import Notification from './Notification'

export default function MoviesSingleDetails({ movie }) {
  const { user } = useUser()
  const [showNotification, setShowNotification] = useState(false)
  const movieData = movie?.movie_data || {}
  const url = `${user?.host}:${user?.port}/movie/${user?.username}/${user?.password}/${movieData?.stream_id}.${movieData?.container_extension}`

  function handleCopyUrl() {
    copy(url)
    setShowNotification(true)
  }

  return (
    <Box>
      <Heading>{movie?.movie_data?.name}</Heading>
      <Text>{movie?.info?.genre}</Text>
      <Paragraph>{movie?.info?.plot}</Paragraph>
      <Box align="start">
        <Heading size="small" level={3}>
          {url}
        </Heading>
        <Button onClick={handleCopyUrl} label="Copy URL" />
      </Box>
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
