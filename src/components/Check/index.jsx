import React from 'react';
import { usePrefs } from '../../prefs.context';
import './style.css';

const Check = ({ checked, vegan, onChange }) => {
  const { veganOnly } = usePrefs();

  return (
    <button
      className={veganOnly && !vegan ? 'check--disabled' : 'check'}
      disabled={veganOnly && !vegan}
      onClick={onChange}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
