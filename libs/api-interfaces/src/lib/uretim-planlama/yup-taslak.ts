import { IslemSonucModel } from './common';
import { KayitIslemTipiEnum } from './enums';
import { YupBazAnaBilgileri } from './yup-baz-ana-bilgileri';

export interface YupTaslakAnaModel2 {
  id: string;
  yil: string;
  yupTaslakIsmi: string;
  yupTaslakAciklama: string;
  yupPlanStatuNo: string;
  olusturmaTarihi: Date;
  yupBazAnaBilgileriModel: YupBazAnaBilgileri;
}

export interface YupTaslakGenelModel {
  yupTaslakAnaModel: YupTaslakAnaModel2;
  yupTaslakAnaModelList: YupTaslakAnaModel2[];
  kayitIslemTipiEnum: KayitIslemTipiEnum;
  islemSonucModel: IslemSonucModel;
}

export class YupPlanModel {
  id: string;
  yil: string;
  dosyaAdi: string;
  kayitIslemTipiEnum: KayitIslemTipiEnum;
  islemSonucModel: IslemSonucModel;
  get yupTaslakIsmi() {
    return this.dosyaAdi;
  }
}
