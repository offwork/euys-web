import { IslemTipi } from '../enums';

export interface ApiInterfaceBase {
  olusturmaTarihi?: string;
  olusturanKisi?: string;
  islemTarihi?: string;
  islemYapanKisi?: string;
  islemYapanMenu?: string;
  islemTipiNo?: IslemTipi;
  etag?: string;
}

export interface UserInfo {
  ad: string;
  soyad: string;
}
