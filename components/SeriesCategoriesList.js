import { Box, InfiniteScroll, Text } from 'grommet'
import Link from 'next/link'

export default function SeriesCategoriesList({ categories, ...props }) {
  return (
    <Box>
      <InfiniteScroll items={categories} {...props}>
        {(item) => (
          <Link
            href="/series/[categoryId]"
            as={`/series/${item?.category_id}`}
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
