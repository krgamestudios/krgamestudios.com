import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GA from './utils/google_analytics.jsx';

import PanelHeader from './panels/panel_header.jsx';
import PanelFooter from './panels/panel_footer.jsx';

import PageHome from './pages/page_home.jsx';
import PageGames from './pages/page_games.jsx';
import PageCoding from './pages/page_coding.jsx';
import PageAbout from './pages/page_about.jsx';
import PageMonsterStalker from './pages/page_monster_stalker.jsx';
import PageCandyRaid from './pages/page_candy_raid.jsx';
import PageCandyRaidPresskit from './pages/page_candy_raid_presskit.jsx';
import PageMailingList from './pages/page_mailing_list.jsx';
import PageCastworldErrata from './pages/page_castworld_errata.jsx';
import PageNotFound from './pages/page_not_found.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='central'>
        <PanelHeader />
        <BrowserRouter>
          <div className="page">
            { GA.init() && <GA.RouteTracker /> }
            <Switch>
              <Route exact path='/' component={PageHome} />
              <Route exact path='/games' component={PageGames} />
              <Route exact path='/coding' component={PageCoding} />
              <Route exact path='/about' component={PageAbout} />
              <Route exact path='/monsterstalker' component={PageMonsterStalker} />
              <Route exact path='/candyraid' component={PageCandyRaid} />
              <Route exact path='/candyraid/presskit' component={PageCandyRaidPresskit} />
              <Route exact path='/mailing_list' component={PageMailingList} />
              <Route exact path='/castworld_errata' component={PageCastworldErrata} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        <PanelFooter />
      </div>
    );
  }
}

export default App;
