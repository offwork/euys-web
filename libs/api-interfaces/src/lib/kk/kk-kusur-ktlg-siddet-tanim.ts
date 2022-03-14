import { ApiInterfaceBase } from '../_base/api-interface.base';
import { KusurSiddeti } from './enums';

export interface KkKusurKtlgSiddetTanim extends ApiInterfaceBase {
  id: string;
  idKusurHat: string;
  kusurSiddetNo: KusurSiddeti;
  kusurSiddetTanim: string;
}
