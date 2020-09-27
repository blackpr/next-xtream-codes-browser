import MoviesSingleContent from '@/components/MoviesSingleContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function SeriesSingle() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - movies</title>
      </Head>
      <MoviesSingleContent />
    </PageLayout>
  )
}
