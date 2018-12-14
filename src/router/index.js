
import React from 'react'
import Loadable from 'react-loadable'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const Loading = () => {
  return <div>Loading...</div>
}

const asyncify = loader => {
  return Loadable({
    loader,
    loading: Loading
  })
}

export const history = createBrowserHistory({
  basename: process.env.NODE_ENV === 'production' ? '/dist' : ''
})

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={asyncify(() => import(/* webpackChunkName: "hello" */ '../pages/hello'))}></Route>
        <Route path="/hello" component={asyncify(() => import(/* webpackChunkName: "hello" */ '../pages/hello'))}></Route>
        <Route path="/bye" component={asyncify(() => import(/* webpackChunkName: "bye" */ '../pages/bye'))}></Route>
      </Switch>
    </Router>
  )
}
