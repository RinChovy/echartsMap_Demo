import React from 'react';
// import { ConnectedRouter,Router, Route, Switch } from 'dva/router';
import { router } from 'dva';
import IndexPage from './routes/IndexPage';
import { Globalstyle } from './style/global.js';

// const { ConnectedRouter } = routerRedux;
const { Router, Route, Switch } = router;

function RouterConfig({ history }) {
  const route = () => {
    return (
      <>
        <Globalstyle></Globalstyle>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </>
    );
  };

  return <Router history={history}>{route()}</Router>;
}

export default RouterConfig;
