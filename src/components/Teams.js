import React from 'react';
import PageSection from './PageSection';
import LogoItem from './LogoItem';

const Teams = ({ bg = "white" }) => (
  <section className={`section bg-${bg}`}>
    <div className="container">
      <PageSection title="TEAMS">
        <div className="logo-grid">
          <LogoItem title="SENIOR" icon="user-friends" redirectLink="/teams" />
          <LogoItem title="Women & Girls" icon="female" redirectLink="/teams" />
          <LogoItem title="Junior" icon="child" redirectLink="/teams" />
        </div>
      </PageSection>
    </div>
  </section>
);

export default Teams;
