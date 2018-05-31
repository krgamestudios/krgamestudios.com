import React from 'react';

import PanelMarkdown from '../panels/panel_markdown.jsx';

class PageAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <PanelMarkdown filename='/content/about.md' />
      </div>
    );
  }
}

export default PageAbout;
