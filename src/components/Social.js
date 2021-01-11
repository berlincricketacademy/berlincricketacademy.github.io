import React from 'react';
import { Link } from 'gatsby';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import youtube from '../img/social/youtube.svg';

const Social = class extends React.Component {
  render() {
    return (
      <div
        className="social-icons"
      >
        <a
            title="facebook"
            className="navbar-item"
            href="https://facebook.com/berlincricketacademy"
            target="_blank"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a
            title="instagram"
            className="navbar-item"
            href="https://instagram.com/berlincricketacademy"
            target="_blank"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a
            title="twitter"
            className="navbar-item"
            href="https://twitter.com/berlincricket"
            target="_blank"
          >
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a
            title="youtube"
            className="navbar-item"
            href="https://www.youtube.com/channel/UCnH7MzQhBE8L4GztnK9kF7A"
            target="_blank"
          >
            <img
              src={youtube}
              alt="Youtube"
              style={{ width: '1em', height: '1em' }}
            />
          </a>  
      </div>
    );
  }
};

export default Social;
