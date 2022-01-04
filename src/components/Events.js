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
          <LogoItem title="Senior Indoor Training" subTitle="Every Sunday 12:00 - 14:00" description="Frauenlobstraße 61, 12437 Berlin" url={trials} redirectLink="/soon"  />
          <LogoItem title="Junior Indoor Training" subTitle="Every Sunday 14:00 - 15:30" description="Frauenlobstraße 61, 12437 Berlin" url={trials} redirectLink="/soon"  />
          <LogoItem title="Ladies Indoor Training" subTitle="Every Sunday 15:30 - 17:00" description="Frauenlobstraße 61, 12437 Berlin" url={trials} redirectLink="/soon"  />
        </div>
        <div className="logo-grid" style={{marginTop: '2rem'}}>
          <LogoItem title="Trials 2022" subTitle="Time is TBD | Location is TBD" url={training} redirectLink="/soon" />
          <LogoItem title="Fixtures 2022" subTitle="Time is TBD | Location is TBD" url={fixture} redirectLink="/soon" />
        </div>
      </PageSection>
    </div>
  </section>
);

export default Events;
