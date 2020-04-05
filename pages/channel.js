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
        <header>Podcasts</header>
        <h1>{channel.title}</h1>
        <h2>Series</h2>
        {series.map((serie) => (
          <Link href={`/podcast?id=${serie.id}`}>
            <a>
              <div key={serie.id}>{serie.title}</div>
            </a>
          </Link>
        ))}
        <h2>Ultimos Podcast</h2>
        {audio_clips.map((clip) => (
          <Link href={`/podcast?id=${clip.id}`}>
            <a>
              <div key={clip.id}>{clip.title}</div>
            </a>
          </Link>
        ))}

        <style jsx>{`
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
          }
          .channel {
             {
              /* max-width: 1000px; */
            }
             {
              /* margin: 0 auto 0.5em; */
            }
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            text-align: center;
            margin-bottom: 0.5em;
          }
          .channel img {
            width: 100%;
          }
          .h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
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
