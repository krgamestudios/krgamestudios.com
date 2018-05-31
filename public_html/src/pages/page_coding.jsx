import React from 'react';

import PanelMarkdown from '../panels/panel_markdown.jsx';

class PageCoding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <PanelMarkdown filename='/content/github.md' />
        <PanelMarkdown filename='/content/the_portal.md' />
        <PanelMarkdown filename='/content/internet_jukebox.md' />
        <PanelMarkdown filename='/content/turtle_map.md' />
        <PanelMarkdown filename='/content/turtle_gui.md' />
        <PanelMarkdown filename='/content/this_website.md' />
      </div>
    );
  }
}

export default PageCoding;
