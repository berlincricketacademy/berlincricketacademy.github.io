import React from 'react';

const PageSection = ({ children, title, subTitle }) => (
  <section className="page-section">
    <div className="page-section-headers">
      {
        title &&
          <h3 className="has-text-weight-semibold is-size-2 has-text-primary has-text-centered">{title}</h3>
      }
      {
        subTitle &&
          <h4 className="has-text-weight-normal has-text-centered is-size-5">{subTitle}</h4>
      }
    </div>
    {children}
  </section>
);

export default PageSection;
