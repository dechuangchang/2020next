
import "./index.less"
import React from 'react'
import fetch from 'node-fetch'
import Seo from '../components/Seo'
class App extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { json }
  }

  render() {

    return (
      <React.Fragment>
        <Seo title={'首页|漫画'} keywords={''} description={''} />
        <div>
          Hello World {JSON.stringify(this.props.json)}
        </div>
      </React.Fragment>
    )
  }
}
export default App