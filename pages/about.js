export default class extends React.Component {
  render() {
    return (
      <div>
        <article>
          <img src="/rick-and-morty.png" alt="Rick and Morty" />
          <h1>Creado por FAD! 👽</h1>
          <section>
            <p>Curso de NEXT.JS</p>
            <span>
              <img src="/platzi-logo.webp" alt="Platzi" />
              <p>Platzi</p>
            </span>
          </section>
        </article>

        <style jsx>{`
          article {
            display: flex;
            height: 100vh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          img {
            max-width: 700px;
          }
          h1 {
            margin-top: 60px;
            font-size: 33px;
          }
          p {
            font-size: 16px;
          }
          section {
            display: flex;
            align-items: center;
          }
          span {
            display: flex;
            margin-left: 10px;
          }
          span img {
            width: 35px;
            height: 40px;
            margin-right: 10px;
          }
        `}</style>

        <style jsx global>{`
          body {
            background: #333;
          }
          h1,
          p {
            font-family: monospace;
            color: #00b0c9;
          }
        `}</style>
      </div>
    )
  }
}
