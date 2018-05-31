import React from 'react';

import PanelMarkdown from '../panels/panel_markdown.jsx';

class PageGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <PanelMarkdown filename='/content/candy_raid.md' />
        <PanelMarkdown filename='/content/monster_stalker.md' />
        <PanelMarkdown filename='/content/cant_anyone_save_the_world.md' />
        <PanelMarkdown filename='/content/labyrinth.md' />
        <PanelMarkdown filename='/content/mecha_immense_warfare.md' />
        <PanelMarkdown filename='/content/tortuga.md' />
      </div>
    );
  }
}

export default PageGames;
