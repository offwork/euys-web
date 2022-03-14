import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtCgl12TempYuzdeUzama } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { FormGroup } from '@ngneat/reactive-forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilKeyChanged, takeUntil } from 'rxjs/operators';
import { Kt1222Facade } from '../+state/kt-1222.facade';

@Component({
  selector: 'euys-kt1222',
  templateUrl: './kt-1222.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1222Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtCgl12TempYuzdeUzama;
  _selectedRow = new BehaviorSubject<KtAtCgl12TempYuzdeUzama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  form!: FormGroup<KtAtCgl12TempYuzdeUzama>;
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtCgl12TempYuzdeUzama;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('cgl12TemprYuzdeUzamaKodu'),
    new SpecsTableCol('hedefYuzdeUzama'),
    new SpecsTableCol('minYuzdeUzama'),
    new SpecsTableCol('maxYuzdeUzama'),
    new SpecsTableCol('durum'),
  ];

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'cgl12TemprYuzdeUzamaKodu' },
      { title: 'Hedef Yüzde Uzama (%)' },
      { title: 'Min. Yüzde Uzama (%)' },
      { title: 'Max. Yüzde Uzama (%)' },
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Hedef Yüzde Uzama (%):', controlName: 'hedefYuzdeUzama', type : 'string', required: true },
    { id: 1, label: 'Min. Yüzde Uzama (%):', controlName: 'minYuzdeUzama', type : 'string', required: true },
    { id: 2, label: 'Max. Yüzde Uzama (%):', controlName: 'maxYuzdeUzama', type : 'string', required: true },
  ];

  constructor(public facade: Kt1222Facade) {
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

  onUpdateClick(row: KtAtCgl12TempYuzdeUzama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtCgl12TempYuzdeUzama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
      islemYapanMenu: 'test',
    };

    this.facade.save(spesifikasyon);
  }
}
