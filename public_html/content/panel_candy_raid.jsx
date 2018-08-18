import React from 'react';

class PanelCandyRaid extends React.Component {
  render() {
    return (
      <div className="page">
        <img src="/img/crtflogo.png" style={{width:"80%"}} />
        <div className="responsive">
          <img src="/img/crtfpromo.png" className="responsive" />
          <div style={{paddingLeft: '5px'}}>
            <p>Raid Milly Monk's Candy Factory for its secret, hidden sweets! Candy Raid: The Factory is a retro top-down puzzle and exploration game. You play the candy-happy witch Candy as she uses her elemental powers to solve puzzles and unlock secrets in her never-ending quest to sate her sweet tooth.</p>
            <ul>
              <li>Glorious retro pixel art in a top-down adventure style.</li>
              <li>Family-friendly non-violent puzzle action and adventure.</li>
              <li>Dozens of unique puzzles punctuated by sweet, sweet rewards.</li>
              <li>Harness the power of fire, ice, and wind magic as you wander around the world.</li>
              <li>Three unique areas to explore: the lively gumdrop gardens, the fiery lava kitchens, and the secret frozen vaults.</li>
            </ul>
            <p>We're aiming for an October release, but you can play the demo now!</p>
            <ul>
              <li><a href="https://store.steampowered.com/app/868880/Candy_Raid_The_Factory/">Candy Raid: The Factory Store Page</a></li>
              <li><a href="https://candyraid.com/demo">Candy Raid: The Factory Demo</a></li>
              <li><a href="https://candyraid.com/presskit">Press Kit</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelCandyRaid;

