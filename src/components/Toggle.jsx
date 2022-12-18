
import React from "react";
  
const Toggle = ({ label, toggleDark, isDark }) => {
  return (
    <div className="container container ms-0 ps-0">
      <div className="toggle-switch">
        <input checked={!isDark} type="checkbox" className="checkbox" 
               name={label} id={label} onChange={() => { toggleDark(); } } />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default Toggle;