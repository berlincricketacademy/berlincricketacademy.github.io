import React from 'react';
import PageSection from './PageSection';
import LogoItem from './LogoItem';

import training from '../img/training.png';
import trials from '../img/trials.png';
import fixture from '../img/fixture.png';

const Events = () => (
  <section className="section">
    <div className="container">
      <PageSection title="UPCOMING EVENTS">
        <div className="logo-grid">
          <LogoItem title="Training" subTitle="Time is TBD | Location is TBD" url={trials} redirectLink="/soon"  />
          <LogoItem title="Trials" subTitle="Time is TBD | Location is TBD" url={training} redirectLink="/soon" />
          <LogoItem title="Fixtures" subTitle="Time is TBD | Location is TBD" url={fixture} redirectLink="/soon" />
        </div>
      </PageSection>
    </div>
  </section>
);

export default Events;
