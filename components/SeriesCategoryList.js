import { Box, InfiniteScroll, Text } from 'grommet'
import Link from 'next/link'

export default function SeriesCategoryList({ series }) {
  return (
    <Box>
      <InfiniteScroll items={series}>
        {(item) => (
          <Link
            href="/series/[categoryId]/[seriesId]"
            as={`/series/${item?.category_id}/${item?.series_id}`}
            key={item?.series_id}
          >
            <Box
              as="a"
              key={item?.series_id}
              pad="medium"
              border={{ side: 'bottom' }}
              align="center"
            >
              <Text>{item?.name}</Text>
            </Box>
          </Link>
        )}
      </InfiniteScroll>
    </Box>
  )
}
