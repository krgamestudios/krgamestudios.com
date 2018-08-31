import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GA from './utils/google_analytics.jsx';

import PanelHeader from './panels/panel_header.jsx';
import PanelFooter from './panels/panel_footer.jsx';
import PanelRedirect from './panels/panel_redirect.jsx';

import PageHome from './pages/page_home.jsx';
import PageGames from './pages/page_games.jsx';
import PageCoding from './pages/page_coding.jsx';
import PageAbout from './pages/page_about.jsx';
import PageMonsterStalker from './pages/page_monster_stalker.jsx';
import PageGenericPlatformFighter from './pages/page_generic_platform_fighter.jsx';
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
              <Route exact path='/genericplatformfighter' component={PageGenericPlatformFighter} />

              <Route exact path='/candy' render={()=><PanelRedirect target="https://candyraid.com/prototype" />} />
              <Route exact path='/candyraid' render={()=><PanelRedirect target="https://candyraid.com/demo" />} />
              <Route exact path='/candyraid/presskit' render={()=><PanelRedirect target="https://candyraid.com/presskit" />} />

              <Route exact path='/astrangesinkingfeeling' render={()=><PanelRedirect target="https://docs.google.com/document/d/1Mmcb4S62s7JyFaoNve9dH2MJwowu0JmK-A5mEMGPaY4/edit?usp=sharing" />} />

              <Route exact path='/castworld2' render={()=><PanelRedirect target="https://www.dropbox.com/s/m6ucxmvb3uxsw28/castworld_2_prototype.pdf?dl=0" />} />
              <Route exact path='/castworld_errata' component={PageCastworldErrata} />

              <Route exact path='/mailing_list' component={PageMailingList} />
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
