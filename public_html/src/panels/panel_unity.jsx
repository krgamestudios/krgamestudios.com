import React from 'react';
import Unity from 'react-unity-webgl';

class PanelUnity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      width: props.width || 'auto',
      height: props.height || 'auto'
    };
  }

  render() {

    let src='/unity/' + this.state.name + '/Build/' + this.state.name + '.json';
    let lod='/unity/' + this.state.name + '/Build/UnityLoader.js';

    return (
      <Unity src={src} loader={lod} width={this.state.width} height={this.state.height} />
    );
  }
}

export default PanelUnity;

