import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtSleeveKalinlik } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1248Facade } from '../+state/kt-1248.facade';

@Component({
  selector: 'euys-kt1248',
  templateUrl: './kt-1248.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1248Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtSleeveKalinlik;
  _selectedRow = new BehaviorSubject<KtAtSleeveKalinlik>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtSleeveKalinlik;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'sleeveKalinlikKodu' },
      { title: 'Sleeve Kalınlık(mm)', colspan: 3 },
      { title: 'Özel Talimat', rowspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Hedef', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('sleeveKalinlikKodu'),
    new SpecsTableCol('hedefSleeveKalinlik'),
    new SpecsTableCol('minSleeveKalinlik'),
    new SpecsTableCol('maxSleeveKalinlik'),
    new SpecsTableCol('ozelTalimat').template((ozelTalimat) => (ozelTalimat === 1 ? 'Evet' : 'Hayır')),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Hedef Sleeve Kalınlık(mm):', controlName: 'hedefSleeveKalinlik', required: true },
    { id: 1, label: 'Min. Sleeve Kalınlık(mm):', controlName: 'minSleeveKalinlik', required: true },
    { id: 2, label: 'Max. Sleeve Kalınlık(mm):', controlName: 'maxSleeveKalinlik', required: true },
  ];

  constructor(public facade: Kt1248Facade) {
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

  onUpdateClick(row: KtAtSleeveKalinlik) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtSleeveKalinlik = {
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
