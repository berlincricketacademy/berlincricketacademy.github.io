import React from 'react';
import { Link } from 'gatsby';

import Social from '../components/Social';
import ContactForm from '../pages/contact/form';
import PageSection from '../components/PageSection';

const Footer = class extends React.Component {
  render() {
    return (
      <>
        <section className="section bg-primary-light">
          <div className="container">
            <PageSection title="CONTACT US">
              <div className="contact-grid card">
                <div className="contact-grid-item contact-details">
                  <h1 className="contact-details-title is-spaced">BERLIN CRICKET ACADEMY</h1>
                  <p>
                    <span className="icon-text">
                      <span className="icon">
                        <i className={`fas fa-map-marker-alt`} />
                      </span>
                      <span className="is-size-5">Mitte, 10179 - Berlin, Germany</span>
                    </span>
                  </p>
                  <p>
                    <span className="icon-text">
                      <span className="icon">
                        <i className={`fas fa-envelope-square`} />
                      </span>
                      <span className="is-size-5">contact@berlincricketacademy.com</span>
                    </span>
                  </p>
                  <p>
                    <span className="icon-text">
                      <span className="icon">
                        <i className={`fas fa-phone`} />
                      </span>
                      <span className="is-size-5">+49 152 27672304</span>
                    </span>
                  </p>
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
    );
  }
};

export default Footer;
