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
            <h4>OneSocialMama provides the following services:</h4>
            <NavLink to="/services/">
            <div id="servicesGrid">
              <div>
                <div>
                  <div className="gridIcon audit"><span>Audit</span></div>
                </div>
                <div>
                  <div className="gridIcon strategy"><span>Strategy Development</span></div>
                </div>
              </div>
              <div>
                <div>
                  <div className="gridIcon training"><span>Workshops & 121s</span></div>
                </div>
                <div>
                  <div className="gridIcon socialMediaManagement"><span>Social Media Management</span></div>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBody;
