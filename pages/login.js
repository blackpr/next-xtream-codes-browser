import Notification from '@/components/Notification'
import { Anchor, Box, Button, Form, FormField, Text, TextInput } from 'grommet'
import LoginLayout from 'layout/Login'
import Link from 'next/link'
import { useState } from 'react'

const LoginNav = () => {
  return (
    <Link passHref href="/logout">
      <Anchor label="Logout" href="/logout" />
    </Link>
  )
}

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  function handleSubmit({ value }) {
    console.log('todo', value)
    setLoading(true)
    let url = `${value.host}:${value.port}/player_api.php?username=${value.username}&password=${value.password}&output=ts`
    fetch(url)
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => {
              if (data?.user_info?.auth === 1) {
                console.log(data)
                // todo
              }
            })
            .catch((e) => {
              console.log(e)
              setShowNotification(true)
              setLoading(false)
            })
        }
      })
      .catch((e) => {
        console.log(e)
        setShowNotification(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <LoginLayout LoginNav={<LoginNav />}>
      <Form onSubmit={handleSubmit}>
        <FormField name="Host" htmlfor="host">
          <TextInput
            id="host"
            name="host"
            placeholder="Host. eg: http://zzz.xxx"
          />
        </FormField>
        <FormField name="Port" htmlfor="Port">
          <TextInput id="Port" name="port" placeholder="Port. ex: 80" />
        </FormField>
        <FormField name="Username" htmlfor="Username">
          <TextInput id="Username" name="username" placeholder="Username" />
        </FormField>
        <FormField name="Password" htmlfor="Password">
          <TextInput id="Password" name="password" placeholder="Password" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Go!" disabled={loading} />
          {/* <Button type="reset" label="Reset" /> */}
        </Box>
      </Form>
      <Notification
        type="error"
        onClose={() => setShowNotification(false)}
        open={showNotification}
      >
        <Text>Oooops :(</Text>
      </Notification>
    </LoginLayout>
  )
}
