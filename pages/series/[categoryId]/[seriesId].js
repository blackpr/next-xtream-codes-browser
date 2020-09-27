import SeriesSingleContnet from '@/components/SeriesSingleContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function SeriesSingle() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - series</title>
      </Head>
      <SeriesSingleContnet />
    </PageLayout>
  )
}
