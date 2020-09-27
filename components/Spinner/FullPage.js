import { Box, Layer } from 'grommet'
import SpinnerDefault from '@/components/Spinner/SpinnerDefault'

export default function FullPageSpinner() {
  return (
    <Layer full animation="fadeIn">
      <Box fill background="light-4" align="center" justify="center">
        <SpinnerDefault />
      </Box>
    </Layer>
  )
}
