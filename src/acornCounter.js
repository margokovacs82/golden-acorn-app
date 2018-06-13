import React, { Component } from 'react';
import GoldenAcornAppWithState from './states'
import GoldenWithRedux from './containers/redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class SimpleGoldenAcornApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>
            <Link to="/states"><div>  "GOLDEN 🌰 IS LIFE" </div> </Link>
            <Link to="/redux"> <div>The redux version: </div></Link>
          </h1>
          <div>
            <Route path="/states" component={GoldenAcornAppWithState} />
            <Route path="/redux" component={GoldenWithRedux} />
          </div>
        </div>
      </Router>
    )
  }
}
