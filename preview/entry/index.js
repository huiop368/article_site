import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import App          from '../components/App'
import Page         from '../components/Page'

const hashHistory = useRouterHistory(createHashHistory)()

const MOUNT_NODE = document.getElementById('main')


const routes = {
  path        : '/',
  component   : App,
  //indexRoute  : { component : Home },
  childRoutes : [{
    path : ':component',
    component : Page,
    childRoutes : [
        {path : ':index'}
    ]
  }]
}

ReactDOM.render(
    <div style={{ height: '100%' }}>
      <Router history={hashHistory} routes={routes} />
    </div>,
    MOUNT_NODE
)
