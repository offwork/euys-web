export interface KtAnatabloYaglamaDurumu {
  yaglamaDurumuAnaTabloKodu: number;
  durum: string;
  kodDurum?: string;
}
export interface KtAnatabloYaglamaMarkasi {
  yagMarkasiAnaTabloKodu: number;
  marka: string;
}
export interface KtStYaglamaTipi {
  yaglamaTipiKodu: number;
  yaglamaTipi: string;
}

export interface KtStYaglamaYuzeyi {
  yaglamaYuzeyiKodu: number;
  yaglamaYuzeyi: string;
  kodYuzey?: string;
}

export interface KtAtYaglama {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  yaglamaKodu: number;
  marka: string;
  yaglamaDurum: string;
  yaglamaYuzeyi: string;
  yaglamaTipi: string;
  yaglamaTipiKodu: number;
  hdfYaglamaMiktari: number;
  minYaglamaMiktari: number;
  maxYaglamaMiktari: number;
  yaglamaText: string;
  kontrolAktifTaslak: number;
}

export interface KtAtYaglamaViewModel {
  ktAtYaglamaList: KtAtYaglama[];
  ktAnatabloYaglamaMarkasiList: KtAnatabloYaglamaMarkasi[];
  ktAnatabloYaglamaDurumuList: KtAnatabloYaglamaDurumu[];
  ktStYaglamaYuzeyiList: KtStYaglamaYuzeyi[];
  ktStYaglamaTipiList: KtStYaglamaTipi[];
}
