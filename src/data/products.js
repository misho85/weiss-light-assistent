import ledCev from '../assets/images/LED-CEV-T8.png';
import sijalica from '../assets/images/SIJALICA-E27-AC-on3.png';
import ledLane from '../assets/images/WL-LED-LANE.png';
import reflektor from '../assets/images/WL-LED-REFLEKTOR.png';
import zvono from '../assets/images/WLZ-KLASIK.png';

export default [
  {
    id: 1,
    ime: `WL LED SIJALICA E27 AC`,
    snaga: `5W/8W/10W/12W`,
    boja: `2700K-6500K`,
    flux: `510Lm/805Lm/1045Lm/1260Lm`,
    fluxData: [510, 805, 1045, 1260],
    efikasnost: `103-110Lm/W`,
    ugao: `110`,
    vek: `30 000 sati`,
    slika: sijalica,
  },
  {
    id: 2,
    ime: `WL LED INDUSTRIJSKO ZVONO / KLASIK`,
    snaga: `90W/110W/130W`,
    boja: `2700K-6500K`,
    flux: `730Lm/8760Lm/10300Lm`,
    fluxData: [730, 8760, 10300],
    efikasnost: `70-85Lm/W`,
    ugao: `30-120`,
    vek: `30 000 sati`,
    slika: zvono,
  },
  {
    id: 3,
    ime: `WL LED CEV T8`,
    snaga: `8W/16W 60 16W/32W 120 18W/36W 150`,
    boja: `2700K-6500K`,
    flux: `830Lm/1700Lm 1700Lm/3450Lm 1810Lm/3760Lm`,
    fluxData: [830, 1700, 1810, 3450, 3760],
    efikasnost: `103-110Lm/W`,
    ugao: `150`,
    vek: `30 000 sati`,
    slika: ledCev,
  },
  {
    id: 4,
    ime: `WL LED REFLEKTOR`,
    snaga: `10W/20W/30W/50W/100W`,
    boja: `2700K-6500K`,
    flux: `1080Lm/2105Lm/3200Lm/5360Lm/10800Lm`,
    fluxData: [1080, 2105, 3200, 5360, 10800],
    efikasnost: `95-108Lm/W`,
    ugao: `110`,
    vek: `30 000 sati`,
    slika: reflektor,
  },
  {
    id: 5,
    ime: `WL OFFICE LIGHT`,
    snaga: `25W/35W/45W`,
    boja: `2700K-6500K`,
    flux: `2760Lm/3650Lm/4750Lm`,
    fluxData: [2760, 3650, 4750],
    efikasnost: `92-104Lm/W`,
    ugao: `60-120`,
    vek: `30 000 sati`,
    slika: ledLane,
  },
];
