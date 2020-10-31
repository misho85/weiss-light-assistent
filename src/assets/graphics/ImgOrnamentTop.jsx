import { memo } from 'react';

const ImgOrnamentTop = props => (
  <svg width="1em" height="1em" viewBox="0 0 10 10" {...props}>
    <defs>
      <clipPath id="b-ornt">
        <path fill="none" d="M3.878 0L4.339 3.051 10 0 3.878 0z" />
      </clipPath>
      <linearGradient
        id="a-ornt"
        x1={6.032}
        y1={659.0556}
        x2={6.782}
        y2={660.7787}
        gradientTransform="translate(0 -659.614)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#255b9e" />
        <stop offset={1} stopColor="#17afe6" />
      </linearGradient>
      <clipPath id="c-ornt">
        <path
          d="M.474 1.115L4.339 3.05 3.878 0H2.834a2.96 2.96 0 00-2.36 1.115"
          fill="none"
        />
      </clipPath>
      <linearGradient
        id="d-ornt"
        x1={0.9076}
        y1={662.7727}
        x2={6.1436}
        y2={657.068}
        xlinkHref="#a-ornt"
      />
      <clipPath id="e-ornt">
        <path
          fill="none"
          d="M0 6.561L1.806 7.987 4.339 3.051 0 3.223 0 6.561z"
        />
      </clipPath>
      <linearGradient
        id="f-ornt"
        x1={2.7547}
        y1={666.1535}
        x2={0.5688}
        y2={662.3435}
        gradientTransform="translate(0 -659.614)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f29434" />
        <stop offset={1} stopColor="#ef7f36" />
      </linearGradient>
      <clipPath id="g-ornt">
        <path fill="none" d="M0 8.649L1.806 7.987 0 6.561 0 8.649z" />
      </clipPath>
      <linearGradient
        id="h-ornt"
        x1={0.224}
        y1={663.5545}
        x2={1.1059}
        y2={668.3154}
        gradientTransform="translate(0 -659.614)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbee29" />
        <stop offset={1} stopColor="#f7ba2f" />
      </linearGradient>
      <clipPath id="i-ornt">
        <path
          d="M0 3.224l4.339-.172L.474 1.115A2.256 2.256 0 000 2.487z"
          fill="none"
        />
      </clipPath>
      <linearGradient
        id="j-ornt"
        x1={2.6024}
        y1={661.8871}
        x2={-6.7693}
        y2={659.6364}
        gradientTransform="translate(0 -659.614)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7ba2f" />
        <stop offset={1} stopColor="#f29434" />
      </linearGradient>
      <clipPath id="k-ornt">
        <path
          fill="none"
          d="M0.432 6.071L4.336 6.134 2.523 3.471 0.432 6.071z"
        />
      </clipPath>
      <linearGradient
        id="l-ornt"
        x1={4.1119}
        y1={665.1281}
        x2={1.8497}
        y2={664.1971}
        gradientTransform="translate(0 -659.614)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ef7f36" />
        <stop offset={1} stopColor="#e53438" />
      </linearGradient>
      <clipPath id="m-ornt">
        <path fill="none" d="M0 10L0.532 9.832 0 9.289 0 10z" />
      </clipPath>
      <linearGradient
        id="n-ornt"
        x1={0.3333}
        y1={669.3921}
        x2={-1.0603}
        y2={666.6222}
        gradientTransform="translate(0 -659.614)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0d7abe" />
        <stop offset={1} stopColor="#17afe6" />
      </linearGradient>
    </defs>
    <g clipPath="url(#b-ornt)">
      <path fill="url(#a-ornt)" d="M3.878 0H10.0001V3.0515H3.878z" />
    </g>
    <g clipPath="url(#c-ornt)">
      <path fill="url(#d-ornt)" d="M0.4737 0H4.339V3.0515H0.4737z" />
    </g>
    <g clipPath="url(#e-ornt)">
      <path fill="url(#f-ornt)" d="M0 3.0515H4.339V7.9876H0z" />
    </g>
    <g clipPath="url(#g-ornt)">
      <path fill="url(#h-ornt)" d="M0 6.5614H1.8057V8.6494H0z" />
    </g>
    <g clipPath="url(#i-ornt)">
      <path fill="url(#j-ornt)" d="M0 1.1147H4.339V3.2235H0z" />
    </g>
    <g clipPath="url(#k-ornt)">
      <path fill="url(#l-ornt)" d="M0.4322 3.472H4.3358V6.1341H0.4322z" />
    </g>
    <g clipPath="url(#m-ornt)">
      <path fill="url(#n-ornt)" d="M0 9.2896H0.5325V10.0002H0z" />
    </g>
  </svg>
);

export default memo(ImgOrnamentTop);
