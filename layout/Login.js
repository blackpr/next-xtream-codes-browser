import { Avatar, Box, Heading, Nav } from 'grommet'
import { Grommet } from 'grommet'

export default function LoginLayout({ LoginNav, children }) {
  return (
    <Grommet full>
      <Box fill>
        <Box
          as="header"
          direction="row"
          align="center"
          pad={{ vertical: 'small', horizontal: 'medium' }}
          justify="between"
          background="neutral-2"
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
          <Nav direction="row">{LoginNav}</Nav>
        </Box>
        <Box flex direction="row">
          <Box flex align="center" justify="center">
            {children}
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
}
