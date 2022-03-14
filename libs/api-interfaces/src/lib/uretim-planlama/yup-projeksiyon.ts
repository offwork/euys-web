export interface YupProjeksiyonHatUretimHedeflerDonusModel {
  ay: string;
  uretimHedefMiktar: number;
}

export interface YupProjeksiyonHatUretimHedeflerGenelModel {
  idYupPlanAna: string;
  yil: string;
  idStYupHatSira: number;
  hatUzunTanim: string;
  hatGrupUzunTanim: string;
  dosyaAdi: string;
  yupProjeksiyonHatUretimHedeflerDonusModel: YupProjeksiyonHatUretimHedeflerDonusModel[];
}

export interface YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel {
  ay: string;
  donusModelList: YupProjeksiyonKapasiteGrubuBazindaHedeflerDonusModel[];
}

export interface YupProjeksiyonKapasiteGrubuBazindaHedeflerDonusModel {
  rumuzAciklama: string;
  raporGrubu: string;
  hedefMiktar: number;
}

export interface YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel {
  ay: string;
  donusModelList: YupProjeksiyonUrunGrubuBazindaHedeflerDonusModel[];
}

export interface YupProjeksiyonUrunGrubuBazindaHedeflerDonusModel {
  rumuzAciklama: string;
  hedefMitoplamktar: number;
}

export interface YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel {
  ay: string;
  donusModelList: YupProjeksiyonUrunRumuzuBazindaHedeflerDonusModel[];
}

export interface YupProjeksiyonUrunRumuzuBazindaHedeflerDonusModel {
  rumuzAciklama: string;
  urunRumuzu: string;
  uretimHedefMiktar: number;
}

export interface YupProjeksiyonOzetModel {
  isdemirSlabi?: number;
  ithalSlab?: number;
  satinAlinanSlab?: number;
  yerliFh?: number;
  ithalFh?: number;
  satinAlinanFh?: number;

  yerliHrc?: number;
  ithalHrc?: number;
  satinAlinanHrc?: number;

  sogukHadde?: number;
  sicakHadde?: number;
  sicakMaden?: number;

  cpt?: number;
  tandem?: number;

  hsm1?: number;
  hsm2?: number;
}
