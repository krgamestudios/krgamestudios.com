import React from 'react';
import ReactMarkdown from 'react-markdown';

class PanelMarkdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missing: false,
      file: props.filename,
      text: ''
    }

    this.fetchText(props.filename);
  }

  fetchText(filename) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState != 4) {
        return;
      }

      if (xhttp.status != 200) {
        this.setState({missing: true});
        return;
      }

      this.setState({text: xhttp.responseText});
    }

    xhttp.open('GET', filename, true);
    xhttp.send();
  }

  render() {
    if (this.state.missing) {
      return (
        <p>Could not load markdown file</p>
      );
    }

    return (
      <ReactMarkdown source={this.state.text} />
    );
  }
}

export default PanelMarkdown;
