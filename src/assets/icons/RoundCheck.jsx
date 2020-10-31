import { memo } from 'react';

const RoundCheck = props => {
  return (
    <svg
      x="0px"
      y="0px"
      height="1em"
      width="1em"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      {...props}
    >
      <circle
        cx={25}
        cy={25}
        r={25}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#3c6"
        stroke="#3c6"
        strokeWidth={0.12}
        strokeMiterlimit={2.6131}
      />
      <path
        d="M17.4 23.3l5.3 7.7 9.6-18c.3-.7.9-1.1 1.5-1.2.7-.1 1.3-.1 2 .1.7.3 1.1.8 1.2 1.5.1.7.1 1.3-.1 1.9l-11 20.5c-.1.3-.3.5-.5.7-.1.5-.5 1.1-.9 1.3-.5.4-1.3.5-1.9.4-.7-.1-1.2-.5-1.6-1.1l-7.7-11c-.4-.5-.5-1.3-.4-1.9.1-.7.5-1.2 1.1-1.6.5-.4 1.3-.5 1.9-.4.6.1 1.1.5 1.5 1.1z"
        fill="#fff"
      />
    </svg>
  );
};

export default memo(RoundCheck);
