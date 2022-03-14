import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface KkOperatorBilgilendirme extends ApiInterfaceBase {
  id?: string;
  idUretimMusteri?: string;
  celikKalitesi?: string;
  mpc?: string;
  urunKodu?: string;
  kriterMusteriNo?: number;
  kriterMpcKriter?: number;
  kriterCelikKalitesi?: number;
  kriterUrunKodu?: number;
  kriterAgirligi?: number;
  kriterSayisi?: number;
  operatorBilgilendirme?: string;
  musteri: string;
  tarihVardiya?: string;
}
