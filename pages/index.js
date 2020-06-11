import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pesquisador de filmes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Testes iniciais do <a href="#">Pesquisador de filmes</a>
        </h1>

        <p className="description">
           <Link href="/api/hello"><a>Buscar os filmes (JSON)</a></Link>
        </p>

      <div>
        Entre no <Link href="/api/hello"><a>link</a></Link>, copie o texto retornado, cole na aba <b>Text</b> do
        <a href="http://jsonviewer.stack.hu/"> jsonviewer</a> e clique na aba <b>Viewer</b>
      </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
