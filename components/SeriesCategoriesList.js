import { Box, InfiniteScroll, Text } from 'grommet'
export default function SeriesCategoriesList({ categories, ...props }) {
  return (
    <Box>
      <InfiniteScroll items={categories} {...props}>
        {(item) => (
          <Box
            key={item?.category_id}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
          >
            <Text>{item?.category_name}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  )
}
