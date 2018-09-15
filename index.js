import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";
import {Provider} from 'react-redux';
import TwitchApp from './reducers/TwitchApp';
import Streams from './components/containers/Streams';


class App extends Component {
  render() {
    return (
      <div>
          <h1>React + Redux + Twitch = 😍</h1>
          <div className="stream-cards">
            <Streams store = {store} />
          </div>
      </div>
    )
  }
}
//raven .js 
Raven.config('https://98b3b7ccf7f64dd0a001ec09b810dd77@sentry.io/280486').install()

//init the store with the stream as a reducer
let store = createStore(TwitchApp,
  applyMiddleware(thunk,logger,createRavenMiddleware(Raven, {}))
);

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
