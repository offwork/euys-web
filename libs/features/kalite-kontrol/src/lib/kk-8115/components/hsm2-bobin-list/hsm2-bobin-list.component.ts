import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EvetHayir, HSMBobinModel, YerliIhrac } from '@euys/api-interfaces';
import { Kk8115Facade } from '../../+state/kk-8115.facade';

@Component({
  selector: 'euys-hsm2-bobin-list',
  templateUrl: './hsm2-bobin-list.component.html',
})
export class Hsm2BobinListComponent implements OnInit {
  @Output()
  selectionChange = new EventEmitter<HSMBobinModel[]>();

  bobinList$ = this.facade.hsmBobinList$;
  bobinListLoaded$ = this.facade.hsmBobinListLoaded$;
  selected: HSMBobinModel[] = [];
  topluKayitOptions = [EvetHayir.EVET, EvetHayir.HAYIR];
  yerliIhracOptions = [YerliIhrac.YERLI, YerliIhrac.IHRAC];

  constructor(private facade: Kk8115Facade) {}

  ngOnInit(): void {
    console.log('init');
  }

  onSelectUnselect(): void {
    this.selectionChange.emit(this.selected);
  }
}
