import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface KkOperatorBilgiGörseller extends ApiInterfaceBase {
  id: string;
  idOperatorBilgilendirme: string;
  gorselNo: string;
  idDokuman: string;
  thumbnailBase64: string;
  standartBase64: string;
  orijinalBase64: string;
}
