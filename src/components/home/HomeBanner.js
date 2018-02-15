import React from 'react';
import { findUsOnLinks } from '../../services/linksData';
import MediaLinks from '../core/MediaLinks';

const HomeBanner = (props) => {
  return (
    <div className="homeBanner">
      <div className="container">
        <div>
          <h1 className="bannerLabel">For hints and tips...</h1>
          <MediaLinks mediaLinksData={findUsOnLinks} type="mediaLinks"/>
        </div>
      </div>
    </div>
  );
};


export default HomeBanner;
