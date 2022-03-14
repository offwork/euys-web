import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface AsitlemeProsesModel extends ApiInterfaceBase {
  id: string;
  hatKodu: number;
  tankNo: number;
  aktifPasif: string;
  olcumTarihi: Date;
  hclYuzde: number;
  fe2Yuzde: number;
  fe2GrLt: number;
  banyoSicakligi: number;
  asitlemeTankKodu: number;
  tankMinBanyoSicakligi: number;
  tankMaxBanyoSicakligi: number;
  tankHdfHclKonsantrasyon: number;
  tankMinHclKonsantrasyon: number;
  tankMaxHclKonsantrasyon: number;
}

export interface DurulamaProsesModel {
  id: string;
  hatKodu: number;
  tankNo: number;
  iletkenlik: number;
  tankMinBanyoSicakligi: number;
  tankMaxBanyoSicakligi: number;
  tankMaxIletkenlik: number;
  tanMaxKlorur: number;
  aktifPasif: string;
  olcumTarihi: Date;
}
export interface YaglamaProsesModel {
  yarimamul: string;
  yaglamaKodu: number;
  marka: string;
  yaglamaDurum: string;
  yaglamaYuzeyi: string;
  yaglamaTipi: string;
  hdfYaglamaMiktari: number;
}
