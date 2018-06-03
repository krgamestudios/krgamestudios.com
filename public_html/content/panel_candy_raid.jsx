import React from 'react';

class PanelCandyRaid extends React.Component {
  render() {
    return (
      <div>
        <img src="/img/crtflogo.png" />
        <div className="responsive">
          <img src="/img/crtfpromo.png" className="responsive" />
          <div style={{paddingLeft: '5px'}}>
            <p>Milly Monka's Candy Factory is the biggest producer of candy in the whole world. So naturally, she set up traps and defenses to protect her factory from thieves. One such thief is Candy the witch - a powerful witch with a powerful sweet tooth.</p>
            <p>Candy must make her way through each section of the factory - the gumdrop gardens, the lava kitchens, the frozen warehouses and the evil offices - to steal as much candy as possible!</p>
            <p>We're aiming for an October release, but you can play the demo now!</p>
            <ul>
              <li><a href="/candyraid">Candy Raid: The Factory Demo</a></li>
              <li><a href="/candyraid/presskit">Press Kit</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelCandyRaid;

