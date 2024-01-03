import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-500 mt-4">
      <p>&copy; {currentYear} Tabinda Noor All rights reserved.</p>
    </footer>
  );
};

export default Footer;
