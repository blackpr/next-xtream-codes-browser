import TvCategoriesContent from '@/components/TvCategoriesContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function TvPages() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - TV</title>
      </Head>
      <TvCategoriesContent />
    </PageLayout>
  )
}
