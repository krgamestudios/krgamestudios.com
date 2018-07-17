import React from 'react';
import { Redirect } from 'react-router';

class PanelRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: props.target
    };
  }

  render() {
    return (
      <div>
        <Redirect to={state.target} />
        <p>Please wait while you're redirected...</p>
      </div>
    );
  }
}

export default PanelRedirect;
