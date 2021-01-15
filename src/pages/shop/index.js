import React from 'react';
import Layout from '../../components/Layout';
import Membership from '../../components/Membership';
import PageSection from '../../components/PageSection';

const Shop = () => (
  <Layout
    heading="Membership and Swag"
    subheading="Option to purchase cricket swag online coming soon!"
  >
    <Membership />
    <section className="section">
      <PageSection title="HOW TO PAY">
        <div className="container">
          <article className="message is-dark">
            <div className="message-body" style={{ fontSize: '1.2em' }}>
              Membership fees are one of the key financial contributors to keeping the academy running and in good nick.
            </div>
          </article>
          <p>Paying by online transfer is the preferred and simplest method to pay your membership fee. It cuts out significant administration effor and is more secure.</p>
          <p>The purpose of membership fees is to support the academy financially, not to exclude potential members who want to play cricket. If you have difficulty paying, please talk to us to agree a suitable solution.</p>
        </div>
      </PageSection>
    </section>
  </Layout>
);

export default Shop;
