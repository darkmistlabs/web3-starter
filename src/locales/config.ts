// @mui
import { enUS, frFR, zhCN, viVN, arSD } from '@mui/material/locale';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: frFR,
  },
  {
    label: 'Vietnamese',
    value: 'vn',
    systemValue: viVN,
  },
  {
    label: 'Chinese',
    value: 'cn',
    systemValue: zhCN,
  },
  {
    label: 'Arabic (Sudan)',
    value: 'ar',
    systemValue: arSD,
  },
];

export const defaultLang = allLangs[0]; // English
