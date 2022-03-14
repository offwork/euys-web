import { ApiInterfaceBase } from '../_base/api-interface.base';
import { YuzeyKusurYeri } from './enums';

export interface KkUretimYuzeyKusuru extends ApiInterfaceBase {
  id: string;
  idUretimKyd: string;
  yuzeyKusuruSiraNo: number;
  yuzeyKusuruKodu: string;
  yuzeyKusuruDerecesi: number;
  yuzeyKusuruYuzdesi: number;
  yuzeyKusuruYeri: YuzeyKusurYeri;
  yuzeyKusuruHatKodu: string;
  yuzeyKusuruBuHattaMi: string;
  yuzeyKusuruBaslNoktasi: number;
  yuzeyKusuruBitisNoktasi: number;
}
