import React from 'react';

class PanelBrands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let flexStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    let imageStyle = {
      width: '32px',
      height: '32px'
    };

    return (
      <div style={flexStyle}>
        <a href="https://facebook.com/KRGameStudios"><img src="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png" style={imageStyle} /></a>
        <a href="https://twitter.com/KRGameStudios"><img src="https://krgamestudios.com/img/twitter.png" style={imageStyle} /></a>
        <a href="https://github.com/KRGameStudios"><img src="https://krgamestudios.com/img/github.png" style={imageStyle} /></a>
        <a href="https://discord.gg/FQmz8TN"><img src="img/discord.png" style={imageStyle} /></a>
        <a href="https://www.patreon.com/krgamestudios"><img src="img/patreon.png" style={imageStyle} /></a>
      </div>
    );
  }
}

export default PanelBrands;
