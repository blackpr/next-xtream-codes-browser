import FullPageSpinner from '@/components/Spinner/FullPage'
import PageLayout from 'layout/PageLayout'
import Head from 'next/head'

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>XTREAM CODES browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>yo</div>
      <FullPageSpinner />
    </PageLayout>
  )
}
