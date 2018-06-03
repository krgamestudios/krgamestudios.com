import React from 'react';
import { Redirect } from 'react-router';

class PageMailingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <meta http-equiv="refresh" content="0; url=https://docs.google.com/forms/d/e/1FAIpQLScC1v6hGz8Sdwfu5EE8bpmIfR64A6sn8lP55aaOjFoSUY2uOQ/viewform?usp=sf_link" />
        <h1>Redirecting</h1>
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScC1v6hGz8Sdwfu5EE8bpmIfR64A6sn8lP55aaOjFoSUY2uOQ/viewform?usp=sf_link">Click here if nothing happens</a></p>
      </div>
    );
  }
}

export default PageMailingList;
