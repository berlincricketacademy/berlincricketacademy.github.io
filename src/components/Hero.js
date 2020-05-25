import React from 'react';

import hero from '../img/all.svg';

const Hero = ({ heading, subheading }) => (
  <div className="container">
    <div className="container columns">
      <div className="column is-offset-1">
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: '#4a4a4a',
            lineHeight: '1',
            paddingBottom: '20px',
          }}
        >
          {heading}
        </h1>
        <h2
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: '#4a4a4a',
            lineHeight: '1',
          }}
        >
          {subheading}
        </h2>
      </div>
      <img
        className="column"
        src={hero}
        alt="Cricket for all"
        style={{ position: 'relative', top: '-100px' }}
      />
    </div>
  </div>
);

export default Hero;
