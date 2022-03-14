import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { YupTaslakAnaModel } from '@euys/api-interfaces';
import { YillikUretimPlaniFacade } from '../+state/yillik-uretim-plani.facade';

@Component({
  selector: 'euys-yillik-uretim-plani',
  templateUrl: './yillik-uretim-plani.component.html',
  styleUrls: ['./yillik-uretim-plani.component.scss'],
})
export class YillikUretimPlaniComponent implements OnInit {
  @Input() yupTaslak: YupTaslakAnaModel;
  @Input() showYearSelect = false;
  @Output() goBackClick = new EventEmitter();
  yearControl = new FormControl();

  loaded$ = this.facade.loaded$;
  ozet$ = this.facade.ozet$;
  urunBazindaList$ = this.facade.urunBazindaList$;
  kapasiteBazindaList$ = this.facade.kapasiteBazindaList$;
  rumuzBazindaList$ = this.facade.rumuzBazindaList$;
  uretimHedefleriList$ = this.facade.uretimHedefleriList$;
  planliDuruslar$ = this.facade.planliDuruslar$;
  planliDuruslarTesisAdlari$ = this.facade.planliDuruslarTesisAdlari$;

  constructor(private facade: YillikUretimPlaniFacade) {}

  ngOnInit() {
    this.yearControl.setValue(this.yupTaslak.yil);
    this.onYearChange();
  }

  onYearChange() {
    this.facade.load(
      this.yearControl.value,
      this.yupTaslak.id,
      this.yupTaslak.yupBazAnaBilgileriModel.id
    );
  }
}
