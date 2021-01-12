import React from 'react';

import hero from '../img/bca-hero-red-ball.jpg';

const Hero = ({ heading, subheading, heroBanner = hero, heroBannerHeight = 'small' }) => (
  <>
    <section
      className="hero is-large hero-banner hero-banner"
      style={{
        backgroundImage: `url(${heroBanner})`,
        height: heroBannerHeight === 'large' ? '800px' : heroBannerHeight === 'medium' ? '600px' : '400px'
      }}
    >
      <div className="hero-overlay" />
      <div 
        className="hero-body"
      >
        <div
          className="container"
        >
          <div className="hero-content">
            {
              heading &&
                <h1 className="title">
                  {heading.toUpperCase()}
                </h1>
            }
            {
              subheading && 
                <h2 className="subtitle" style={{marginTop: '4rem'}}>
                  {subheading}
                </h2>
            }
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
