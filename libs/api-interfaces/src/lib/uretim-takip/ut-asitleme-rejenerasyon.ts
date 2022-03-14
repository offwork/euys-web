import { Time } from '@angular/common';
import { UtStVardiyaUretim } from '../uretim-takip/ut-cinko-lapa';

export interface UtAsitlemeRejenerasyonModel {
  id: string;

  vardiyaTarihi: string;
  vardiyaNo: string;
  vardiyaTarihiDate: Date;

  gelenKirliAsit: number;
  rejenereEdilenAsit: number;
  gonderilenAsit: number;
  tuketilenKirliAsit: number;
  gelenSafAsit: number;

  idAsitlemeRejenerasyonEski: string;
  olusturanKisi: string;
  olusturmaTarihi: string;

  islemTarihi: string;
  islemTarihiFormat: Date;
  islemSaati: Time;

  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  aktifPasif: string;
  kayitIslemTipiEnum: number;
}
export interface UtAsitlemeRejenerasyon {
  id: string;

  vardiyaTarihi: Date;
  vardiyaNo: string;
  vardiyaTarihiDate: Date;

  gelenKirliAsit: number;
  rejenereEdilenAsit: number;
  gonderilenAsit: number;
  tuketilenKirliAsit: number;
  gelenSafAsit: number;

  idAsitlemeRejenerasyonEski: string;
  olusturanKisi: string;
  olusturmaTarihi: string;

  islemTarihi: string;
  islemTarihiFormat: Date;
  islemSaati: Time;

  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  aktifPasif: string;
}
export interface UtAsitlemeRejenerasyonViewModel {

  utAsitlemeRejenerasyonModelList: UtAsitlemeRejenerasyonModel[];

  gunlukGelenKirliAsit: number;
  gunlukRejenereEdilenAsit: number;
  gunlukGonderilenAsit: number;
  gunlukTuketilenKirliAsit: number;
  gunlukGelenSafAsit: number;
  aylikGelenKirliAsit: number;
  aylikRejenereEdilenAsit: number;
  aylikGonderilenAsit: number;
  aylikTuketilenKirliAsit: number;
  aylikGelenSafAsit: number;
  yillikGelenKirliAsit: number;
  yillikRejenereEdilenAsit: number;
  yillikGonderilenAsit: number;
  yillikTuketilenKirliAsit: number;
  yillikGelenSafAsit: number;

}
