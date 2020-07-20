import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <FooterContents />
    </div>
  );
};

const FooterContents = () => {
  if (window.innerWidth < 400) {
    // < 400px Mobile
    return (
      <div className="footer-container">
        <p>© 2020 Brooklyn College Computer Science Club</p>
        <p>0317 Ingersoll Hall, Brooklyn College</p>
        <p>
          <a href="mailto:bc.cis.club@gmail.com">
            Contact: bc.cis.club@gmail.com
          </a>
        </p>
      </div>
    );
  } else {
    // > 400px Mobile
    return (
      <div className="footer-container">
        <p>© 2020 Brooklyn College Computer Science Club</p>
        <p>
          0317 Ingersoll Hall, Brooklyn College •{' '}
          <a href="mailto:bc.cis.club@gmail.com">
            Contact: bc.cis.club@gmail.com
          </a>
        </p>
      </div>
    );
  }
};

export default Footer;
