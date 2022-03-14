import { Time } from '@angular/common';
import { UtStHatTanim } from '../kt-spec/kt-sp-yaglama';
import { UtStVardiyaUretim } from '../uretim-takip/ut-cinko-lapa';
import {
  UtStTankDurulTanim,
  UtTankDurulamaLimit,
} from '../uretim-takip/ut-tank-durulama-limit';

export interface UtTankDurulamaViewModel {
  utStTankDurulTanimList: UtStTankDurulTanim[];
  utTankDurulamaLimitList: UtTankDurulamaLimit[];
  utStVardiyaUretimList: UtStVardiyaUretim[];
  utStHatTanimList: UtStHatTanim[];
  utTankDurulamaList: UtTankDurulama[];
}
export interface UtTankDurulama {
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

  ph: number;
  klor: number;
  iletkenlik: number;

  idTankDurulamaLimit: string;
  idTankDurulamaEski: string;
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
