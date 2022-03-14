export interface HSMBobinModel {
  id: string;
  topluKayit: string;
  bobinNo: string;
  slabNo: string;
  dokumKalitesi: string;
  celikKalitesi: string;
  mpcNo: string;
  yerliIhracKodu: string;
  musteri: string;
  kalinlik: number;
  genislik: number;
  agirlik: number;
  denemeMi: string;
  fasonmu: string;
  numuneVarMi: string;
  numuneAlimYeri: string;
  bagimsizNumuneVarMi: string;
  bagimsizMesajVarMi: string;
  durum: string;
}

export interface CMSMpratigiModel {
  id: string;
  idUretimKyd: string;
  cmSm: string;
  pratikAdi: string;
  pratikNo: number;
  yerAdi: string;
  yerNo: number;
  pratikSiraNo: number;
  pratikVarMi: string;
  pratikDeger: number;
  olusturmaTarihi: Date;
  oluşturanKisi: string;
  islemTarihi: Date;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
}

export interface CMSMPratigiBilgileri {
  pratikAdi: string;
  ozellikAdi: string;
  deger1: string;
  deger2: string;
  deger3: string;
  deger4: string;
  deger5: string;
  deger6: string;
  deger7: string;
  deger8: string;
  deger9: string;
}

export interface CMSMPratigiBilgileriExt extends CMSMPratigiBilgileri {
  spanKey: number;
}

export interface BagimsizNumuneBilgileri {
  id: string;
  talepSahibi: string;
  numuneNo: string;
  talepEden: string;
  yeri: string;
  numuneAlindiMi: string;
  aciklama: string;
}

export interface BagimsizMesajModel {
  id: string;
  notSahibi: string;
  not: string;
  bobinNo: string;
  hatNo: string;
}

// ! QCKAYITBILGILERI METODUNA qcOnayYapilmis eklenecek.
export interface CMSMpratigiModelListQueryModel {
  hatNo: string;
  bobinNo: string;
  qcOnayYapilmis: boolean; // Güncellede true gönderilecek.
}

export interface BagimsizNumuneBilgileriQueryModel {
  hatNo: string;
  bobinNo: string;
}

export interface QcBobinListQueryModel {
  hatNo: number;
  qcOnayYapilmis: boolean;
}
export interface BagimsizNumuneModel {
  id: string;
  talepSahibi: string;
  numuneNo: string;
  talepEden: string;
  yeri: string;
  numuneAlindiMi: string;
  aciklama: string;
  hatNo: string;
  bobinNo: string;
}
