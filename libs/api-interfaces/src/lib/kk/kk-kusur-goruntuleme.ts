import { ApiInterfaceBase } from '../_base/api-interface.base';
import { KkKusur } from './kk-kusur';

export interface KkKusurGoruntuleme extends ApiInterfaceBase {
  kkKusur: KkKusur;
  kkKusurAna: string;
  kusurSinifiTanim: string;
  kkKusurAktifHatList: string[];
}
