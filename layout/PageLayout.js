import LoginGuard from '@/components/LoginGuard'
import XTRMSidebar from '@/components/Sidebar'
import { Anchor, Avatar, Box, Grommet, Heading, Nav } from 'grommet'
import Link from 'next/link'

export default function PageLayout({ children }) {
  return (
    <LoginGuard>
      <Grommet full>
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
          <Nav direction="row">
            <Link passHref href="/logout">
              <Anchor label="Logout" href="/logout" />
            </Link>
          </Nav>
        </Box>
        <Box direction="row">
          <Box direction="row" height={{ min: '92vh' }}>
            <XTRMSidebar />
          </Box>
          <Box pad="large" flex="grow">
            {children}
          </Box>
        </Box>
      </Grommet>
    </LoginGuard>
  )
}
