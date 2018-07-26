import React from 'react';

import PanelUnity from '../panels/panel_unity.jsx';

class PageGenericPlatformFighter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let flexStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={flexStyle}>
        <PanelUnity name='genericplatformfighter' width='960px' height='600px' />
      </div>
    );
  }
}

export default PageGenericPlatformFighter;
