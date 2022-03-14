export interface UtCinkoLapaViewModel {
  utCinkoLapaList?: UtCinkoLapa[];
  utStVardiyaUretimList: UtStVardiyaUretim[];
  utCinkoLapaToplam: UtCinkoLapaToplam;
  utCinkoLapa?: UtCinkoLapa;
}

export interface UtCinkoLapa {
  id: string;
  vardiyaTarihi: string;
  uretimTarihiDate?: Date;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  aktifPasif: string;
  cgl1Adet: number;
  cgl1Agirlik: number;
  cgl2Adet: number;
  cgl2Agirlik: number;
  sevkAdet: number;
  sevkAgirlik: number;
  idCinkoLapaEski: string;
  vardiyaNo: string;
  islemTarihiFormat: string;
  islemSaati: string;
  kontrolGuncelleme: number;
}
export interface UtStVardiyaUretim {
  vardiyaNo: string;
  periyodSiraBasBit: string;
}

export interface UtCinkoLapaToplam {
  toplamAgirlik: number;
  toplamAdet: number;
}
