import { EvetHayir } from '../enums';
import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface BagimsizNumuneGoruntulemeModel extends ApiInterfaceBase {
  id: string;
  talepSahibi: string;
  adet: number;
  numuneNo: string;
  talepEden: string;
  yeri: string;
  operatorAciklama: string;
  numuneAlindiMi: EvetHayir;
  aciklama: string;
  notSahibi: string;
  not: string;
  bobinNo: string;
  hatNo: string;
}
