import Link from 'next/link'
import Head from 'next/head'
export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <Link href="/">
          <a>
            <header>Podcasts</header>
          </a>
        </Link>

        {children}
        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
        `}</style>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </div>
    )
  }
}
