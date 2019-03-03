import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './navigation.scss';

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = (this.props.location.pathname === '/') ? {classBar: 'barOn ', classLogo: 'logoOn '} : {classBar: 'barOff ', classLogo: 'logoOff '};
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive() {
    this.setState(prevState => ({classBar: (prevState.classBar === 'barOn ') ? 'barOff ' : 'barOff ', classLogo: (prevState.classLogo === 'logoOn ') ? 'logoOff ' : 'logoOff '}));
  }

  render() {
    return (
      <div className="wrapper">
        <div id="logo" className={this.state.classLogo + 'content-centering'}>
          <div id="upper">MEKLER</div><div id="lower">command</div>
        </div>
        <nav className={this.state.classBar + 'app-navigation content-centering'} onClick={this.handleActive}>
          <NavLink to="/about" activeClassName="active">О&nbsp;нас</NavLink>
          <NavLink to="/portfolio" activeClassName="active">Портфолио</NavLink>
          <NavLink to="/contacts" activeClassName="active">Контакты</NavLink>
          <NavLink to="/reviews" activeClassName="active">Отзывы</NavLink>
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object.isRequired
};
