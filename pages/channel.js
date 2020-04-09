import 'isomorphic-fetch'
import Layout from '../components/Layout'
import PodcastList from '../components/PodcastList'
import ChannelGrid from '../components/ChannelGrid'
import Error from '../_error'
import PodcastPlayer from '../components/PodcastPlayer'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openPodcast: null
    }
  }

  static async getInitialProps({ query, res }) {
    try {
      let idChannel = query.id

      let [reqChannel, reqAudios, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
      ])
      if (reqChannel.status >= 400) {
        res.statusCode = reqChannel.status
        return {
          channel: null,
          audio_clips: null,
          series: null,
          statusCode: reqChannel.status
        }
      }

      //   Llama el canal con el id especificado
      let dataChannel = await reqChannel.json()
      let channel = dataChannel.body.channel

      //   LLama los archivos de audio principales del podcast
      let dataAudios = await reqAudios.json()
      let audio_clips = dataAudios.body.audio_clips

      //   LLama los archivos de audio de subseries del podcast
      let dataSeries = await reqSeries.json()
      let series = dataSeries.body.channels
      return { channel, audio_clips, series, statusCode: 200 }
    } catch (e) {
      return {
        channel: null,
        audio_clips: null,
        series: null,
        statusCode: 503
      }
    }
  }

  openPodcast = (event, podcast) => {
    event.preventDefault()
    this.setState({
      openPodcast: podcast
    })
  }

  closePodcast = (event) => {
    event.preventDefault()
    this.setState({
      openPodcast: null
    })
  }

  render() {
    const { channel, audio_clips, series, statusCode } = this.props
    const { openPodcast, closePodcast } = this.state
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout title={channel.title}>
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

        {channel.description > '' ? (
          <div className="descriptionContainer">
            <p className="description">{channel.description}</p>
          </div>
        ) : null}

        {audio_clips > [] ? (
          <PodcastList
            audio_clips={audio_clips}
            onClickPodcast={this.openPodcast}
          ></PodcastList>
        ) : null}

        {series > [] ? (
          <ChannelGrid channels={series} language="Series" />
        ) : null}

        {/* Modal */}
        {openPodcast && (
          <div className="modal">
            <PodcastPlayer clip={openPodcast} onClose={this.closePodcast} />
          </div>
        )}

        <style jsx>{`
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
          .descriptionContainer {
            border-radius: 40px;
            background-color: #2a0a22;
            max-height: 150px;
            max-width: 500px;
            margin: 2em auto;
            padding: 1em 2em;
            box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.5);
          }
          .description {
            max-height: 100px;
            height: 100%;
            overflow-y: scroll;
            text-align: center;
            color: #eee;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
        `}</style>
      </Layout>
    )
  }
}
