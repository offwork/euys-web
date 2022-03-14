import {
  KtAnatabloYaglamaDurumu,
  KtAtYaglama,
  KtStYaglamaTipi,
  KtStYaglamaYuzeyi,
} from '../kt/kt-at-yaglama';
export interface KTSPYaglamaViewModel {
  ktAnatabloYaglamaDurumuList: KtAnatabloYaglamaDurumu[];
  ktAtYaglamaList: KtAtYaglama[];
  ktOICelikKalitesiList: KtOICelikKalitesi[]; //orj
  ktOIUrunList: KtOIUrun[]; //orj
  ktSpYaglamaSpecList: KtSpYaglamaSpec[]; //orj
  ktStYaglamaTipiiList: KtStYaglamaTipi[];
  ktStYaglamaYuzeyiList: KtStYaglamaYuzeyi[];
  utStHatTanimList: UtStHatTanim[]; //orj
  yaglamaMarkasiList: YaglamaMarkasi[]; //orj
}

export interface KtSpYaglamaSpec {
  celikKodlari: string[];
  durum: string;
  etag: string;
  hatKodu: string;
  id: string;
  islemTarihi: Date;
  islemTipiNo: number;
  islemYapanKisi: string;
  islemYapanMenu: string;
  kontrolAktifTaslak: number;
  marka: string;
  maxKalinlik: number;
  minKalinlik: number;
  olusturanKisi: string;
  olusturmaTarihi: Date;
  spYaglamaKodu: number;
  uretimOzellikTipi: string;
  urunKodlari: string[];
  urunKodu: string;
  yaglamaAciklama: number;
  yaglamaDurum: string;
  yaglamaKodu: number;
  yaglamaYuzeyi: string;
  yerliIhrac: string;
}
export interface YaglamaMarkasi {
  kodMarka: string;
  marka: string;
  yagMarkasiAnaTabloKodu: number;
}

export interface UtStHatTanim {
  aktifPasif: string;
  fasonHatMi: string;
  genelHatKodu: string;
  genelHatmi: string;
  hatKisaTanim: string;
  hatKisaTanimIng: string;
  hatKodu: string;
  hatUzunTanim: string;
  hatUzunTanimIng: string;
  kaliteTasarimHattiMi: string;
  l3HatKodu: string;
  l3HatUzunTanim: string;
  sapHatKodu: string;
  tekrarGecisVarMi: string;
  uretimHattiMi: string;
  ustYonetimTakipEdiyorMu: string;
}
export interface KtOIUrun {
  urunKodu: string;
  rumuz: string;
}
export interface KtOICelikKalitesi {
  erdGrupKalitesi: string;
}
