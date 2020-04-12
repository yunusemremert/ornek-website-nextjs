import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Ana Sayfa</title>
        </Head>
        <h1>İlk Next.js projem!</h1>
        <p>scoped!</p>
        <style jsx>{`
          p {
            color: blue;
          }
          div {
            background: red;
          }
          @media (max-width: 600px) {
            div {
              background: blue;
            }
          }
        `}</style>
        <style global jsx>{`
          body {
            background: white;
          }
        `}</style>
      </Layout>
    </div>
  )
}
export default HomePage
