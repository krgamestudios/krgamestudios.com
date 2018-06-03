import React from 'react';

import PanelMarkdown from '../panels/panel_markdown.jsx';

class PageCastworldErrata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <PanelMarkdown filename='/content/castworld_errata.md' />
      </div>
    );
  }
}

export default PageCastworldErrata;
