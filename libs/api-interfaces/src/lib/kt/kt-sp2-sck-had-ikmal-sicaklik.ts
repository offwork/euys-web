import { Urun } from '../shared/urun';
import { KtAt2SckHadIkmalSicakl } from './kt-at2-sck-had-ikmal-sicakl';

export interface KtSp2SckHadIkmalSicaklikViewModel {
  ktSp2SckHadIkmalSicaklikList: KtSp2SckHadIkmalSicaklik[];
  ktAt2SckHadIkmalSicaklikList: KtAt2SckHadIkmalSicakl[];
}

export interface KtSp2SckHadIkmalSicaklik {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  sp2SckHadIkmalSicaklKodu: number;
  sckHad2IkmalSicaklikKodu: number;
  minKalinlik: number;
  maxKalinlik: number;
  codeAndText: string;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
}
