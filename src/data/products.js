import felix from '../assets/images/felix.png';
import atria from '../assets/images/atria.png';
import freja from '../assets/images/freja.png';
import samson from '../assets/images/samson.png';
import elight from '../assets/images/eLight.png';
import zvono from '../assets/images/zvono.png';

// broj tipova ogranicen na 5

//TODO: filter po visini
export default [
  {
    id: 1,
    ime: `FELIX PRO`,
    snaga: `80W/100W/120W/130/150W`,
    boja: `2700K-6500K`,
    flux: `12800Lm/16000Lm/19200Lm/20800/24000Lm`,
    efikasnost: `160Lm/W`,
    ugao: `/`,
    vek: `30 000 sati`,
    slika: felix,
    url: `https://www.weisslight.eu/proizvodi/wl-led-sijalice.php`,
    visina: [5, 30],
    types: [
      {
        id: 1,
        snaga: 80,
        flux: 12800,
      },
      {
        id: 2,
        snaga: 100,
        flux: 16000,
      },
      {
        id: 3,
        snaga: 120,
        flux: 19200,
      },
      {
        id: 4,
        snaga: 130,
        flux: 20800,
      },
      {
        id: 5,
        snaga: 150,
        flux: 24000,
      },
    ],
  },
  {
    id: 2,
    ime: `WL LED IND. ZVONO / KLASIK`,
    snaga: `90W/110W/130W`,
    boja: `2700K-6500K`,
    flux: `7300Lm/8760Lm/10300Lm`,
    efikasnost: `70-85Lm/W`,
    ugao: `30-120`,
    vek: `30 000 sati`,
    slika: zvono,
    url: `https://www.weisslight.eu/proizvodi/wl-led-industrijska-zvona.php`,
    visina: [5, 12],
    types: [
      {
        id: 1,
        snaga: 90,
        flux: 7300,
      },
      {
        id: 2,
        snaga: 110,
        flux: 8760,
      },
      {
        id: 3,
        snaga: 130,
        flux: 10300,
      },
    ],
  },
  {
    id: 3,
    ime: `ATRIA PRO`,
    snaga: `80W/100W/120W/150W`,
    boja: `2700K-6500K`,
    flux: `12800Lm/16000Lm/19200Lm/24000`,
    efikasnost: `160Lm/W`,
    ugao: `/`,
    vek: `30 000 sati`,
    slika: atria,
    url: `https://www.weisslight.eu/proizvodi/wl-led-sijalice.php`,
    visina: [6, 30],
    types: [
      {
        id: 1,
        snaga: 80,
        flux: 12800,
      },
      {
        id: 2,
        snaga: 100,
        flux: 16000,
      },
      {
        id: 3,
        snaga: 120,
        flux: 19200,
      },
      {
        id: 4,
        snaga: 130,
        flux: 24000,
      },
    ],
  },
  {
    id: 4,
    ime: `FREJA PRO`,
    snaga: `60W/80W`,
    boja: `2700K-6500K`,
    flux: `7635Lm/10240Lm`,
    efikasnost: `128Lm/W`,
    ugao: `/`,
    vek: `30 000 sati`,
    slika: freja,
    url: `https://www.weisslight.eu/proizvodi/wl-led-reflektori.php`,
    visina: [4, 8],
    types: [
      {
        id: 1,
        snaga: 60,
        flux: 7635,
      },
      {
        id: 2,
        snaga: 80,
        flux: 10240,
      },
    ],
  },
  {
    id: 5,
    ime: `SAMSON PRO`,
    snaga: `200W/235W/300W/330W`,
    boja: `2700K-6500K`,
    flux: `30000Lm/35250Lm/45000Lm/49500Lm`,
    efikasnost: `150Lm/W`,
    ugao: `/`,
    vek: `30 000 sati`,
    slika: samson,
    url: `https://www.weisslight.eu/proizvodi/wl-led-sijalice.php`,
    visina: [10, 40],
    types: [
      {
        id: 1,
        snaga: 200,
        flux: 30000,
      },
      {
        id: 2,
        snaga: 235,
        flux: 35250,
      },
      {
        id: 3,
        snaga: 300,
        flux: 45000,
      },
      {
        id: 4,
        snaga: 330,
        flux: 49500,
      },
    ],
  },
  {
    id: 6,
    ime: `E LIGHT`,
    snaga: `20W/30W/50W/70W/100W`,
    boja: `6500K`,
    flux: `1600Lm/2400Lm/4000Lm/5600Lm/8000Lm`,
    efikasnost: `80Lm/W`,
    ugao: `/`,
    vek: `10000 sati`,
    slika: elight,
    url: `https://www.weisslight.eu/proizvodi/wl-led-sijalice.php`,
    visina: [4, 6],
    types: [
      {
        id: 1,
        snaga: 20,
        flux: 1600,
      },
      {
        id: 2,
        snaga: 30,
        flux: 2400,
      },
      {
        id: 3,
        snaga: 50,
        flux: 4000,
      },
      {
        id: 4,
        snaga: 70,
        flux: 5600,
      },
      {
        id: 5,
        snaga: 100,
        flux: 8000,
      },
    ],
  },
];
