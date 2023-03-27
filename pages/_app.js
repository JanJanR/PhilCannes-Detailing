import '@/styles/globals.scss'
import Layout from "../comps/Layout"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
