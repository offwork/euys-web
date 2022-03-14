export interface YupTaslakAnaModel {
  id: string;
  yil: string;
  yupTaslakIsmi: string;
  yupTaslakAciklama: string;
  yupPlanStatuNo: string;
  olusturmaTarihi: Date;
  yupBazAnaBilgileriModel: YupBazAnaBilgileriModel;
}

export interface YupBazAnaBilgileriModel {
  id: string;
  eTag: string;
  yil: string;
  dosyaAdi: string;
  dosyaAciklama: string;
  idDokuman: string;
}
