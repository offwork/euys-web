import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtTeleskopiToleransi } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1249Facade } from '../+state/kt-1249.facade';

@Component({
  selector: 'euys-kt1249',
  templateUrl: './kt-1249.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1249Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtTeleskopiToleransi;
  _selectedRow = new BehaviorSubject<KtAtTeleskopiToleransi>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtTeleskopiToleransi;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'teleskopiToleransiKodu' },
      'Max. Teleskopi Toleransı(mm)',
      { title: 'Özel Talimat', rowspan: 1 },
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('teleskopiToleransiKodu'),
    new SpecsTableCol('maxTeleskopiToleransi'),
    new SpecsTableCol('ozelTalimat').template((ozelTalimat) => (ozelTalimat === 1 ? 'Evet' : 'Hayır')),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Max. Teleskopi Toleransı(mm):', controlName: 'maxTeleskopiToleransi', required: true },
  ];

  constructor(public facade: Kt1249Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
    this.data$.pipe(takeUntil(this._endSubscription)).subscribe(() => this.goBack());
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  reload() {
    this.facade.init();
  }

  goBack() {
    this.isFormVisible.next(false);
    this.selectedRow = null;
  }

  onAddClick() {
    this.isFormVisible.next(true);
    this.selectedRow = null;
  }

  onUpdateClick(row: KtAtTeleskopiToleransi) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtTeleskopiToleransi = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
    };

    this.facade.save(spesifikasyon);
  }
}
