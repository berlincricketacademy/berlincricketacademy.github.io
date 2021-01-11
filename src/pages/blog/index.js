import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import PageSection from '../../components/PageSection';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout
        heading="Latest News"
        subheading="Subscribe to stay upto date with all the latest news"
      >
        <section className="section">
          <div className="container">
            <PageSection>
              <BlogRoll />
            </PageSection>
          </div>
        </section>
      </Layout>
    );
  }
}
