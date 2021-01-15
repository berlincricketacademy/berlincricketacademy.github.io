import React from 'react';
import PageSection from './PageSection';
import LogoItem from './LogoItem';

const icon = "money-bill-wave";
const moneyText = ' / year';

const Membership = () => (
  <section className="section">
    <div className="container">
      <PageSection title="ANNUAL MEMBERSHIP OFFERS">
        <div className="logo-grid">
          <LogoItem title={`€100${moneyText}`} subTitle="Senior" icon={icon} bg="primary-light" />
          <LogoItem title={`€70${moneyText}`} subTitle="Ladies" icon={icon} bg="primary-light" />
          <LogoItem title={`€70${moneyText}`} subTitle="Junior (U19)" icon={icon} bg="primary-light" />
          <LogoItem title={`€70${moneyText}`} subTitle="Student / Unemployed" icon={icon} bg="primary-light" />
          <LogoItem title={`€150${moneyText}`} subTitle="Family" icon={icon} bg="primary-light" />
          <LogoItem title={`€30${moneyText}`} subTitle="Social" icon={icon} bg="primary-light" />
        </div>
      </PageSection>
    </div>
  </section>
);

export default Membership;
