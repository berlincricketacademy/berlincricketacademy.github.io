import React from 'react';
import Layout from '../../components/Layout';
import PageSection from '../../components/PageSection';
import gallery from '../../img/gallery.png';
import LogoItem from '../../components/LogoItem';

const Gallery = () => (
  <Layout
    heading="Featured showcase"
    subheading="More to follow..."
  >
    <section className="section">
      <div className="container" style={{textAlign: 'center'}}>
        <PageSection>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/R9DyykLIyoQ?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </PageSection>
        <PageSection>
          <div className="logo-grid">
            <LogoItem url={gallery} /> 
            <LogoItem url={gallery} />
            <LogoItem url={gallery} />
          </div>
        </PageSection>
      </div>
    </section>
  </Layout>
);

export default Gallery;
