import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ComponenteDummy from '../components/ComponenteDummy/ComponenteDummy'
import Counter from '../components/Counter/Counter'


export default function Home() {
  return (
    <>
      <Head>
        <title>Example RTL next and TS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        
        <ComponenteDummy></ComponenteDummy>
        <Counter></Counter>
        
      </main>
    </>
  )
}
