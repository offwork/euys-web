import { Hat } from '../shared/hat';
import { KkKusur } from './kk-kusur';
import { KkKusurAna } from './kk-kusur-ana';

export interface KusurKoduKayit {
  kkKusur: KkKusur;
  yeniAnaKusur?: KkKusurAna;
  kkKusurAktifHatList: Hat[];
}
