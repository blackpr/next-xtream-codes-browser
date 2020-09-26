import LoginGuard from '@/components/LoginGuard'
import { Grommet } from 'grommet'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Grommet full themeMode="dark">
      <LoginGuard>
        <div className={styles.container}>
          <Head>
            <title>XTREAM CODES browser</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </div>
      </LoginGuard>
    </Grommet>
  )
}
