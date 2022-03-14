export interface UtDurdurmaStatuModel {
  aktifPasif?: string;
  durdurmaStatu?: string;
  durdurmaStatuTanim?: string;
  etag?: string;
  id?: string;
  islemYapanKisi?: string;
  olusturanKisi?: string;
}

export interface UtDurdurmaKodAdlariModel {
  aktifPasif?: string;
  durdurmaAltKodu?: string;
  durdurmaAnaKodu?: string;
  durdurmaBirim?: string;
  durdurmaBirimNo?: number;
  durdurmaStatu?: string;
  durdurmaStatuTanimi?: string;
  etag?: string;
  id?: string;
  idDurdurmaStatu?: string;
}

export interface UtDurdurmaKodlariComboValueModel {
  durdurmaAltKodlari?: string[];
  durdurmaAnaKodlari?: string[];
  utDurdurmaStatuModel?: UtDurdurmaStatuModel[];
  utStDurdurmaBirimModelList?: UtStDurdurmaBirimModel[];
}

export interface UtStDurdurmaBirimModel {
  durdurmaBirim?: string;
  durdurmaBirimNo?: number;
}

export interface UtDurdurmaKodAdlariView {
  durdurmaAnaKodu: string;
  utDurdurmaKodAdlariAltListeViewList: UtDurdurmaKodAdlariModel[];
}
