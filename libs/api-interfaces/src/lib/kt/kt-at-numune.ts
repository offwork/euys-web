
export interface KtAtNumuneViewModel {
  ktAtNumuneList: KtAtNumune[];
  ktStNumuneYeriList: KtStNumuneYeri[];
  ktStNumuneYonuList: KtStNumuneYonu[];
  ktStNumuneBazList:KtStNumuneBaz[];
}

export interface KtAtNumune {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  numuneKodu: number;
  numuneYeriKodu: number;
  numuneYonuKodu: number;
  numuneBazKodu: number;
  adet: number;
  tonaj: number;
  numuneYonu: string;
  numuneBaz: string;
  numuneYeri: string;
  numuneText: string;
  kontrolAktifTaslak: number;
}

export interface KtStNumuneBaz {
  numuneBazKodu: number;
  numuneBaz: string;
}

export interface KtStNumuneYeri {
  numuneYeriKodu: number;
  numuneYeri: string;
}

export interface KtStNumuneYonu {
  numuneYonuKodu: number;
  numuneYonu: string;
}
