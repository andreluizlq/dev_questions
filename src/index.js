import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root.js';
import CountProvider from '../src/context/Count.js'

ReactDOM.render( 
  <React.StrictMode>
    <CountProvider>
      <Root />
    </CountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);