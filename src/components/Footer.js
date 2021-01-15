import React from 'react';
import { Link } from 'gatsby';

import Social from '../components/Social';
import ContactForm from '../pages/contact/form';
import PageSection from '../components/PageSection';

const Footer = () => (
  <>
    <section className="section bg-primary-light">
      <div className="container">
        <PageSection title="CONTACT US" subTitle="We are always on the look out for new players of any standard as well as volunteers who do an amazing job in keeping our club running. So, if you are interested in playing or any other role (for example coaching, officiating, team management, making the tea!) then please contact us below.">
          <div className="contact-grid card">
            <div className="contact-grid-item contact-details">
              <h1 className="contact-details-title is-spaced contact-details-item">BERLIN CRICKET ACADEMY</h1>
              <p className="contact-details-item">
                <span className="icon-text">
                  <span className="icon">
                    <i className={`fas fa-map-marker-alt`} />
                  </span>
                  <span className="is-size-5">Mitte, 10179 - Berlin, Germany</span>
                </span>
              </p>
              <p className="contact-details-item">
                <span className="icon-text">
                  <span className="icon">
                    <i className={`fas fa-envelope-square`} />
                  </span>
                  <span className="is-size-5">contact@berlincricketacademy.com</span>
                </span>
              </p>
              <p className="contact-details-item">
                <span className="icon-text">
                  <span className="icon">
                    <i className={`fas fa-phone`} />
                  </span>
                  <span className="is-size-5">+49 152 27672304</span>
                </span>
              </p>
              <div className="contact-details-item" style={{marginTop: '1rem'}}>
                <Social />
              </div>
            </div>
            <div className="contact-grid-item contact-form">
              <ContactForm />
            </div>
          </div>
        </PageSection>
      </div>
    </section>  
    <footer
      className="footer card"
    >
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '2rem 0'}}>
          <Social />
          <div className="content has-text-centered has-text-weight-semibold">
            {`Copyright ©️ ${new Date().getFullYear()} Berlin Cricket Academy. All rights reserved.`}
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer;
