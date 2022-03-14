import { IslemSonucModel } from './common';
import { KayitIslemTipiEnum } from './enums';

export interface YupGunlukPlanBilgileriGenelModel {
  yupGunlukPlanBilgileriModel: YupGunlukPlanBilgileriModel;
  excelDizin: string;
  kayitIslemTipiEnum: KayitIslemTipiEnum;
  islemSonucModel: IslemSonucModel;
}

export interface YupGunlukPlanBilgileriModel {
  id: string;
  yil: string;
  ay: string;
  dosyaAdi: string;
  dosyaAciklama: string;
  idDokuman: string;
  idStYupHatSira: number;
  etag: string;
  yupGunlukPlanDetayBilgileriModelList: YupGunlukPlanDetayBilgileriModel[];
}

export interface YupGunlukPlanDetayBilgileriModel {
  id: string;
  yil: string;
  ay: string;
  uretimHedefMiktar: number;
}

export interface YupGunlukPlanDetayBilgileriDonusModel {
  id: string;
  yil: string;
  ay: string;
  uretimHedefMiktar: number;
  uretimHedefMiktar2: number;
  ayinKacinciGunu: number;
  hatTesisAdi: string;
  idYupGunlukAna: string;
}
