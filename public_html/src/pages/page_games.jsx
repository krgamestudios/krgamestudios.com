import React from 'react';

import PanelMarkdown from '../panels/panel_markdown.jsx';

import PanelCandyRaid from '../../content/panel_candy_raid.jsx'

class PageGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <PanelCandyRaid />
        <hr />
        <PanelMarkdown filename='/content/cant_anyone_save_the_world.md' />
        <hr />
        <PanelMarkdown filename='/content/monster_stalker.md' />
        <hr />
        <PanelMarkdown filename='/content/labyrinth.md' />
        <hr />
        <PanelMarkdown filename='/content/mecha_immense_warfare.md' />
        <hr />
        <PanelMarkdown filename='/content/tortuga.md' />
      </div>
    );
  }
}

export default PageGames;
