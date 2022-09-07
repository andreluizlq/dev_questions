import React from 'react'
import ReactDOM from 'react-dom'
import Root from './pages/Root.js'
import CountProvider from '../src/context/Count.js'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render( 
  <React.StrictMode>
    <Provider store={ store }>
      <CountProvider>
        <Root />
      </CountProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);