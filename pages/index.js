import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
export default class extends React.Component {
  static async getInitialProps() {
    let [reqEnglish, reqSpanish] = await Promise.all([
      fetch('https://api.audioboom.com/channels/recommended'),
      fetch(`https://api.audioboom.com/channels/recommended?category_ids[]=179`)
    ])

    //   Llama el canal con el id especificado
    let dataEnglish = await reqEnglish.json()
    let english = dataEnglish.body
    let dataSpanish = await reqSpanish.json()
    let spanish = dataSpanish.body

    return { english, spanish }
  }

  render() {
    const { english, spanish } = this.props
    return (
      <Layout title="Podcasts">
        <ChannelGrid language="English" channels={english}></ChannelGrid>
        <ChannelGrid language="Spanish" channels={spanish}></ChannelGrid>
      </Layout>
    )
  }
}
