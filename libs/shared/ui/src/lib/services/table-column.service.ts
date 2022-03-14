import { Injectable } from '@angular/core';
import { KtOIUrun } from '@euys/api-interfaces';

@Injectable()
export class TableColumnExpanderService {
  expandColumnArray(rowData: any, ktOIUrunList: KtOIUrun[]) {
    return rowData.urunKodlari.map((urun: string) => {
      return {
        urunKodu: urun,
        rumuz: ktOIUrunList.find(({ urunKodu }) => urunKodu === urun).rumuz,
      };
    });
  }
  expandColumnStringArray(urunKodlari: string[], ktOIUrunList: KtOIUrun[]) {
    return urunKodlari.map((urun: string) => {
      return { urun, ...this.urunKoduRumuzuMapper(urun, ktOIUrunList) };
    });
  }

  urunKoduRumuzuMapper(urun: string, ktOIUrunList: KtOIUrun[]): KtOIUrun {
    if (ktOIUrunList && ktOIUrunList.length > 0)
      return {
        urunKodu: urun,
        rumuz: ktOIUrunList.find(({ urunKodu }) => urunKodu === urun).rumuz,
      };
  }
}
