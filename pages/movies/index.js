import MoviesCategoriesContent from '@/components/MoviesCateriesContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function MoviesCategories() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - movies</title>
      </Head>
      <MoviesCategoriesContent />
    </PageLayout>
  )
}
