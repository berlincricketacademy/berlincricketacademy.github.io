import React from 'react';

import wave from '../img/wave.svg';
import hero from '../img/all.svg';

const Hero = ({ heading, subheading }) => (
  <>
    <section
      className="hero"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: `cover`,
        height: '400px',
      }}
    >
      <div className="container">
        <div className="container columns">
          <div
            className="hero__text column is-offset-1"
            style={{
              alignSelf: 'center',
            }}
          >
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                color: 'white',
                lineHeight: '1',
                paddingBottom: '20px',
              }}
            >
              {heading}
            </h1>
            <h2
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                color: 'white',
                lineHeight: '1',
              }}
            >
              {subheading}
            </h2>
          </div>
          <img className="column" src={hero} alt="Woman cricket player" />
        </div>
      </div>
    </section>
  </>
);

export default Hero;
