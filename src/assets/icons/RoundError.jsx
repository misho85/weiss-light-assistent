import React, { memo } from 'react';

const RoundError = props => {
  return (
    <svg height="1em" width="1em" viewBox="0 0 50 50" {...props}>
      <path
        d="M25 0A24.992 24.992 0 117.32 7.32 24.936 24.936 0 0125 0z"
        fill="#ee3a3f"
        fillRule="evenodd"
      />
      <path
        d="M13.568 35.005L21.774 25l-8.206-10.005a2.51 2.51 0 01.346-3.519 2.51 2.51 0 013.518.346L25 21.056l7.568-9.234a2.502 2.502 0 013.518-.346 2.501 2.501 0 01.346 3.519L28.226 25l8.206 10.005a2.51 2.51 0 01-.345 3.519 2.51 2.51 0 01-3.519-.346L25 28.944l-7.569 9.234a2.502 2.502 0 01-3.518.346 2.502 2.502 0 01-.345-3.519z"
        fill="#fefefe"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default memo(RoundError);
