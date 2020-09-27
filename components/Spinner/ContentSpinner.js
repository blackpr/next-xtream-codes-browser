import { Box, Stack } from 'grommet'
import SpinnerDefault from './SpinnerDefault'

export default function ContentSpinner() {
  return (
    <Stack fill>
      <Box fill justify="center">
        <SpinnerDefault />
      </Box>
    </Stack>
  )
}
