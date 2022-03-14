import { IslemSonucModel } from ".";

export interface YupBackUpPlanMamulDonusModel  {
  id: string;
  yil: string;
  donem: number;
  pfUrunGrup: string;
  planMiktar: number;
  pfUrunTipi: string;
  etag: string;
}

export interface YupBackUpPlanGenelModel {

  islemSonucModel: IslemSonucModel[];
  yupBackUpPlanMamulDonusModel: YupBackUpPlanMamulDonusModel[];
}

