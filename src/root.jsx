import React from "react";
import { Switch, withRouter, HashRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { routes, RouteWithSubRoutes } from '@/config/routes'

/**
 * use:
 * - BrowserRouter , if your app in root url domain, i.e: https://app.domain.com
 * - HashRouter , if your app in sub-folder of url domain, i.e: https://domain.com/app/
 */

class Root extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(Root));