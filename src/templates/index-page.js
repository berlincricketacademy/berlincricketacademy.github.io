import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

import dcb from '../img/dcb.png';
import odcv from '../img/odcv.png';
import maak from '../img/maak.png';
import LogoItem from '../components/LogoItem';
import PageSection from '../components/PageSection';
import Membership from '../components/Membership';
import Teams from '../components/Teams';
import Events from '../components/Events';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <section className="section">
      <div className="container">
        <article className="message">
          <div className="message-body" style={{ fontSize: '1.2em' }}>
            We will begin operations asap life returns to normalcy from COVID. Until then, stay safe, stay healthy!
          </div>
        </article>
        <PageSection title="LATEST NEWS">
          <BlogRoll />
        </PageSection>
      </div>
    </section>
    <section className="section bg-primary-light">
      <div className="container" style={{textAlign: 'center'}}>
        <PageSection title="GALLERY">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/R9DyykLIyoQ?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </PageSection>
      </div>
    </section>
    <Events />
    <Teams bg="primary-light" />
    <section className="section">
      <div className="container">
        <PageSection title="AFFILIATIONS" subTitle="Valued Partnerships">
          <div className="logo-grid">
            <LogoItem url={dcb} title="DCB" subTitle="German Cricket Federation" redirectLink="https://www.cricket.de/" isInternalLink={false} bg="primary-light" />
            <LogoItem url={odcv} title="ODCV" subTitle="East German Cricket Association" redirectLink="https://www.facebook.com/ODCV-1296896147022686" isInternalLink={false} bg="primary-light" />
          </div>
        </PageSection>
        <PageSection title="SPONSORS" subTitle="Supporting the Team">
          <div className="logo-grid">
            <LogoItem url={maak} title="MAAK" subTitle="Engineering & Contstruction in KSA" redirectLink="http://maakksa.com/" isInternalLink={false} bg="primary-light" />
          </div>
        </PageSection>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout heading={frontmatter.heading} subheading={frontmatter.subheading} heroBannerHeight="large">
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
