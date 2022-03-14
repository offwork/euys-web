import { AktifPasif } from '../enums';
import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface KkKusurAktifHat extends ApiInterfaceBase {
  id: string;
  kusurKodu: string;
  hatKodu: string;
  aktifPasif?: AktifPasif;
}
