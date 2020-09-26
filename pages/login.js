import { Anchor, Avatar, Box, Heading, Nav } from 'grommet'
import { Grommet } from 'grommet'

export default function Login() {
  return (
    <Grommet full>
      <Box fill>
        <Box
          as="header"
          direction="row"
          align="center"
          pad={{ vertical: 'small', horizontal: 'medium' }}
          justify="between"
          background="neutral-3"
          elevation="large"
          style={{ zIndex: '1000' }}
        >
          <Box direction="row" align="center">
            <Avatar
              margin={{ right: 'medium' }}
              src="https://randomuser.me/api/portraits/lego/8.jpg"
            />
            <Heading level={3} margin="none" color="white">
              <strong>XTREAM CODES browser</strong>
            </Heading>
          </Box>
          <Nav direction="row">
            <Anchor label="Login" href="#" />
            <Anchor label="Logout" href="#" />
          </Nav>
        </Box>
        <Box flex direction="row">
          <Box flex align="center" justify="center">
            Dashboard content goes here, click on the notification icon
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
}
