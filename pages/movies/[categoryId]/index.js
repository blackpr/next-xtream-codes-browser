import MoviesCategoryContent from '@/components/MoviesCategoryContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function MoviesCategory() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - movies</title>
      </Head>
      <MoviesCategoryContent />
    </PageLayout>
  )
}
