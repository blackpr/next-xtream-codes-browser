import { Anchor } from 'grommet'
import LoginLayout from 'layout/Login'
import Link from 'next/link'

const LoginNav = () => {
  return (
    <Link passHref href="/logout">
      <Anchor label="Logout" href="/logout" />
    </Link>
  )
}

export default function Login() {
  return <LoginLayout LoginNav={<LoginNav />}>Content</LoginLayout>
}
