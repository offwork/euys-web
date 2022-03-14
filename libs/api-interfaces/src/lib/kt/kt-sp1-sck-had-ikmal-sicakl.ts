import { Urun } from '../shared/urun';
import { KtAt1SckHadIkmalSicakl } from './kt-at1-sck-had-ikmal-sicakl';

export interface KtSp1SckHadIkmalSicaklikViewModel {
  ktSp1SckHadIkmalSicaklikList: KtSp1SckHadIkmalSicaklik[];
  ktAt1SckHadIkmalSicaklikList: KtAt1SckHadIkmalSicakl[];
}

export interface KtSp1SckHadIkmalSicaklik {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  sp1SckHadIkmalSicaklKodu: number;
  sckHad1IkmalSicaklikKodu: number;
  minKalinlik: number;
  maxKalinlik: number;
  minGenislik: number;
  maxGenislik: number;
  codeAndText: string;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
}
