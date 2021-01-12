import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo-new.svg';
import Social from '../components/Social';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="BCA"
                style={{ maxHeight: '6rem', height: '6rem' }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div
              className="navbar-end"
              
            >
              <Link className="navbar-item" to="/blog">
                NEWS
              </Link>
              <Link className="navbar-item" to="/teams">
                TEAMS
              </Link>
              <Link className="navbar-item" to="/shop">
                SHOP
              </Link>
              <Link className="navbar-item" to="/soon">
                GALLERY
              </Link>
              <Link className="navbar-item" to="/soon">
                CALENDAR
              </Link>
              <Link className="navbar-item" to="/about">
                INFORMATION
              </Link>
              {/* <Link className="navbar-item" to="/contact">
                CONTACT
              </Link> */}
            </div>
            <Social />
            <Link className="navbar-item" to="/contact">
              <button
                className="button is-rounded bca-button-primary"
              >
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
