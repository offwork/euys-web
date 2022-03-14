import { Component, OnDestroy, OnInit } from '@angular/core';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { Kk8116Facade } from '../+state/kk-8116.facade';

@Component({
  selector: 'euys-kk8116',
  templateUrl: './kk-8116.component.html',
})
export class Kk8116Component implements OnInit {
  yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  yuzeyKusurKaydiListLoaded$ = this.facade.yuzeyKusurKaydiListLoaded$;
  aktifKusurList$ = this.facade.butunAktifKusurList$;
  aktifKusurListLoaded$ = this.facade.butunAktifKusurListLoaded$;
  defaultYuzeyKusurKodu$ = this.facade.defaultYuzeyKusurKodu$;
  dispoze$ = this.facade.dispoze$;
  minDerece$ = this.facade.minDerece$;

  constructor(public facade: Kk8116Facade) {}

  onYuzeyKusurUpdate(value: KkUretimYuzeyKusuru[]) {
    this.facade.updateYuzeyKusurDegerleriState(value);
  }

  ngOnInit() {
    this.facade.init();
  }
}
