import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface KkKusurKtlgGorsel extends ApiInterfaceBase {
  id: string;
  idKusurHat: string;
  gorselNo: number;
  gorselTanim?: string;
  dosyaYolu: string;
  thumbnailBase64: string;
  standartBase64: string;
  orijinalBase64: string;
  idDokuman: string;
}
