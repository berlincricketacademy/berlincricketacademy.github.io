import React from 'react';
import Layout from '../../components/Layout';
import Membership from '../../components/Membership';
import PageSection from '../../components/PageSection';
import LogoItem from '../../components/LogoItem';
import teamwear from '../../img/teamwear.jpg';

const Shop = () => (
  <Layout
    heading="Membership and Merchandise"
    subheading="Online purchase available soon!"
  >
    <Membership />
    <section className="section">
      <PageSection title="TEAMWEAR">
        <div className="container">
          <LogoItem url={teamwear} />  
        </div>
      </PageSection>
    </section>
  </Layout>
);

export default Shop;
