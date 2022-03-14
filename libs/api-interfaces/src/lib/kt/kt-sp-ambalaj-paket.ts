import { KtAtAmbalajPaket } from './kt-at-ambalaj-paket';

export interface KtSpAmbalajPaketViewModel {
  ktSpAmbalajPaketList: KtSpAmbalajPaket[];
  ktAtAmbalajPaketList: KtAtAmbalajPaket[];
  ktUrunAltGrupList: KtUrunAltGrup[];
  ktAnatabloAmbalajPaketList: KtAnatabloAmbalajPaket[];
}

export interface KtSpAmbalajPaket {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  spAmbalajPaketKodu: number;
  ambalajPaketKodu: number;
  oiAmbalajTipiAnaTabloKodu: number;
  urunAltGrupNo: string;
  minKalinlik: number;
  maxKalinlik: number;
  minUzunluk: number;
  maxUzunluk: number;
  codeAndText: string;
  urunGrupNoAndGrup: string;
  idAndAmbalaj: string;
}

export interface KtUrunAltGrup {
  urunAltGrupNo: string;
  urunGrupNoAndGrup: string;
}

export interface KtAnatabloAmbalajPaket {
  ambalajTipiAnaTabloKodu: number;
  idAndAmbalaj: string;
}
