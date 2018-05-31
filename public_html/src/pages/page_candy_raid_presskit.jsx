import React from 'react';


class PageAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let imageStyle = {
      width: 'auto',
      height: '60px',
      margin: '5px',
      borderStyle: 'solid',
      borderColor: 'black'
    };

    return (
      <div className='page'>
        <h1>Candy Raid: The Factory Press Kit</h1>
        <h2>Synopsis</h2>
        <p><strong>Release date:</strong> October 1st 2018</p>
        <p>
          <strong>Gameplay, Programming:</strong> Kayne Ruse<br />
          <strong>Art, Sound Effects:</strong> Evan Hartshorn<br />
          <strong>Soundtrack:</strong> Luis Paez
        </p>

        <p>The prototype for Candy Raid was created in 3 days for Ludum Dare 41. Our team of two knew from the start that we had something special on our hands, so we rebuilt the game from the ground up, while retaining it's core elements.</p>
        <p>After contracting Luis, we released the first demo, which can be played here:<br /><a href="/candyraid">https://krgamestudios.com/candyraid</a></p>

        <hr />

        <h2>Blurb</h2>
        <p>Milly Monka's Candy Factory is the biggest producer of candy in the whole world. So naturally, she set up traps and defenses to protect her factory from thieves. One such thief is Candy the witch - a powerful witch with a powerful sweet tooth.</p>
        <p>Candy must make her way through each section of the factory - the gumdrop gardens, the lava kitchens, the frozen warehouses and the evil offices - to steal as much candy as possible!</p>

        <hr />

        <h2>Screenshots</h2>
        <div className="responsive">
          <a href="/img/crtfscreenshot_01.png" target="_blank" ><img src="/img/crtfscreenshot_01.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_02.png" target="_blank" ><img src="/img/crtfscreenshot_02.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_03.png" target="_blank" ><img src="/img/crtfscreenshot_03.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_04.png" target="_blank" ><img src="/img/crtfscreenshot_04.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_05.png" target="_blank" ><img src="/img/crtfscreenshot_05.png" style={imageStyle} /></a>
        </div>

        <hr />

        <h2>Other Images</h2>
        <div className="responsive">
          <a href="https://krgamestudios.com/img/logo_400x400.png" target="_blank" ><img src="https://krgamestudios.com/img/logo_400x400.png" style={imageStyle} /></a>
          <a href="/img/crtfpromo.png" target="_blank" ><img src="/img/crtfpromo.png" style={imageStyle} /></a>
          <a href="/img/crtflogo.png" target="_blank" ><img src="/img/crtflogo.png" style={imageStyle} /></a>
        </div>
      </div>
    );
  }
}

export default PageAbout;
