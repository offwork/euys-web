import { KtOiTanimYuzeyDurum } from './kt-oi-tanim-yuzey-durum';

export interface KtAtTemperMerdaneTipiViewModel {
  ktAtTemperMerdaneTipiList: KtAtTemperMerdaneTipi[];
  ktOiTanimYuzeyDurumuList: KtOiTanimYuzeyDurum[];
}

export interface KtAtTemperMerdaneTipi {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  temperMerdaneTipiKodu: number;
  yuzeyDurumKodu: number;
  comboYuzeyDurumAciklama: string;
  temperMerdaneTipiText: string;
  kontrolAktifTaslak: number;
}
