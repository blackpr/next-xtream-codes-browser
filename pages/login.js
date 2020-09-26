import { Anchor, Box, Button, Form, FormField, TextInput } from 'grommet'
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
  function handleSubmit({ value }) {
    console.log('todo', value)
  }
  return (
    <LoginLayout LoginNav={<LoginNav />}>
      <Form onSubmit={handleSubmit}>
        <FormField name="Host" htmlfor="host">
          <TextInput
            id="host"
            name="Host"
            placeholder="Host. eg: http://zzz.xxx"
          />
        </FormField>
        <FormField name="Port" htmlfor="Port">
          <TextInput id="Port" name="Port" placeholder="Port. ex: 80" />
        </FormField>
        <FormField name="Username" htmlfor="Username">
          <TextInput id="Username" name="Username" placeholder="Username" />
        </FormField>
        <FormField name="Password" htmlfor="Password">
          <TextInput id="Password" name="Password" placeholder="Password" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Go!" />
          {/* <Button type="reset" label="Reset" /> */}
        </Box>
      </Form>
    </LoginLayout>
  )
}
