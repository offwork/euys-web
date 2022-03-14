import { Time } from '@angular/common';
import { UtStVardiyaUretim } from '../uretim-takip/ut-cinko-lapa';

export interface UtIsletmeHaddeYagEmulsiyonModel {
  id: string;

  vardiyaTarihi: string;
  vardiyaNo: string;
  vardiyaTarihiDate: Date;

  // s1
  s11YagKonstasyonYuzde: number;
  s11PhDegeri: number;
  s11Iletkenlik: number;
  s12YagKonsantasyonYuzde: number;
  s12PhDegeri: number;
  s12Iletkenlik: number;
  s1EklenenYagLt: number;
  s1EklenenSuM3: number;
  s1SeviyeKirli: number;
  s1SeviyeTemiz: number;

  // s3
  s31YagKonstasyonYuzde: number;
  s31PhDegeri: number;
  s31Iletkenlik: number;
  s32YagKonsantasyonYuzde: number;
  s32PhDegeri: number;
  s32Iletkenlik: number;
  s3EklenenYagLt: number;
  s3EklenenSuM3: number;
  s3SeviyeKirli: number;
  s3SeviyeTemiz: number;

  // t
  t1YagKonstasyonYuzde: number;
  t1PhDegeri: number;
  t1Iletkenlik: number;
  t2YagKonsantasyonYuzde: number;
  t2PhDegeri: number;
  t2Iletkenlik: number;
  teklenenYagLt: number;
  teklenenSuM3: number;
  tseviyeKirli: number;
  tseviyeTemiz: number;

  // dm su
  dmSuPhDegeri: number;
  dmSuIletkenlik: number;

  idIsletmeHaddeYagEmulEski: string;

  olusturanKisi: string;
  olusturmaTarihi: string;
  islemTarihi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  aktifPasif: string;

  kayitIslemTipiEnum: number;
  islemTarihiFormat: Date;
  islemSaati: Time;
}
export interface UtIsletmeHaddeYagEmulsiyon {
  id: string;

  vardiyaTarihi: Date;
  vardiyaNo: string;
  vardiyaTarihiDate: Date;

  // s1
  s11YagKonstasyonYuzde: number;
  s11PhDegeri: number;
  s11Iletkenlik: number;
  s12YagKonsantasyonYuzde: number;
  s12PhDegeri: number;
  s12Iletkenlik: number;
  s1EklenenYagLt: number;
  s1EklenenSuM3: number;
  s1SeviyeKirli: number;
  s1SeviyeTemiz: number;

  // s3
  s31YagKonstasyonYuzde: number;
  s31PhDegeri: number;
  s31Iletkenlik: number;
  s32YagKonsantasyonYuzde: number;
  s32PhDegeri: number;
  s32Iletkenlik: number;
  s3EklenenYagLt: number;
  s3EklenenSuM3: number;
  s3SeviyeKirli: number;
  s3SeviyeTemiz: number;

  // t
  t1YagKonstasyonYuzde: number;
  t1PhDegeri: number;
  t1Iletkenlik: number;
  t2YagKonsantasyonYuzde: number;
  t2PhDegeri: number;
  t2Iletkenlik: number;
  teklenenYagLt: number;
  teklenenSuM3: number;
  tseviyeKirli: number;
  tseviyeTemiz: number;

  // dm su
  dmSuPhDegeri: number;
  dmSuIletkenlik: number;

  idIsletmeHaddeYagEmulEski: string;

  olusturanKisi: string;
  olusturmaTarihi: string;
  islemTarihi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  aktifPasif: string;
}
