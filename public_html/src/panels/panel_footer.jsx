import React from 'react';

class PanelFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright <a href='http://krgamestudios.com'>KR Game Studios</a> 2015-{year}</p>
      </footer>
    );
  }
}

export default PanelFooter;

