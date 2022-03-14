import { Urun } from "../shared/urun";
import { KtAtIiTenekeKalayErgitme } from "./kt-at-ii-teneke-kalay-ergitme";

export interface KtSpIiTenekeKalayErgitmeViewModel {
    ktSpIiTenekeKalayErgitmeList: KtSpIiTenekeKalayErgitme[];
    ktAtIiTenekeKalayErgitmeList: KtAtIiTenekeKalayErgitme[];
}

export interface KtSpIiTenekeKalayErgitme {
    id: string;
    uretimOzellikTipi: string;
    iiTenekeKalayErgitmeKodu: number;
    minSicaklik: number;
    maxSicaklik: number;
    iiTenekeKalayErgitmeText: string;
    durum: string;
    olusturanKisi: string;
    islemYapanKisi: string;
    islemYapanMenu: string;
    islemTipiNo: number;
    etag: string;
    kontrolAktifTaslak: number;
    spIiTenekeKalayErgitmKodu: number;
    minKalinlik: number;
    maxKalinlik: number;
    minGenislik: number;
    maxGenislik: number;
    codeAndText: string;
    celikKaliteleri: string[];
    ktOIUrunList: Urun[];
}
