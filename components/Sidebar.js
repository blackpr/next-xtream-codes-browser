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

function SidebarButton({ icon, label, ...rest }) {
  return (
    <Box pad="small">
      <Button
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
        <SidebarButton icon={<Video />} label="Series" />
        <SidebarButton icon={<Ticket />} label="Movies" />
        <SidebarButton icon={<Channel />} label="TV" />
      </Sidebar>
    </Collapsible>
  )
}
