import { KtAtDualBazliKaliteSckHadde } from '../kt/kt-at-dual-bazli-kalite-sck-hadde';
import { Urun } from '../shared/urun';

export interface KtSpDualFazliKaliteSckHaddeViewModel {
  ktSpDualFazliKaliteSckHaddeList: KtSpDualFazliKaliteSckHaddeSpec[];
  ktAtDualBazliKaliteSckHaddeList: KtAtDualBazliKaliteSckHadde[];
}

export interface KtSpDualFazliKaliteSckHaddeSpec {
  durum: string;
  etag: string;
  dualFazliKaliteSckHadKodu: number;
  spDualFazliKaliteSckHadKodu: number;
  id: string;
  islemTipiNo: number;
  islemYapanKisi: string;
  islemYapanMenu: string;
  maxKalinlik: number;
  minKalinlik: number;
  maxGenislik: number;
  minGenislik: number;
  olusturanKisi: string;
  uretimOzellikTipi: string;
  kontrolAktifTaslak: number;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
  codeAndText: string;
}
