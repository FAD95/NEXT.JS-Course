import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from '../_error'
export default class extends React.Component {
  static async getInitialProps({ res }) {
    try {
      let [reqEnglish, reqSpanish] = await Promise.all([
        fetch('https://api.audioboom.com/channels/recommended'),
        fetch(
          `https://api.audioboom.com/channels/recommended?category_ids[]=179`
        )
      ])
      if (reqEnglish.status >= 400) {
        res.statusCode = reqEnglish.status
        return {
          english: null,
          spanish: null,
          statusCode: reqEnglish.status
        }
      }
      if (reqSpanish.status >= 400) {
        res.statusCode = reqSpanish.status
        return {
          english: null,
          spanish: null,
          statusCode: reqSpanish.status
        }
      }

      //   Llama el canal con el id especificado
      let dataEnglish = await reqEnglish.json()
      let english = dataEnglish.body
      let dataSpanish = await reqSpanish.json()
      let spanish = dataSpanish.body

      return { english, spanish, statusCode: 200 }
    } catch (e) {
      res.statusCode = 503
      return {
        english: null,
        spanish: null,
        statusCode: 503
      }
    }
  }

  render() {
    const { english, spanish, statusCode } = this.props
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout title="Podcasts">
        <ChannelGrid language="English" channels={english}></ChannelGrid>
        <ChannelGrid language="Spanish" channels={spanish}></ChannelGrid>
      </Layout>
    )
  }
}
