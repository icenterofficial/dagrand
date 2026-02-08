import React, { useState } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<'EN' | 'CN'>('EN');

  const handleLanguageChange = (lang: 'EN' | 'CN') => {
    setLanguage(lang);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#153c63' }}>
      <button
        onClick={() => handleLanguageChange('EN')}
        style={{
          backgroundColor: language === 'EN' ? '#b49b67' : 'transparent',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange('CN')}
        style={{
          backgroundColor: language === 'CN' ? '#b49b67' : 'transparent',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;