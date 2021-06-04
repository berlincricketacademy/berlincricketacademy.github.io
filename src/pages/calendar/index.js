import React from 'react';
import Layout from '../../components/Layout';
import PageSection from '../../components/PageSection';
import trials from '../../img/trials.png';
import LogoItem from '../../components/LogoItem';

const Calendar = () => (
  <Layout
    heading="Event Schedule"
    subheading="Upcoming events"
  >
    <section className="section">
      <div className="container" style={{textAlign: 'center'}}>
        <PageSection>
          <div className="logo-grid">
            <LogoItem title="Senior Training" subTitle="Every Wednesday 17:00 - 20:30" description="Am Glockenturm 1, 14053 Berlin Charlottenburg" url={trials} redirectLink="/soon"  />
            <LogoItem title="Junior Training" subTitle="Every Friday 16:30 - 18:00" description="Am Glockenturm 1, 14053 Berlin Charlottenburg" url={trials} redirectLink="/soon"  />
            <LogoItem title="Ladies Training" subTitle="Every Friday 18:00 - 20:00" description="Am Glockenturm 1, 14053 Berlin Charlottenburg" url={trials} redirectLink="/soon"  />
          </div>
        </PageSection>
      </div>
    </section>
  </Layout>
);

export default Calendar;
