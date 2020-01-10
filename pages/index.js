
import "./index.less"
import React from 'react'
import Seo from '../components/Seo'

class App extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <React.Fragment>
        <Seo title={'首页|漫画'} keywords={''} description={''} />
        <div>
          Hello World {this.props.userAgent}
        </div>
      </React.Fragment>
    )
  }
}
export default App