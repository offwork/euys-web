import { Component, EventEmitter, Output } from '@angular/core';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { Subject } from 'rxjs';
import { Kk8139Facade } from '../../../../+state/kk-8139.facade';

@Component({
  selector: 'euys-kusur-fourth-step',
  templateUrl: './kusur-fourth-step.component.html',
  styleUrls: ['./kusur-fourth-step.component.scss'],
})
export class KusurFourthStepComponent {
  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();

  aktifKusurList$ = this.facade.butunAktifKusurList$;
  aktifKusurListLoaded$ = this.facade.butunAktifKusurListLoaded$;
  defaultYuzeyKusurKodu$ = this.facade.defaultYuzeyKusurKodu$;
  yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  yuzeyKusurKaydiListLoaded$ = this.facade.yuzeyKusurKaydiListLoaded$;

  dispoze$ = this.facade.dispoze$;
  minDerece$ = this.facade.minDerece$;

  _endSubscription = new Subject<boolean>();

  constructor(private facade: Kk8139Facade) {}

  goToThirdStep() {
    this.goToPage.emit(2);
  }

  goToFifthPage() {
    this.goToPage.emit(4);
  }

  onYuzeyKusurUpdate(value: KkUretimYuzeyKusuru[]) {
    this.facade.updateYuzeyKusurDegerleriState(value);
  }
}
