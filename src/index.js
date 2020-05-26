import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import * as Sentry from '@sentry/browser'

import * as serviceWorker from './serviceWorker'
import store, { browsingHistory } from "./store"
import { ConnectedRouter } from 'connected-react-router'
import Root from './root'

Sentry.init({ dsn: "https://0daef4c4c627417ca308646ba366630e@o398154.ingest.sentry.io/5253418" });

class SentryBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorinfo) {
    this.setState({ error });
    Sentry.withScope(
      scope => {
        Object.keys(errorinfo).forEach(
          key => {
            scope.setExtra(key, errorinfo[key]);
          });
        Sentry.captureException(error);
      });
  }

  render() {
    if (this.state.error) {

    } else {
      return this.props.children;
    }
  }
}

ReactDOM.render(
  <SentryBinding>
    <Provider store={store}>
      <ConnectedRouter history={browsingHistory} basename={process.env.REACT_APP_BASENAME}>
        <Root />
      </ConnectedRouter>
    </Provider>
  </SentryBinding>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
