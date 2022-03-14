export interface YupKapasiteRaporGrubuDonusModel {
  urunGrubu: string;
  grupAdi: string;
  siraNo: number;
  rumuz: string;
}

export interface YupKapasiteRaporGrubuTanimlamaModel {
  urunGrubu: string;
  grupAdi: string;
  siraNo: number;
  rumuzModel: PfdmUrunGrupRumuzAciklamaModel[];
}

export interface PfdmUrunGrupRumuzAciklamaModel {
  rumuzAciklama: string;
}
