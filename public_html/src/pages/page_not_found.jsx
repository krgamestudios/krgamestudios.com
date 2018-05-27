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
        <Link to='/'>Return Home</Link>
        <img src='img/404.png' />
      </div>
    );
  }
}

export default PageNotFound;
