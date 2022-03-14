import { Component, OnInit } from '@angular/core';
import { KkKusurGoruntuleme } from '@euys/api-interfaces';
import FileSaver from 'file-saver';
import { Observable } from 'rxjs';
import { Kk8102Facade } from '../+state/kk-8102.facade';
import { FilterObject } from '../+state/kk-8102.reducer';

@Component({
  selector: 'euys-kk8102',
  templateUrl: './kk-8102.component.html',
})
export class Kk8102Component implements OnInit {
  kusurListLoaded$ = this.facade.kusurListLoaded$;
  kusurGoruntulemeList$ = this.facade.kusurGoruntulemeList$;
  hoverKusurTanimBaslik$ = this.facade.hoverKusurTanimBaslik$;
  utHatList$ = this.facade.utHatList$;
  utHatListLoaded$ = this.facade.utHatListLoaded$;
  tabloBaslik$ = this.facade.tabloBaslik$;
  isLoading$ = this.facade.isLoading$;
  kusurSinifiFilter$ = this.facade.kusurSinifiFilter$;
  anaKusurKoduFilter$ = this.facade.anaKusurKoduFilter$;
  isFilterMod$ = this.facade.isFilterMod$;

  constructor(public facade: Kk8102Facade) {}

  ngOnInit(): void {
    this.facade.init();
  }

  kusurHattiIcerirMi(
    KkKusurGoruntuleme: KkKusurGoruntuleme,
    c: string
  ): boolean {
    return KkKusurGoruntuleme.kkKusurAktifHatList?.includes(c);
  }

  mouseEnter(kusurGoruntuleme: KkKusurGoruntuleme) {
    this.facade.hoverKusur(kusurGoruntuleme.kkKusur.kusurTanim);
  }

  mouseLeave(): void {
    this.facade.hoverKusur('');
  }

  filterSecici(text: string): Observable<FilterObject[]> {
    let result = new Observable<FilterObject[]>();
    switch (text) {
      case 'Kusur Sınıfı':
        result = this.facade.kusurSinifiFilter$;
        break;
      case 'Ana Kusur Kodu':
        result = this.facade.anaKusurKoduFilter$;
        break;
      case 'Ana Kusur Kodu Açıklama':
        result = this.facade.anaKusurKoduAciklamaFilter$;
        break;
      case 'Kusur Kodu':
        result = this.facade.kusurKoduFilter$;
        break;
      case 'Kusur Kodu Açıklaması':
        result = this.facade.kusurKoduAciklamaFilter$;
        break;
      case 'Statü':
        result = this.facade.statuFilter$;
        break;
      case 'Hurda':
        result = this.facade.hurdaFilter$;
        break;
      default:
        result = this.facade.kusurSinifiFilter$;
        break;
    }
    return result;
  }

  customFilterEventListener(values: string[], key: string) {
    this.facade.customFilterEventFirlatici(values, key);
  }

  filterTemizle() {
    this.facade.filterTemizleyici();
  }
}
