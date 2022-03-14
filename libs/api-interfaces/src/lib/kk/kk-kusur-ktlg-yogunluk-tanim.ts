import { ApiInterfaceBase } from '../_base/api-interface.base';
import { KusurYogunlugu } from './enums';

export interface KkKusurKtlgYogunlukTanim extends ApiInterfaceBase {
  id: string;
  idKusurHat: string;
  kusurYogunlukNo: KusurYogunlugu;
  kusurYogunlukTanim: string;
}
