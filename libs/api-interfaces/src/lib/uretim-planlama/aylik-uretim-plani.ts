export interface YupAylikAnaModel {
  id: string;
  yil: string;
  ay: string;
  dosyaAdi: string;
  dosyaAciklama: string;
  idDokuman: string;
  olusturmaTarihi: Date;
  yupAylikUretimPlaniModelList: YupAylikUretimPlaniModel[];
  yupAylikNihaiMamulModelList: YupAylikNihaiMamulModel[];
}

export interface YupAylikUretimPlaniModel {
  id: string;
  idYupAylikAna: string;
  apassMiktar: number;
  uretimHedefMiktar: number;
  olusturmaTarihi: Date;
  idStYupHatSira: number;
  hatSiraHatTanim: string;
  hatSiraHatGrupTanim: string;
  hatSiraAylikUretimSiraNo: number;
  yupButce: number;
}
export interface YupAylikNihaiMamulModel {
  id: string;
  idYupAylikAna: string;
  apassMiktar: number;
  uretimHedefMiktar: number;
  olusturmaTarihi: Date;
  urunRapGrupNo: number;
  aylikMamulTanim: string;
  aylikMamulGrupTanim: string;
  yupButce: number;
}
