import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PanelHeader from './panels/panel_header.jsx';
import PanelFooter from './panels/panel_footer.jsx';

import PageHome from './pages/page_home.jsx';
import PageGames from './pages/page_games.jsx';
import PageCoding from './pages/page_coding.jsx';
import PageAbout from './pages/page_about.jsx';
import PageMonsterStalker from './pages/page_monster_stalker.jsx';
import PageCandyRaid from './pages/page_candy_raid.jsx';
import PageCandyRaidPresskit from './pages/page_candy_raid_presskit.jsx';
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
          <Switch>
            <Route path='/' exact component={PageHome} />
            <Route path='/games' component={PageGames} />
            <Route path='/coding' component={PageCoding} />
            <Route path='/about' component={PageAbout} />
            <Route path='/monsterstalker' component={PageMonsterStalker} />
            <Route path='/candyraid' exact component={PageCandyRaid} />
            <Route path='/candyraid/presskit' exact component={PageCandyRaidPresskit} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <PanelFooter />
      </div>
    );
  }
}

export default App;
