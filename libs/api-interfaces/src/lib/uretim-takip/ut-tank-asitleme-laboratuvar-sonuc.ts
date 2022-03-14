import { Time } from '@angular/common';
import { UtStHatTanim } from '../kt-spec/kt-sp-yaglama';
import {
  UtTankAsitlemeLimit,
  UtStTankAsitlTanim,
} from '../uretim-takip/ut-tank-asitleme-limit';
import { UtStVardiyaUretim } from '../uretim-takip/ut-cinko-lapa';

export interface UtTankAsitlemeViewModel {
  utStTankAsitlTanimList: UtStTankAsitlTanim[];
  utTankAsitlemeLimitList: UtTankAsitlemeLimit[];
  utStVardiyaUretimList: UtStVardiyaUretim[];
  utStHatTanimList: UtStHatTanim[];
  utTankAsitlemeList: UtTankAsitleme[];
}
export interface UtTankAsitleme {
  id: string;

  hatKodu: string;
  tankNo: number;

  olcumTarihi: string;
  olcumTarihiFormat: Date;
  olcumSaati: string;
  olcumSaatiDate?: Date;
  olcumTarihiDate: Date;

  vardiyaTarihi: Date;
  vardiyaNo: string;

  hclYuzde: number;
  hclGrLt: number;
  fe2Yuzde: number;
  fe2GrLt: number;
  banyoSicakligi: number;

  idTankAsitlemeLimit: string;
  idTankAsitlemeEski: string;
  olusturmaTarihi: string;
  olusturanKisi: string;

  islemTarihi: string;
  islemTarihiFormat: Date;
  islemSaati: Time;

  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  aktifPasif: string;
}
