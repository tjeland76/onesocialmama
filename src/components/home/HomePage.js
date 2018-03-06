import React from 'react';
import {Link} from 'react-router';
import HomeBody from './HomeBody';
import HomeBanner from './HomeBanner';
import HomeTestimonial from "./HomeTestimonial";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeBody/>
        <HomeBanner/>
        <HomeTestimonial/>
      </div>
    );
  }
}
export default HomePage;
