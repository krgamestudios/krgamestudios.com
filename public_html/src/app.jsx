import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PanelHeader from './panels/panel_header.jsx';
import PanelFooter from './panels/panel_footer.jsx';

import PageHome from './pages/page_home.jsx';
import PageGames from './pages/page_games.jsx';
import PageCoding from './pages/page_coding.jsx';
import PageAbout from './pages/page_about.jsx';
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
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <PanelFooter />
      </div>
    );
  }
}

export default App;
