import React from 'react';

class PanelHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let linkStyle = {
      display: 'flex',
      flexDirrction: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={{margin: '0 -10px'}}>
        <header>
          <a href='/' className='responsive'>
            <img className='title' src='img/logo_400x400.png' />
            <h1 className='title' >KR Game Studios</h1>
          </a>
        </header>
        <div className='headerButtons'>
          <a className='headerButton' href='games'>Games</a>
          <a className='headerButton' href='coding'>Coding</a>
          <a className='headerButton' href='about'>About</a>
        </div>
      </div>
    );
  }
}

export default PanelHeader;

