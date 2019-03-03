import React, {Component} from 'react';

import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Switch, Route} from 'react-router';

import {About} from './about/about';
import {Portfolio} from './portfolio/portfolio';
import {Contacts} from './contacts/contacts';
import {Reviews} from './reviews/reviews';

export class App extends Component {
  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={500}
        >
          <Switch location={location}>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/reviews" component={Reviews}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.node,
//   location: PropTypes.any
// };
