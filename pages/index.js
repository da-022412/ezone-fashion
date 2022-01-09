import Head from 'next/head'
import Image from 'next/image'
import indexStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={indexStyles.container}>
      <Head>
        <title>E-Zone US</title>
        <meta name="description" content="E-Zone US" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
