import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className="footer"
        style={{
          background: 'linear-gradient(to right,  #fff, #ffea54, #feaa2b)',
          boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.08)',
        }}
      >
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4 social">
                <div className="content has-text-centered">
                  <img
                    src={logo}
                    alt="BCA"
                    style={{ width: '14em', height: '10em' }}
                  />
                </div>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Information
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/soon">
                        Teams
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/soon">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/soon">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
