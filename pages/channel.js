import 'isomorphic-fetch'
export default class extends React.Component {
  static async getInitialProps({ query }) {
    let idChannel = query.id

    //   Llama el canal con el id especificado
    let reqChannel = await fetch(
      `https://api.audioboom.com/channels/${idChannel}`
    )
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    //   LLama los archivos de audio principales del podcast
    let reqAudios = await fetch(
      `https://api.audioboom.com/channels/${idChannel}/audio_clips`
    )
    let dataAudios = await reqAudios.json()
    let audio_clips = dataAudios.body.audio_clips

    //   LLama los archivos de audio de subseries del podcast
    let reqSeries = await fetch(
      `https://api.audioboom.com/channels/${idChannel}/child_channels`
    )
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
          <div>{serie.title}</div>
        ))}
        <h2>Ultimos Podcast</h2>
        {audio_clips.map((clip) => (
          <div>{clip.title}</div>
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
