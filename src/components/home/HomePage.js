import React from 'react';
import {Link} from 'react-router';
import HomeBody from './HomeBody';
import ContactUs from '../contactus/ContactUsPage';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeBody/>
        <ContactUs/>
      </div>
    );
  }
}
export default HomePage;
