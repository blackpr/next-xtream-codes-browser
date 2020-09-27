import { Box, Text } from 'grommet'
import { Channel, Ticket, Video } from 'grommet-icons'
import Link from 'next/link'

export default function HomeContent() {
  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="large"
      gap="medium"
    >
      <Link passHref href="/series">
        <Box
          as="a"
          href="/series"
          pad="large"
          align="center"
          background={{ color: 'brand', opacity: 'strong' }}
          round
          gap="small"
        >
          <Video size="large" />
          <Text>Series</Text>
        </Box>
      </Link>
      <Link passHref href="/movies">
        <Box
          as="a"
          href="/movies"
          pad="large"
          align="center"
          background={{ color: 'brand', opacity: 'strong' }}
          round
          gap="small"
        >
          <Ticket size="large" />
          <Text>Movies</Text>
        </Box>
      </Link>
      <Link passHref href="/tv">
        <Box
          as="a"
          href="/tv"
          pad="large"
          align="center"
          background={{ color: 'brand', opacity: 'strong' }}
          round
          gap="small"
        >
          <Channel size="large" />
          <Text>TV</Text>
        </Box>
      </Link>
    </Box>
  )
}

// const cards = Array(20)
// .fill()
// .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>)
{
  /* <Box pad="large">
      <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
        {cards.map((card, index) => (
          <Card pad="large" key={index}>
            {card}
          </Card>
        ))}
      </Grid>
    </Box> */
}
