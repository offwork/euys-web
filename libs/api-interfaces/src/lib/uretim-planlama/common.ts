import { YerliIhrac } from '../enums';
import { ImalatLotTuru } from './enums';

export interface IslemSonucModel {
  islemDurum: boolean;
  islemAciklama: string;
}

export const UP_MONTHS = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

export const UP_YERLI_IHRAC_OPTIONS = [
  { label: 'Yerli', value: YerliIhrac.YERLI },
  { label: 'İhraç', value: YerliIhrac.IHRAC },
];

export const IMALAT_LOT_TURU_OPTIONS = [
  { label: 'Siparişli', value: ImalatLotTuru.SIPARISLI },
  { label: 'Siparişsiz', value: ImalatLotTuru.SIPARISSIZ },
];
