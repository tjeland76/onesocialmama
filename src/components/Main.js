import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/HomePage';
import AboutUs from './aboutus/AboutUsPage';
import Services from './services/ServicesPage';
import ContactUs from './contactus/ContactUsPage';
import Blog from './blog/BlogPage';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/services" component={Services}/>
      <Route path="/contact" component={ContactUs}/>
      <Route path="/blog" component={Blog}/>
    </Switch>
  </main>
);
export default Main;
