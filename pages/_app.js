import {useEffect} from 'react'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import('lit-pw/dist/bundle')
  },[])
  return (
    <>
      <Head>
      <meta name="google-site-verification" content="ukpf0_hN5N4IQLTrvLSH2xd9kaWmk6E_TYRkjjNTI64" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
