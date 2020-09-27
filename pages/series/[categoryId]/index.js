import SeriesCategoryContent from '@/components/SeriesCategoryContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function SeriesCategory() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - series</title>
      </Head>
      <SeriesCategoryContent />
    </PageLayout>
  )
}
