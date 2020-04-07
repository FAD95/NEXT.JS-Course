import 'isomorphic-fetch'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    let idChannel = query.id

    let [reqChannel, reqAudios, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    ])

    //   Llama el canal con el id especificado
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    //   LLama los archivos de audio principales del podcast
    let dataAudios = await reqAudios.json()
    let audio_clips = dataAudios.body.audio_clips

    //   LLama los archivos de audio de subseries del podcast
    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels
    return { channel, audio_clips, series }
  }
  render() {
    const { channel, audio_clips, series } = this.props
    return (
      <div>
        <Link href="/">
          <a>
            <header>Podcasts</header>{' '}
          </a>
        </Link>
        {console.log(channel.urls.banner_image.original)}
        {channel.urls.banner_image.original != null ? (
          <img
            className="banner"
            src={channel.urls.banner_image.original}
            alt={`${channel.title} banner`}
          />
        ) : (
          <div className="defaultBanner">
            <h1>{channel.title}</h1>
          </div>
        )}

        <p>{channel.description}</p>

        {audio_clips > [] ? (
          <>
            <h2>Ultimos Podcast</h2>
            {audio_clips.map((clip) => (
              <Link key={clip.id} href={`/podcast?id=${clip.id}`}>
                <a className="podcast">
                  <h3>{clip.title}</h3>
                  <div className="meta">
                    {Math.ceil(clip.duration / 60)} minutes
                  </div>
                </a>
              </Link>
            ))}
          </>
        ) : null}

        {series > [] ? (
          <>
            <h2>Series</h2>
            {series.map((serie) => (
              <Link key={serie.id} href={`/channel?id=${serie.id}`}>
                <a className="podcast">
                  <h3>{serie.title}</h3>
                </a>
              </Link>
            ))}
            {console.log(series)}
          </>
        ) : null}

        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
          }
          .defaultBanner {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #2a0a22;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
          }
          .defaultBanner h1 {
            font-size: 7em;
            text-align: center;
            color: #bbb;
          }
          .banner {
            width: 100%;
          }
          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
          .podcast:hover {
            color: #000;
          }
          .podcast h3 {
            margin: 0;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
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
