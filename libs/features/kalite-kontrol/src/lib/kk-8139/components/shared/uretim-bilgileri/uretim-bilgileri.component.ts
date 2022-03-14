import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QCKayitBilgileri, EvetHayir } from '@euys/api-interfaces';
import { Observable } from 'rxjs';
import { Kk8139Facade } from '../../../../kk-8139/+state/kk-8139.facade';

@Component({
  selector: 'euys-uretim-bilgileri',
  templateUrl: './uretim-bilgileri.component.html',
})
export class UretimBilgileriComponent implements OnChanges {
  @Input() disabled = false;
  @Input() qcKayitBilgileri: QCKayitBilgileri;
  @Input() qcKayitBilgileriLoaded$: Observable<boolean>;
  bobinAcmaKontrol = [EvetHayir.EVET, EvetHayir.HAYIR];
  numuneAl = [EvetHayir.EVET, EvetHayir.HAYIR];
  selectedBobinAcmaKontrol: EvetHayir;
  selectedNumuneAl: string;
  selectedYuzeyKusur: string;
  typedAciklama: string;
  yuzeyKusur = [EvetHayir.EVET, EvetHayir.HAYIR];

  constructor(private facade: Kk8139Facade) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('qcKayitBilgileri' in changes) {
      const curr = changes.qcKayitBilgileri.currentValue;
      this.selectedNumuneAl = curr?.numuneAlAlaniDisabled ? 'E' : 'H';
      this.selectedYuzeyKusur = curr?.yuzeyKusuruVarMiAlaniDisabled ? 'E' : 'H';
      this.selectedBobinAcmaKontrol = curr?.bobinAcmaKontrolu;
      this.typedAciklama = curr?.aciklama;
    }
  }

  onChangeNumuneAl(value: string): void {
    this.facade.setNumuneAl(value == 'H' ? false : true);
  }

  onChangeYuzeyKusur(value: string): void {
    this.facade.setYuzeyKusur(value == 'H' ? false : true);
  }

  onChangeBobinAcmaKontrol(value: string): void {
    this.facade.setBobinAcmaKontrol(value == 'H' ? false : true);
  }

  aciklamaChanged(): void {
    this.facade.setUretimBilgileriAciklama(this.typedAciklama);
  }
}
