import React from 'react';
import { usePrefs } from '../../prefs.context';
import './style.css';

const Header = () => {
  const { veganOnly, setPreferences } = usePrefs();
  const handleVeganOnlyToggle = () => {
    setPreferences(veganOnly ? false : true);
  };
  return (
    <div className="header">
      <label className="switch">
        <input
          type="checkbox"
          checked={veganOnly}
          onChange={handleVeganOnlyToggle}
        />
        <span className="slider"></span>
      </label>
      <span>Vegan only</span>
    </div>
  );
};

export default Header;
