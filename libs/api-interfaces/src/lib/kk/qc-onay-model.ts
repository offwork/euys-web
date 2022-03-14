import { BobinKalinlikDegerleri } from './bobin-kalinlik-degerleri';
import { KkUretimYuzeyKusuru } from './kk-uretim-yuzey-kusuru';
import { BagimsizNumuneModel } from './kk-hsm1';
import { EvetHayir } from '../enums';
import { QCInfoBase } from '../_base/qc-kayit-onay.base';
import { HSM1UretimDegerleri, HSM2UretimDegerleri } from './uretim-degerleri';

export interface QCOnayModel extends QCInfoBase {
  hatNo: string;
  bobinNo: string;
  bagimsizNumuneListesi: BagimsizNumuneModel[];
  //bobinGorselListesi: BobinGorsel[];
  aciklama: string;
  qcKayitTarihi: Date;
  qcOperator: string;
  bobinAcmaKontrolu: EvetHayir;
  numuneAl: EvetHayir;
  yuzeyKusuruVarMi: EvetHayir;
  kalinlikOlculenOrtalama: number;
  genislikOlculenOrtalama: number;
  bobinIcCapiOlculenOrtalama: number;
  bobinDisCapiOlculenOrtalama: number;
  seritHaddeSarilmaSicaklikOrtalama: number;
  seritHaddeIkmalSicaklikOrtalama: number;
  bobinKalinlikDegerleri: BobinKalinlikDegerleri;
  yuzeyKusurKaydi1: KkUretimYuzeyKusuru;
  yuzeyKusurKaydi2: KkUretimYuzeyKusuru;
  yuzeyKusurKaydi3: KkUretimYuzeyKusuru;

  hsm1UretimDegerleri: HSM1UretimDegerleri[];
  hsm2UretimDegerleri: HSM2UretimDegerleri[];
}
