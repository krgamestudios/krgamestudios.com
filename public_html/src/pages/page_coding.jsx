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
        <hr />
        <PanelMarkdown filename='/content/this_website.md' />
        <hr />
        <PanelMarkdown filename='/content/turtle_map.md' />
        <hr />
        <PanelMarkdown filename='/content/turtle_gui.md' />
        <hr />
        <PanelMarkdown filename='/content/the_portal.md' />
        <hr />
        <PanelMarkdown filename='/content/internet_jukebox.md' />
      </div>
    );
  }
}

export default PageCoding;
