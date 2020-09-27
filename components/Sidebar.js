import {
  Anchor,
  Box,
  Button,
  Collapsible,
  ResponsiveContext,
  Sidebar,
  Text,
} from 'grommet'
import { Channel, Ticket, Video } from 'grommet-icons'
import { useContext } from 'react'
import Link from 'next/link'
import React from 'react'

const SidebarButton = React.forwardRef(
  ({ href, icon, label, ...rest }, ref) => {
    return (
      <Box pad="small">
        <Button
          ref={ref}
          href={href}
          as="a"
          gap="medium"
          alignSelf="start"
          plain
          icon={icon}
          label={label}
          {...rest}
        />
      </Box>
    )
  }
)
SidebarButton.displayName = 'SidebarButton'

function SidebarFooter() {
  return (
    <Text>
      Made with ❤️ by{' '}
      <Anchor href="https://github.com/blackpr" target="_blank">
        blackpr
      </Anchor>
    </Text>
  )
}

export default function XTRMSidebar() {
  const size = useContext(ResponsiveContext)
  const openSidebar = size !== 'small'
  return (
    <Collapsible direction="horizontal" open={openSidebar}>
      <Sidebar
        responsive
        background="neutral-3"
        pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
        footer={<SidebarFooter />}
      >
        <Link passHref href="/series">
          <SidebarButton icon={<Video />} label="Series" />
        </Link>
        <Link passHref href="/movies">
          <SidebarButton icon={<Ticket />} label="Movies" />
        </Link>
        <Link passHref href="/tv">
          <SidebarButton icon={<Channel />} label="TV" />
        </Link>
      </Sidebar>
    </Collapsible>
  )
}
