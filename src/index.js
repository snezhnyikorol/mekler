import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, withRouter, Route} from 'react-router-dom';
import './index.scss';

import {Navigation} from './app/navigation/navigation';
import {App} from './app/app';

const Header = withRouter(props => <Navigation {...props}/>);

ReactDOM.render(
  <Router>
    <Route
      render={({location}) => (
        <div>
          <Header/>
          <App location={location}/>
        </div>
      )}
    />
  </Router>,
  document.getElementById('root')
);
