import SeriesCategoriesContent from '@/components/SeriesCategoriesContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function SeriesPage() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - series</title>
      </Head>
      <SeriesCategoriesContent />
    </PageLayout>
  )
}
