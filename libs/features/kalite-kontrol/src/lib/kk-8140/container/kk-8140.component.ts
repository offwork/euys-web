import { Component, OnDestroy, OnInit } from '@angular/core';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { Kk8140Facade } from '../+state/kk-8140.facade';

@Component({
  selector: 'euys-kk8140',
  templateUrl: './kk-8140.component.html',
})
export class Kk8140Component implements OnInit {
  yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  yuzeyKusurKaydiListLoaded$ = this.facade.yuzeyKusurKaydiListLoaded$;
  aktifKusurList$ = this.facade.butunAktifKusurList$;
  aktifKusurListLoaded$ = this.facade.butunAktifKusurListLoaded$;
  defaultYuzeyKusurKodu$ = this.facade.defaultYuzeyKusurKodu$;
  dispoze$ = this.facade.dispoze$;
  minDerece$ = this.facade.minDerece$;

  constructor(public facade: Kk8140Facade) {}

  onYuzeyKusurUpdate(value: KkUretimYuzeyKusuru[]) {
    this.facade.updateYuzeyKusurDegerleriState(value);
  }

  ngOnInit() {
    this.facade.init();
  }
}
