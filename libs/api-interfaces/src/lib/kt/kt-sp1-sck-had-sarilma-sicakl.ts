import { Urun } from '../shared/urun';
import { KtAt1SckHadSarilmaSicakl } from './kt-at1-sck-had-sarilma-sicakl';

export interface KtSp1SckHadSarilmaSicaklViewModel {
  ktSp1SckHadSarilmaSicaklList: KtSp1SckHadSarilmaSicakl[];
  ktAt1SckHadSarilmaSicaklList: KtAt1SckHadSarilmaSicakl[];
}

export interface KtSp1SckHadSarilmaSicakl {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  sp1SckHadSarilmaScklKodu: number;
  sckHadSarilmaScklKodu: number;
  minKalinlik: number;
  maxKalinlik: number;
  codeAndText: string;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
}
