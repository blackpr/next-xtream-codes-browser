import ChannelCategoryContent from '@/components/ChannelCategoryContent'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function TvCategory() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser - TV</title>
      </Head>
      <ChannelCategoryContent />
    </PageLayout>
  )
}
