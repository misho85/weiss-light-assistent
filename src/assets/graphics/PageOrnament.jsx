import { memo } from 'react';

const PageOrnament = props => (
  <svg width="2em" height="1em" viewBox="0 0 100 50" {...props}>
    <defs>
      <clipPath id="f">
        <path fill="none" d="M94.826 0L94.454 3.188 100.166 0 94.826 0z" />
      </clipPath>
      <linearGradient
        id="c"
        x1={111.8171}
        y1={56.1123}
        x2={99.0192}
        y2={50.3735}
        gradientTransform="matrix(1 0 0 -1 0 51.201)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbee29" />
        <stop offset={1} stopColor="#f7ba2f" />
      </linearGradient>
      <clipPath id="g">
        <path fill="none" d="M93.141 0L94.454 3.188 94.826 0 93.141 0z" />
      </clipPath>
      <linearGradient
        id="a"
        x1={100.7966}
        y1={52.5501}
        x2={94.3063}
        y2={49.7468}
        gradientTransform="matrix(1 0 0 -1 0 51.201)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0d7abe" />
        <stop offset={1} stopColor="#17afe6" />
      </linearGradient>
      <clipPath id="h">
        <path fill="none" d="M84.093 0L94.454 3.188 93.141 0 84.093 0z" />
      </clipPath>
      <linearGradient
        id="e"
        x1={77.5394}
        y1={45.2167}
        x2={89.5653}
        y2={49.7163}
        gradientTransform="matrix(1 0 0 -1 0 51.201)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7ba2f" />
        <stop offset={1} stopColor="#fbee29" />
      </linearGradient>
      <clipPath id="i">
        <path
          fill="none"
          d="M67.753 0L66.253 10.441 87.545 1.063 84.091 0 67.753 0z"
        />
      </clipPath>
      <linearGradient
        id="d"
        x1={76.658}
        y1={46.2523}
        x2={69.5176}
        y2={54.3068}
        gradientTransform="matrix(1 0 0 -1 0 51.201)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7ba2f" />
        <stop offset={1} stopColor="#f29434" />
      </linearGradient>
      <clipPath id="j">
        <path fill="none" d="M59.431 0L66.253 10.441 67.753 0 59.431 0z" />
      </clipPath>
      <linearGradient
        id="k"
        x1={62.3075}
        y1={47.0766}
        x2={43.7912}
        y2={62.881}
        xlinkHref="#a"
      />
      <clipPath id="l">
        <path
          fill="none"
          d="M59.054 0L56.853 12.625 66.253 10.441 59.431 0 59.054 0z"
        />
      </clipPath>
      <linearGradient
        id="b"
        x1={60.8654}
        y1={50.3988}
        x2={62.003}
        y2={41.2879}
        gradientTransform="matrix(1 0 0 -1 0 51.201)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#255b9e" />
        <stop offset={1} stopColor="#17afe6" />
      </linearGradient>
      <clipPath id="m">
        <path fill="none" d="M41.096 0L56.853 12.625 59.054 0 41.096 0z" />
      </clipPath>
      <linearGradient
        id="n"
        x1={55.5712}
        y1={43.0718}
        x2={38.4566}
        y2={48.7293}
        xlinkHref="#a"
      />
      <clipPath id="o">
        <path
          fill="none"
          d="M33.093 0L30.78 3.23 50.061 7.183 41.096 0 33.093 0z"
        />
      </clipPath>
      <linearGradient
        id="p"
        x1={42.0099}
        y1={52.0752}
        x2={40.2933}
        y2={47.2506}
        xlinkHref="#b"
      />
      <clipPath id="q">
        <path fill="none" d="M29.787 0L30.78 3.23 33.093 0 29.787 0z" />
      </clipPath>
      <linearGradient
        id="r"
        x1={24.5858}
        y1={49.0722}
        x2={45.5702}
        y2={50.6464}
        xlinkHref="#b"
      />
      <clipPath id="s">
        <path
          fill="none"
          d="M15.468 0L16.254 9.277 30.78 3.23 27.008 0 15.468 0z"
        />
      </clipPath>
      <linearGradient
        id="t"
        x1={22.2932}
        y1={43.0417}
        x2={25.1067}
        y2={54.9661}
        gradientTransform="matrix(1 0 0 -1 0 51.201)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f29434" />
        <stop offset={1} stopColor="#ef7f36" />
      </linearGradient>
      <clipPath id="u">
        <path
          fill="none"
          d="M-0.166 3.147L16.254 9.277 15.468 0 -0.166 0 -0.166 3.147z"
        />
      </clipPath>
      <linearGradient
        id="v"
        x1={14.9036}
        y1={57.2385}
        x2={7.4178}
        y2={45.5884}
        xlinkHref="#c"
      />
      <clipPath id="w">
        <path fill="none" d="M27.008 0L30.78 3.23 29.787 0 27.008 0z" />
      </clipPath>
      <linearGradient
        id="x"
        x1={27.5559}
        y1={51.6234}
        x2={13.854}
        y2={72.4758}
        xlinkHref="#d"
      />
      <clipPath id="y">
        <path
          fill="none"
          d="M71.828 0.533L73.021 13 84.931 10.409 71.828 0.533z"
        />
      </clipPath>
      <linearGradient
        id="z"
        x1={74.7941}
        y1={51.6635}
        x2={80.4211}
        y2={40.318}
        xlinkHref="#a"
      />
      <clipPath id="A">
        <path
          fill="none"
          d="M17.51 2.818L24.645 9.761 26.566 0.954 17.51 2.818z"
        />
      </clipPath>
      <linearGradient
        id="B"
        x1={23.6675}
        y1={42.2815}
        x2={20.9962}
        y2={48.1218}
        gradientTransform="matrix(1 0 0 -1 0 51.201)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ef7f36" />
        <stop offset={1} stopColor="#e53438" />
      </linearGradient>
      <clipPath id="C">
        <path
          fill="none"
          d="M84.952 5.584L82.275 5.957 88.033 9.756 89.585 8.547 84.952 5.584z"
        />
      </clipPath>
      <linearGradient
        id="D"
        x1={92.9494}
        y1={46.7917}
        x2={80.8117}
        y2={41.1545}
        xlinkHref="#e"
      />
      <clipPath id="E">
        <path
          fill="none"
          d="M3.155 7.914L10.217 10.969 10.641 0.965 3.155 7.914z"
        />
      </clipPath>
      <linearGradient
        id="F"
        x1={5.9199}
        y1={41.8906}
        x2={8.3678}
        y2={50.26}
        xlinkHref="#a"
      />
    </defs>
    <g clipPath="url(#f)">
      <path fill="url(#c)" d="M94.4537 0H100.1657V3.1886H94.4537z" />
    </g>
    <g clipPath="url(#g)">
      <path fill="url(#a)" d="M93.14 0H94.8252V3.1886H93.14z" />
    </g>
    <g clipPath="url(#h)">
      <path fill="url(#e)" d="M84.0928 0H94.4537V3.1886H84.0928z" />
    </g>
    <g clipPath="url(#i)">
      <path fill="url(#d)" d="M66.2532 0H87.54490000000001V10.4418H66.2532z" />
    </g>
    <g clipPath="url(#j)">
      <path fill="url(#k)" d="M59.431 0H67.7527V10.4418H59.431z" />
    </g>
    <g clipPath="url(#l)">
      <path fill="url(#b)" d="M56.8537 0H66.2532V12.6254H56.8537z" />
    </g>
    <g clipPath="url(#m)">
      <path fill="url(#n)" d="M41.096 0H59.0545V12.6254H41.096z" />
    </g>
    <g clipPath="url(#o)">
      <path fill="url(#p)" d="M30.7805 0H50.0616V7.1832H30.7805z" />
    </g>
    <g clipPath="url(#q)">
      <path fill="url(#r)" d="M29.7867 0H33.0936V3.2298H29.7867z" />
    </g>
    <g clipPath="url(#s)">
      <path fill="url(#t)" d="M15.4674 0H30.7806V9.2774H15.4674z" />
    </g>
    <g clipPath="url(#u)">
      <path fill="url(#v)" d="M-0.1661 0H16.2538V9.2774H-0.1661z" />
    </g>
    <g clipPath="url(#w)">
      <path fill="url(#x)" d="M27.0082 0H30.7805V3.2298H27.0082z" />
    </g>
    <g clipPath="url(#y)">
      <path
        fill="url(#z)"
        d="M71.8284 0.5331H84.9301V12.999699999999999H71.8284z"
      />
    </g>
    <g clipPath="url(#A)">
      <path
        fill="url(#B)"
        d="M17.5096 0.9538H26.566499999999998V9.7609H17.5096z"
      />
    </g>
    <g clipPath="url(#C)">
      <path
        fill="url(#D)"
        d="M82.2749 5.5838H89.5845V9.755700000000001H82.2749z"
      />
    </g>
    <g clipPath="url(#E)">
      <path fill="url(#F)" d="M3.155 0.965H10.640699999999999V10.969H3.155z" />
    </g>
  </svg>
);

export default memo(PageOrnament);
