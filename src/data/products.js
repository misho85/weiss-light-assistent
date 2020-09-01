import ledCev from '../assets/images/LED-CEV-T8.png';
import sijalica from '../assets/images/SIJALICA-E27-AC-on3.png';
import ledLane from '../assets/images/WL-LED-LANE.png';
import reflektor from '../assets/images/WL-LED-REFLEKTOR.png';
import zvono from '../assets/images/WLZ-KLASIK.png';

// broj tipova ogranicen na 7

export default [
  {
    id: 1,
    ime: `WL LED SIJALICA E27 AC`,
    snaga: `5W/8W/10W/12W`,
    boja: `2700K-6500K`,
    flux: `510Lm/805Lm/1045Lm/1260Lm`,
    efikasnost: `103-110Lm/W`,
    ugao: `110`,
    vek: `30 000 sati`,
    slika: sijalica,
    types: [
      {
        id: 1,
        snaga: 5,
        flux: 510,
      },
      {
        id: 2,
        snaga: 8,
        flux: 805,
      },
      {
        id: 3,
        snaga: 10,
        flux: 1045,
      },
      {
        id: 4,
        snaga: 12,
        flux: 1260,
      },
    ],
  },
  {
    id: 2,
    ime: `WL LED INDUSTRIJSKO ZVONO / KLASIK`,
    snaga: `90W/110W/130W`,
    boja: `2700K-6500K`,
    flux: `730Lm/8760Lm/10300Lm`,
    efikasnost: `70-85Lm/W`,
    ugao: `30-120`,
    vek: `30 000 sati`,
    slika: zvono,
    types: [
      {
        id: 1,
        snaga: 90,
        flux: 730,
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
    ime: `WL LED CEV T8`,
    snaga: `8W/16W 60 16W/32W 120 18W/36W 150`,
    boja: `2700K-6500K`,
    flux: `830Lm/1700Lm 1700Lm/3450Lm 1810Lm/3760Lm`,
    efikasnost: `103-110Lm/W`,
    ugao: `150`,
    vek: `30 000 sati`,
    slika: ledCev,
    types: [
      {
        id: 1,
        snaga: 8,
        flux: 830,
      },
      {
        id: 2,
        snaga: 16,
        flux: 1700,
      },
      {
        id: 3,
        snaga: 18,
        flux: 1810,
      },
      {
        id: 4,
        snaga: 32,
        flux: 3450,
      },
      {
        id: 5,
        snaga: 36,
        flux: 3760,
      },
    ],
  },
  {
    id: 4,
    ime: `WL LED REFLEKTOR`,
    snaga: `10W/20W/30W/50W/100W`,
    boja: `2700K-6500K`,
    flux: `1080Lm/2105Lm/3200Lm/5360Lm/10800Lm`,
    efikasnost: `95-108Lm/W`,
    ugao: `110`,
    vek: `30 000 sati`,
    slika: reflektor,
    types: [
      {
        id: 1,
        snaga: 10,
        flux: 1080,
      },
      {
        id: 2,
        snaga: 20,
        flux: 2105,
      },
      {
        id: 3,
        snaga: 30,
        flux: 3200,
      },
      {
        id: 4,
        snaga: 50,
        flux: 5360,
      },
      {
        id: 5,
        snaga: 100,
        flux: 10800,
      },
    ],
  },
  {
    id: 5,
    ime: `WL OFFICE LIGHT`,
    snaga: `25W/35W/45W`,
    boja: `2700K-6500K`,
    flux: `2760Lm/3650Lm/4750Lm`,
    efikasnost: `92-104Lm/W`,
    ugao: `60-120`,
    vek: `30 000 sati`,
    slika: ledLane,
    types: [
      {
        id: 1,
        snaga: 25,
        flux: 2760,
      },
      {
        id: 2,
        snaga: 35,
        flux: 3650,
      },
      {
        id: 3,
        snaga: 45,
        flux: 4750,
      },
    ],
  },
];
