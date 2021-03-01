import Head from 'next/head';



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> RUA dos links</title>
        <link rel="icon" href="favicon.ico" />
        <script
          async
          defer
          data-website-id="39d4097d-a382-4288-94eb-de9889a649e6"
          src="https://umami.dev01d.com/umami.js"
        ></script>
        <script
          async
          src="https://analytics.dev01d.com/tracker.js"
          data-ackee-server="https://analytics.dev01d.com"
          data-ackee-domain-id="8685382f-86fa-4aeb-9004-32f4a194af33"
        ></script>
      </Head>

      <main>
        <img className="image" src="profile.png" />
        <h3 className="description">R.U.A - Respeito, União e Arte</h3>
        <div className="grid">
          <a href="https://ruaearte.com.br" className="card">
            <h3>Website</h3>
          </a>
          <a href="https://www.instagram.com/ruaearte.mao/" className="card">
            <h3>Instagram</h3>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5592981493108&text=Texto%20aqui" className="card">
          <h3>Whatsapp</h3>
          </a>
          <a href="https://github.com/dev01d" className="card">
            <h3>Outro</h3>
          </a>
          <a href="https://www.twitch.tv/dev01d_" className="card">
            <h3>Outro2</h3>
          </a>
          
        </div>
      </main>
      <footer >
        <a
          href="https://ruaearte.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img src="/vercel.svg" alt="R.U.A @agência digital 2021"  />
        </a>
      </footer>

      <style jsx>{`
        .container {
          background-color:#000;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .image {
          border-radius: 50%;
          height: 200px;
          width: 200px;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        .title a {
          color: #fff;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          color:#fff;
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          color: #fff;
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 0.5rem 1rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          margin: 0.5rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          background: #000;

          color: #fff;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-width: 350px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #fff;
          border-color: #8ac926;
          background-color:#8ac926;
        }

        .card h3 {
          margin: 0 3rem 0 3rem;
          font-size: 1.5rem;
        }

        .footer {
          color:#8ac926;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color:#region 000;
        }

        /** Dark mode */
        @media (prefers-color-scheme: dark) {
          .container {
            background: rgb(53, 53, 53);
          }
          .description {
            color: white;
          }
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        @media (max-width: 350px) {
          .card h3 {
            margin: 0 3rem 0 3rem;
            font-size: 1.25rem;
          }
          .card {
            min-width: 275px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:  Noto Sans, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
