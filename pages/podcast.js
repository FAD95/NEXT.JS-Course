import 'isomorphic-fetch'
import { Link } from '../routes'
import Layout from '../components/Layout'
import AudioPlayer from '../components/AudioPlayer'
import Error from '../_error'

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    try {
      let id = query.id
      let fetchClip = await fetch(
        `https://api.audioboom.com/audio_clips/${id}.mp3`
      )

      if (fetchClip.status >= 400) {
        res.statusCode = fetchClip.status
        return {
          clip: null,
          statusCode: fetchClip.status
        }
      }

      let clip = (await fetchClip.json()).body.audio_clip
      return { clip, statusCode: 200 }
    } catch (e) {
      return {
        clip: null,
        statusCode: 503
      }
    }
  }

  render() {
    const { clip, statusCode } = this.props
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout title={clip.title}>
        <div className="modal">
          <div className="clip">
            <nav>
              <Link href={`/${clip.channel.title}.${clip.channel.id}`}>
                <a className="close">&lt; Volver</a>
              </Link>
            </nav>

            <picture>
              <div
                style={{
                  backgroundImage: `url(${
                    clip.urls.image || clip.channel.urls.logo_image.original
                  })`
                }}
              />
            </picture>

            <div className="player">
              <h3>{clip.title}</h3>
              <h6>{clip.channel.title}</h6>
              <div>
                <AudioPlayer clip={clip} />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .barrita {
            padding-top: 142px;
          }
          nav {
            background: none;
          }
          nav a {
            display: inline-block;
            padding: 15px;
            color: white;
            cursor: pointer;
            text-decoration: none;
          }
          .clip {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: #8756ca;
            color: white;
          }
          picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }
          picture div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
            min-width: 300px;
          }
          .player {
            padding: 30px;
            background: rgba(0, 0, 0, 0.3);
            text-align: center;
          }
          .player div {
            position: relative;
            height: 160px;
          }
          h3 {
            margin: 0;
            font-size: 25px;
            font-family: Arial;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
            font-size: 18px;
            font-family: Arial;
          }
          audio {
            margin-top: 2em;
            width: 100%;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
           {
            /* .rhap_play-pause-button {
            // Remember to use !important to overwrite inline styles.
            background-color: red !important;
          } */
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }
        `}</style>
      </Layout>
    )
  }
}
