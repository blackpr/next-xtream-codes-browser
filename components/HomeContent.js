import { Box, Card, Grid, ResponsiveContext, Text } from 'grommet'
import { useContext } from 'react'

export default function HomeContent() {
  const size = useContext(ResponsiveContext)
  const cards = Array(20)
    .fill()
    .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>)
  return (
    <Box pad="large">
      <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
        {cards.map((card, index) => (
          <Card pad="large" key={index}>
            {card}
          </Card>
        ))}
      </Grid>
    </Box>
  )
}
