import { useUser } from 'context/userContext'
import { Box, Button, Heading, Select, Text } from 'grommet'
import { useState } from 'react'
import copy from 'copy-to-clipboard'
import Notification from './Notification'

export default function SereisSingleList({ series }) {
  const [season, setSeason] = useState({})
  const [episode, setEpisode] = useState({})
  const [episodes, setEpisodes] = useState([{ val: '', lab: '' }])
  const { user } = useUser()
  const [showNotification, setShowNotification] = useState(false)

  const seasons = Object.keys(series?.episodes)?.map((key) => ({
    lab: `Season ${key}`,
    val: key,
  }))

  function handleSetEpisodes(seasonNumber) {
    const seasonEpisodes = series?.episodes?.[seasonNumber].map((episode) => ({
      lab: episode?.title,
      val: episode?.id,
      ...episode,
    }))
    setEpisode({ val: '', lab: '' })
    setEpisodes(seasonEpisodes)
  }

  function handleCopyUrl() {
    copy(url)
    setShowNotification(true)
  }

  const showUrl = season?.val && episode?.val

  const url =
    showUrl &&
    `${user?.host}:${user?.port}/series/${user?.username}/${user?.password}/${episode?.id}.${episode?.container_extension}`

  return (
    <>
      <Heading>{series?.info?.name}</Heading>
      <Box gap="medium">
        <Select
          value={season}
          name="season"
          placeholder="Select Season"
          multiple
          options={seasons}
          labelKey="lab"
          valueKey="val"
          onChange={({ option }) => {
            setSeason(option)
            handleSetEpisodes(option.val)
          }}
        />

        {season?.val && (
          <Select
            value={episode}
            name="episode"
            placeholder="Select Episode"
            multiple
            options={episodes}
            labelKey="lab"
            valueKey="val"
            onChange={({ option }) => {
              setEpisode(option)
            }}
          />
        )}
        {showUrl && (
          <Box align="start">
            <Button onClick={handleCopyUrl} label="Copy URL" />
            <Heading size="small" level={3}>
              {url}
            </Heading>
          </Box>
        )}
      </Box>
      <Notification
        type="ok"
        onClose={() => setShowNotification(false)}
        open={showNotification}
      >
        <Text>Copied to clipboard</Text>
      </Notification>
    </>
  )
}
