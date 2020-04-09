import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props
    return (
      <div>
        <Layout title="Oh no! 😢">
          {statusCode === 404 ? (
            <div className="message">
              <h1>Esta página no exite 😟</h1>
              <p>
                <Link href="/">
                  <a>Volver al Inicio</a>
                </Link>
              </p>
            </div>
          ) : (
            <div className="message">
              <h1>Hubo un problema 😖</h1>
              <p>Intenta nuevamente en unos segundos</p>
            </div>
          )}
        </Layout>

        <style jsx>{`
          .message {
            padding: 100px 30px;
            text-align: center;
          }
          h1 {
            margin-bottom: 2em;
          }
          a {
            color: #8756ca;
            padding: 1em 2em;
            background-color: #2a0a22;
            border-radius: 20px;
            color: #eee;
          }
        `}</style>
      </div>
    )
  }
}
