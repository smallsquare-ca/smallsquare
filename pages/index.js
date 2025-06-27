import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Smallsquare Digital Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Smallsquare Digital Marketing" />
        <p className="description">
          Contact info@smallsquare.ca to get in touch <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
