import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import('lit-pw/dist/bundle')
  },[])
  return <Component {...pageProps} />
}

export default MyApp
