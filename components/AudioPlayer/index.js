import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/src/styles.scss'
import './styles.scss'
export default class extends React.Component {
  render() {
    const { clip } = this.props
    return (
      <AudioPlayer
        autoPlay
        src={clip.urls.high_mp3}
        layout={'stacked-reverse'}
        customProgressBarSection={[
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.CURRENT_TIME,
          <div className="barrita"> / </div>,
          RHAP_UI.DURATION
        ]}
        customVolumeControls={[RHAP_UI.VOLUME]}
        customAdditionalControls={[]}
      />
    )
  }
}
