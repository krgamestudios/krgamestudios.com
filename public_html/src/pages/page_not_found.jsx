import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <h1>Page Not Found</h1>
        <img src='https://krgamestudios.com/img/404.png' style={{maxWidth: '710px'}} />
        <Link to='/'>Return Home</Link>
      </div>
    );
  }
}

export default PageNotFound;
