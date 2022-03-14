import { UtStHatTanim } from '../kt-spec/kt-sp-yaglama';

export interface UtTankAsitlemeLimitViewModel {
  utStTankAsitlTanimList: UtStTankAsitlTanim[];
  utTankAsitlemeLimitList: UtTankAsitlemeLimit[];
  utStHatTanimList: UtStHatTanim[];
}

export interface UtTankAsitlemeLimit {
  id: string;
  hatKodu: string;
  tankNo: number;
  hclYuzde: number;
  hclGrLt: number;
  fe2Yuzde: number;
  fe2GrLt: number;
  banyoSicakligi: number;
  idTankAsitlemeLimitEski: string;
  olusturmaTarihi: string;
  olusturanKisi: string;
  islemTarihi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  aktifPasif: string;
}
export interface UtStTankAsitlTanim {
  tankNo: number;
}
