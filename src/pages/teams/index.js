import React from 'react';
import Layout from '../../components/Layout';
import Teams from '../../components/Teams';
import PageSection from '../../components/PageSection';
import { Link } from 'gatsby';

const Panel = ({content, icon, title}) => (
  <div className="team-panel card">
    <div class="team-panel-column-icon">
      <span class="icon is-large">
        <i class={`fas fa-${icon} fa-3x`} />
      </span>
    </div>
    <div class="team-panel-column-content">
      <h3 className="is-size-4 has-text-primary has-text-weight-semibold">{title.toUpperCase()}</h3>
      <p>{content}</p>
    </div>
    <div class="team-panel-column-link">
      <Link className="button bca-button-primary is-rounded" to="/shop">
        See membership
      </Link>
    </div>
  </div>
)

const TeamsPage = () => (
  <Layout
    heading="We welcome everyone"
    subheading="The more players we have, the more matches we can play."
  >
    <section className="section">
      <PageSection>
        <div className="container">
          <Panel 
            icon="user-friends"
            title="Senior"
            content="Berlin Cricket Academy is always on the look out for and delighted to welcome new players of all ages and abilities to the academy. We provide all players with the opportunity to represent the club across our extensive range of teams. Our academy coaching team delivers all inclusive club training sessions throughout the season. These sessions include high intensity whole club fielding sessions as well as technique focussed, individual and small group practices, working on the application of match specific situations and scenarios. Our aim is to provide a welcoming, fun and competitive environment to allow every player to improve and fulfil their potential at any level of cricket."
          />
          <Panel 
            icon="female"
            title="Women & Girls"
            content="The more players we have, the more matches we can play! We actively encourage all new girls and women to come along and try a session or two, from complete beginners to experienced players. No equipment is necessary as we can provide everything you need. If you’d like more information on how things work please drop us a line."
          />
          <Panel 
            icon="child"
            title="Junior"
            content="Berlin Cricket Academy welcomes all junior players of all levels and abilities. We aim to ensure all players are welcome and enjoy their sport at Carnegie. We do this by:

​

Having a strong involvement from our supporters
Provide equal opportunities to players
Emphasising the fun aspects of team sport
Having willing, enthusiastic and quality coaches
​

In addition to developing players who are new to the sport, Berlin Cricket Academy aligns with the Cricket Germany talent pathway opportunities, starting with representative and regional level cricket."
          />
        </div>
      </PageSection>
    </section>
  </Layout>
);

export default TeamsPage;
