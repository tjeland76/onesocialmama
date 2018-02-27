import React from 'react';
import LinkButton from '../core/LinkButton';
import { NavLink, IndexLink } from 'react-router-dom';

class HomeBody extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.history.push("/services")

  }

  render() {
    return (
      <div className="bodyHome">
        <div className="bodyHomeContainer">
          <div className="homePanel">
            <h1>Be the best you can be.</h1>
            <h4>Social Media Consultancy and HR/Flexible working specialist</h4>

            <div id="servicesGrid">
              <div>
                <NavLink className="service" to="/services/#audit">
                  <div className="gridIcon audit"><span>Audit</span></div>
                </NavLink>
                <NavLink className="service" to="/services/#strategy">
                  <div className="gridIcon strategy"><span>Strategy Development</span></div>
                </NavLink>
              </div>
              <div>
                <NavLink className="service" to="/services/#workshop">
                  <div className="gridIcon training"><span>Workshops & 121s</span></div>
                </NavLink>
                <NavLink className="service" to="/services/#sm-management">
                  <div className="gridIcon socialMediaManagement"><span>Social Media Management</span></div>
                </NavLink>
              </div>
              <div>
                <NavLink className="service" to="/services/#workshop">
                  <div className="gridIcon cv"><span>CV, & Interview skills</span></div>
                </NavLink>
                <NavLink className="service" to="/services/#sm-management">
                  <div className="gridIcon flexible"><span>Flexible working</span></div>
                </NavLink>
              </div>
            </div>
        </div>
          </div>
        </div>

    );
  }
}

export default HomeBody;
