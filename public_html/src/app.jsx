import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PanelHeader from './panels/panel_header.jsx';
import PanelFooter from './panels/panel_footer.jsx';

import PageHome from './pages/page_home.jsx';
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
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <PanelFooter />
      </div>
    );
  }
}

export default App;
