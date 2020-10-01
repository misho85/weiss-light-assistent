import React, { memo } from 'react';

const RightArrow = props => (
  <svg width="1em" height="1em" viewBox="0 0 3.2537 3.5426" {...props}>
    <path
      fill="none"
      stroke="#4d4d4d"
      strokeMiterlimit={2.6131}
      strokeWidth={0.5}
      d="M0.1768 0.1768L1.8476 1.8473"
    />
    <path
      fill="none"
      stroke="#4d4d4d"
      strokeMiterlimit={2.6131}
      strokeWidth={0.5}
      d="M0.1768 3.3658L1.8476 1.6953"
    />
    <path
      fill="none"
      stroke="#4d4d4d"
      strokeMiterlimit={2.6131}
      strokeWidth={0.5}
      d="M1.4062 0.1768L3.077 1.8473"
    />
    <path
      fill="none"
      stroke="#4d4d4d"
      strokeMiterlimit={2.6131}
      strokeWidth={0.5}
      d="M1.4062 3.3658L3.077 1.6953"
    />
  </svg>
);

export default memo(RightArrow);
