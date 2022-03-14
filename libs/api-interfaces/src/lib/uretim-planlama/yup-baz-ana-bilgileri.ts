import { KayitIslemTipiEnum } from './enums';

export interface UpYupBazAna {
  id: string;
  yil: string;
  dosyaAdi: string;
  dosyaAciklama: string;
  idDokuman: string;
  olusturmaTarihi: Date;
  olusturanKisi: string;
  islemTarihi: Date;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
}

export interface YupBazAnaBilgileri {
  id: string;
  yil: string;
  dosyaAdi: string;
  dosyaAciklama: string;
  idDokuman: string;
}

export interface YupBazAnaBilgileriGenel {
  yupBazAnaBilgileriModel: YupBazAnaBilgileri;
  excelDizin?: string;
  kayitIslemTipiEnum: KayitIslemTipiEnum;
}

export interface UpYupBazHatPlanliDuruslarDonusModel {
  ay: string;
  aylikDurusSaati: number;
  hatTesisAdi: string;
  durusAciklama: string;
}

export interface UpYupBazHatUretimHedefDonusModel {
  ay: string;
  uretimHedefMiktar: number;
  hatTesisAdi: string;
}

export interface YupBazDetayModel
  extends UpYupBazHatPlanliDuruslarDonusModel,
    UpYupBazHatUretimHedefDonusModel {}
