import React from 'react';
import {Link} from 'gatsby';

import hero from '../img/bca-hero-red-ball.jpg';
import Social from '../components/Social';

const Hero = ({ heading, subheading, heroBanner = hero, heroBannerHeight = 'small', showSocialIcons = false }) => (
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
          <div className="hero-content" style={{textAlign: 'center'}}>
            {
              heading &&
                <h1 className="title layout-title">
                  {heading.toUpperCase()}
                </h1>
            }
            {
              subheading && 
                <h2 className="subtitle layout-title" style={{marginTop: '4rem'}}>
                  {subheading}
                </h2>
            }
            {
              showSocialIcons && <Social />
            }
          </div>
        </div>
      </div>
    </section>
    {/* <section style={{margin: '2rem 0'}}>
      <div className="container">
        <article className="message">
          <div className="message-body" style={{ fontSize: '1.2em' }}>
            COVID 19 – We remain closed until further notice. Please register <Link to="/contact#contact-form" style={{display: 'inline-block'}}>here</Link> and we will get back to you as soon as possible.
          </div>
        </article>
        
      </div>
    </section> */}
  </>
);

export default Hero;
