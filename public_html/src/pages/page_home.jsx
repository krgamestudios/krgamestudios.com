import React from 'react';

import PanelBrands from '../panels/panel_brands.jsx';
import PanelCandyRaid from '../../content/panel_candy_raid.jsx'

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <PanelBrands />
        <h1>Welcome!</h1>
        <p>My current projects is: Candy Raid: The Factory!</p>
        <p>You can now sign up to my <a href="/mailing_list">mailing list!</a></p>
        <hr />
        <PanelCandyRaid />
      </div>
    );
  }
}

export default PageHome;
