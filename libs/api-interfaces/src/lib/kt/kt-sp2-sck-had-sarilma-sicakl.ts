import { Urun } from '../shared/urun';
import { KtAt2SckHadSarilmaSicakl } from './kt-at2-sck-had-sarilma-sicakl';

export interface KtSp2SckHadSarilmaSicaklViewModel {
  ktSp2SckHadSarilmaSicaklList: KtSp2SckHadSarilmaSicakl[];
  ktAt2SckHadSarilmaSicaklList: KtAt2SckHadSarilmaSicakl[];
}

export interface KtSp2SckHadSarilmaSicakl {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  sp2SckHadSarilmaScklKodu: number;
  sckHadSarilmaScklKodu: number;
  minKalinlik: number;
  maxKalinlik: number;
  codeAndText: string;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
}
