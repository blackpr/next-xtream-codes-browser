import { Box, Button, Layer, Text } from 'grommet'
import { FormClose } from 'grommet-icons'
import { useEffect, useRef } from 'react'

export default function Notification({
  type = 'unknown',
  open,
  onClose,
  children,
}) {
  // clear notification after some time
  let timeout = useRef(null)

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (open === true) {
        onClose()
      }
    }, 1500)
  }, [open])

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
  }, [])

  function handleClose() {
    onClose()
  }

  return (
    <>
      {open && (
        <Layer
          position="bottom"
          modal={false}
          margin={{ vertical: 'medium', horizontal: 'small' }}
          onEsc={handleClose}
          responsive={false}
          plain
        >
          <Box
            align="center"
            direction="row"
            gap="small"
            justify="between"
            round="medium"
            elevation="medium"
            pad={{ vertical: 'xsmall', horizontal: 'small' }}
            background={`status-${type}`}
          >
            <Box align="center" direction="row" gap="xsmall">
              <Text>{children}</Text>
            </Box>
            <Button icon={<FormClose />} onClick={handleClose} plain />
          </Box>
        </Layer>
      )}
    </>
  )
}
