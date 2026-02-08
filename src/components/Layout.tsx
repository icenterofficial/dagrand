import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher'; // Ensure path is correct

const Layout = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <LanguageSwitcher /> {/* LanguageSwitcher component imported and added here */}
      <button className="settings-button">Settings</button>
    </nav>
  );
};

export default Layout;