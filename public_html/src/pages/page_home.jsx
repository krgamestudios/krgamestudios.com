import React from 'react';

import PanelMarkdown from '../panels/panel_markdown.jsx';

import PanelCandyRaid from '../../content/panel_candy_raid.jsx'

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let imageStyle = {
      width: '32px',
      height: '32px'
    };

    let flexStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    return (
      <div className='page'>
        <div style={flexStyle}>
          <a href="https://facebook.com/KRGameStudios"><img src="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png" style={imageStyle} /></a>
          <a href="https://twitter.com/KRGameStudios"><img src="https://krgamestudios.com/img/twitter.png" style={imageStyle} /></a>
          <a href="https://github.com/KRGameStudios"><img src="https://krgamestudios.com/img/github.png" style={imageStyle} /></a>
          <a href="https://discord.gg/FQmz8TN"><img src="img/discord.png" style={imageStyle} /></a>
        </div>
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
