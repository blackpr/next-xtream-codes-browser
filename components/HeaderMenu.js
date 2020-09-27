import { Anchor, Box, Menu, Nav, ResponsiveContext } from 'grommet'
import Link from 'next/link'
import { useContext } from 'react'
import { Menu as MenuIcon } from 'grommet-icons'
import { Channel, Ticket, Video, Logout } from 'grommet-icons'

export default function HeaderMenu() {
  const size = useContext(ResponsiveContext)

  return (
    <>
      {size === 'small' ? (
        <Menu
          a11yTitle="Navigation Menu"
          dropProps={{ align: { top: 'bottom', right: 'right' } }}
          icon={<MenuIcon color="brand" />}
          items={[
            {
              label: (
                <Box alignSelf="center">
                  <Link passHref href="/series">
                    <Anchor label="Series" href="/series" />
                  </Link>
                </Box>
              ),
              href: '/series',
              icon: (
                <Box pad="medium">
                  <Video size="large" />
                </Box>
              ),
            },
            {
              label: (
                <Box alignSelf="center">
                  <Link passHref href="/movies">
                    <Anchor label="Movies" href="/movies" />
                  </Link>
                </Box>
              ),
              href: '/movies',
              icon: (
                <Box pad="medium">
                  <Ticket size="large" />
                </Box>
              ),
            },
            {
              label: (
                <Box alignSelf="center">
                  <Link passHref href="/tv">
                    <Anchor label="TV" href="/tv" />
                  </Link>
                </Box>
              ),
              href: '/tv',
              icon: (
                <Box pad="medium">
                  <Channel size="large" />
                </Box>
              ),
            },
            {
              label: (
                <Box alignSelf="center">
                  <Link passHref href="/logout">
                    <Anchor label="Logout" href="/logout" />
                  </Link>
                </Box>
              ),
              href: '/logout',
              icon: (
                <Box pad="medium">
                  <Logout size="large" />
                </Box>
              ),
            },
          ]}
        />
      ) : (
        <Nav direction="row">
          <Link passHref href="/logout">
            <Anchor label="Logout" href="/logout" />
          </Link>
        </Nav>
      )}
    </>
  )
}
