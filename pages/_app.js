import Head from 'next/head'
import { Fragment } from 'react'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Events</title>
        <meta name='description' content='Add or browse upcoming events in Bosnia and Herzegovina'/>
        
      </Head>

      <Layout>
        <Component {...pageProps} />

      </Layout>
    </Fragment>
  )
}

export default MyApp
