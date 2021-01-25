import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright © {new Date().getFullYear()} - The A Team</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
