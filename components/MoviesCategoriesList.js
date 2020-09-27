import { Box, InfiniteScroll, Text } from 'grommet'
import Link from 'next/link'

export default function MoviesCategoriesList({ categories }) {
  return (
    <Box>
      <InfiniteScroll items={categories}>
        {(item) => (
          <Link
            href="/movies/[movieId]"
            as={`/movies/${item?.category_id}`}
            key={item?.category_id}
          >
            <Box
              as="a"
              key={item?.category_id}
              pad="medium"
              border={{ side: 'bottom' }}
              align="center"
            >
              <Text>{item?.category_name}</Text>
            </Box>
          </Link>
        )}
      </InfiniteScroll>
    </Box>
  )
}
