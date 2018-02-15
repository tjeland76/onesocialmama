import React from 'react';
import {Link} from 'react-router';
import HomeBody from './HomeBody';
import HomeBanner from './HomeBanner';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeBody/>
        <HomeBanner/>
      </div>
    );
  }
}
export default HomePage;
