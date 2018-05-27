import React from 'react';

class PanelHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let customStyle = {
      display: 'flex',
      flexDirrction: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <header>
        <a href='/' style={customStyle}>
          <img src='img/logo_400x400.png' style={{height:'32px'}} />
          <h1>KR Game Studios</h1>
        </a>
      </header>
    );
  }
}

export default PanelHeader;

