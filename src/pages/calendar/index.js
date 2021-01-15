import React from 'react';
import Layout from '../../components/Layout';
import PageSection from '../../components/PageSection';
import calendar from '../../img/calendar.png';
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
            <LogoItem url={calendar} /> 
            <LogoItem url={calendar} />
            <LogoItem url={calendar} />
          </div>
        </PageSection>
      </div>
    </section>
  </Layout>
);

export default Calendar;
