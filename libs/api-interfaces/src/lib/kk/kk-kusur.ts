import { AktifPasif, EvetHayir } from '../enums';
import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface KkKusur extends ApiInterfaceBase {
  kusurKodu: string;
  kusurSinifiNo: number;
  anaKusurKodu: string;
  kusurTanim: string;
  kusurAciklama: string;
  hurdaMi: EvetHayir;
  guncellenebilirMi?: EvetHayir;
  aktifPasif: AktifPasif;
}
