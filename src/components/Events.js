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
          <LogoItem title="Senior Training" subTitle="Every Wednesday 17:00 - 20:30" description="Am Glockenturm 1, 14053 Berlin Charlottenburg" url={trials} redirectLink="/soon"  />
          <LogoItem title="Junior Training" subTitle="Every Friday 16:30 - 18:00" description="Am Glockenturm 1, 14053 Berlin Charlottenburg" url={trials} redirectLink="/soon"  />
          <LogoItem title="Ladies Training" subTitle="Every Friday 18:00 - 20:00" description="Am Glockenturm 1, 14053 Berlin Charlottenburg" url={trials} redirectLink="/soon"  />
        </div>
        <div className="logo-grid" style={{marginTop: '2rem'}}>
          <LogoItem title="Trials" subTitle="Senior | 09.06.2021 17:00 - 20:30" url={training} redirectLink="/soon" />
          <LogoItem title="Fixtures" subTitle="Time is TBD | Location is TBD" url={fixture} redirectLink="/soon" />
        </div>
      </PageSection>
    </div>
  </section>
);

export default Events;
