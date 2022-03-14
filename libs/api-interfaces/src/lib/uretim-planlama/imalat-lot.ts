export interface ImalatLotNo {
  mpcNo?: string;
  siparisNo?: string;
}

export interface ImalatLotCriteria {
  yil?: string;
  imalatLotTuru?: string;
  urunGrubu?: string;
  yerliIhrac?: string;
}

export interface ImalatLotResponseModel {
  mlnId: string;
  mpcNo: string;
  siparisNo: string;
  rumuz: string;
  siparisTedarikTipi: string;
  yeniTedarikTipi: string;
  nihaiGenislik: number;
  nihaiKalinlik: number;
  nihaiBoy: number;
  dck: string;
  sck: string;
  protokolNo: string;
  protokolLotNo: string;
  siparisTon: string;
  bakiyeTon: string;
  siparisAdet: number;
  uretilenAdet: number;
  bakiyeAdet: string;
  borcAdet: string;
  slabGenislik: string;
  slabKalinlik: string;
  slabBoy: string;
  skarfTaslamaKodu: string;
  sicakGenislik: string;
  sicakKalinlik: string;
  tandemGenislik: string;
  tandemKalinlik: string;
  sogukGenislik: string;
  sogukKalinlik: string;
  toleransMinTon: number;
  toleransMaxTon: number;
  yeniLotStatu: string;
}

export interface ImalatLotSorguModel {
  statu?: string;
  tedarikTipi?: string;
  mpcNo?: string;
  siparisNo?: string;
  yil?: string;
  imalatLotTuru?: string;
  urunGrubu?: string;
  yerliIhrac?: string;
}

export interface UpStMlnTedarikTipiModel {
  mlnTedarikTipi: string;
  mlnTedarikTipiTanim: string;
}

export interface ImalatLotResponseHataModel {
  mln: string;
  hataAciklama: string;
}

export interface UpStMlnStatuModel {
  mlnStatu: string;
  mlnStatuTanim: string;
}
