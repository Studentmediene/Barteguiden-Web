require('./app.scss')

import React from 'react'
import {render} from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import App from './App'
import { VisibleEventPage } from './containers'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} >
          <Route path="/hue" component={VisibleEventPage} />
        </Route>
        <Route path="/events/:id" component={VisibleEventPage} />
      </Router>
    </Provider>,
    document.querySelector('#app'))
