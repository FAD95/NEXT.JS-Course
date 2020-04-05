export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>¡Hola Mundo!</h1>
        <p>Mi primera pagina en next.js</p>
        <img src="/platzi-logo.webp" alt="Platzi" />
        <style jsx>{`
          div {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          h1 {
            color: red;
          }
          p {
            color: green;
          }
          img {
            max-width: 45%;
            display: block;
          }
        `}</style>
        <style jsx global>{`
          body {
            background: white;
          }
        `}</style>
      </div>
    )
  }
}
