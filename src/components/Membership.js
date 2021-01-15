import React from 'react';
import PageSection from './PageSection';
import LogoItem from './LogoItem';

const icon = "money-bill-wave";
const moneyText = ' / year';

const Membership = () => (
  <section className="section bg-primary-light">
    <div className="container">
      <PageSection title="SHOP" subTitle="Our annual membership offers">
        <div className="logo-grid">
          <LogoItem title={`€100${moneyText}`} subTitle="Senior" icon={icon} />
          <LogoItem title={`€70${moneyText}`} subTitle="Women" icon={icon} />
          <LogoItem title={`€70${moneyText}`} subTitle="Junior (U19)" icon={icon} />
          <LogoItem title={`€70${moneyText}`} subTitle="Student / Unemployed" icon={icon} />
          <LogoItem title={`€150${moneyText}`} subTitle="Family" icon={icon}/>
          <LogoItem title={`€30${moneyText}`} subTitle="Social" icon={icon} />
        </div>
      </PageSection>
    </div>
  </section>
);

export default Membership;
