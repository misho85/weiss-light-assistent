import React from 'react';

const Check = ({ stroke = '#027cb2', ...props }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 37.4 31.15"
    height="1em"
    width="1em"
    id="check"
    {...props}
  >
    <path
      id="formCheck"
      fill="none"
      stroke={stroke}
      strokeMiterlimit={10}
      strokeWidth={6}
      d="M7.33 11.91L16.41 21 35.28 2.12"
    />
  </svg>
);

export default Check;
