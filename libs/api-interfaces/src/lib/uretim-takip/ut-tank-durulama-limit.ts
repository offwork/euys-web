import { UtStHatTanim } from '../kt-spec/kt-sp-yaglama';

export interface UtTankDurulamaLimitViewModel {
  utStTankDurulTanimList: UtStTankDurulTanim[];
  utTankDurulamaLimitList: UtTankDurulamaLimit[];
  utStHatTanimList: UtStHatTanim[];
}

export interface UtTankDurulamaLimit {
  id: string;
  hatKodu: string;
  tankNo: number;
  ph: number;
  klor: number;
  iletkenlik: number;
  idTankDurulamaLimitEski: string;
  aktifPasif: string;
  olusturmaTarihi: string;
  olusturanKisi: string;
  islemTarihi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
}
export interface UtStTankDurulTanim {
  tankNo: number;
}
