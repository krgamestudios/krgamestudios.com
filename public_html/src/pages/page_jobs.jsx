import React from 'react';

import PanelMarkdown from '../panels/panel_markdown.jsx';

class PageJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <PanelMarkdown filename='/content/jobs.md' />
      </div>
    );
  }
}

export default PageJobs;
