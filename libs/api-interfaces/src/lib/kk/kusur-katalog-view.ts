import { KkKusurKtlgHat } from './kk-kusur-ktlg-hat';
import { KkKusurKtlgKokNeden } from './kk-kusur-ktlg-kok-neden';
import { KkKusurKtlgYatkinKaliteler } from './kk-kusur-ktlg-yatkin-kaliteler';
import { KkKusurKtlgOnlem } from './kk-kusur-ktlg-onlemler';
import { KkKusurKtlgSiddetTanim } from './kk-kusur-ktlg-siddet-tanim';
import { KkKusurKtlgYogunlukTanim } from './kk-kusur-ktlg-yogunluk-tanim';
import { KkKusurKtlgMuhOprYorum } from './kk-kusur-ktlg-muh-opr-yorum';
export interface KusurKatalogView {
  kkKusurKtlgHat: KkKusurKtlgHat;
  kkKusurKtlgKokNedenList: KkKusurKtlgKokNeden[];
  kkKusurKtlgYatkinKalitelerList: KkKusurKtlgYatkinKaliteler[];
  kkKusurKtlgOnlemlerList: KkKusurKtlgOnlem[];
  kkKusurKtlgSiddetTanimList: KkKusurKtlgSiddetTanim[];
  kkKusurKtlgYogunlukTanimList: KkKusurKtlgYogunlukTanim[];
  kkKusurKtlgMuhOprYorumList: KkKusurKtlgMuhOprYorum[];
}
