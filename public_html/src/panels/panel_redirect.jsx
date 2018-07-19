import React from 'react';

class PanelRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: props.target
    };
  }

  componentWillMount() {
    window.location = this.state.target;
  }

  render() {
    return (
      <div>
        <p>Please wait while you're redirected...</p>
      </div>
    );
  }
}

export default PanelRedirect;
