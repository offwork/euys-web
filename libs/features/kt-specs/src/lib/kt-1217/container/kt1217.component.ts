import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtCalHattiYuzdeUzama } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { FormGroup } from '@ngneat/reactive-forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1217Facade } from '../+state/kt-1217.facade';
@Component({
  selector: 'euys-kt1217',
  templateUrl: './kt1217.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1217Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtCalHattiYuzdeUzama;
  _selectedRow = new BehaviorSubject<KtCalHattiYuzdeUzama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  form!: FormGroup<KtCalHattiYuzdeUzama>;
  loaded$ = this.facade.loaded$;
  data$ = this.facade.allKt1217$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtCalHattiYuzdeUzama;
  _endSubscription = new Subject<boolean>();
  
  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'calHatTempYuzdeUzamaKodu' },
      { title: 'Hedef Yüzde Uzama (%)' },
      { title: 'Min. Yüzde Uzama (%)' },
      { title: 'Max. Yüzde Uzama (%)' },
      { title: 'Durum' },
    ],
  ];

  cols = [
    new SpecsTableCol('calHatTempYuzdeUzamaKodu'),
    new SpecsTableCol('hedefYuzdeUzama'),
    new SpecsTableCol('minYuzdeUzama'),
    new SpecsTableCol('maxYuzdeUzama'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Hedef Yüzde Uzama (%)', controlName: 'hedefYuzdeUzama', type: 'string', required: true },
    { id: 1, label: 'Min. Yüzde Uzama (%)', controlName: 'minYuzdeUzama', type: 'string', required: true },
    { id: 2, label: 'Max. Yüzde Uzama (%)', controlName: 'maxYuzdeUzama', type: 'string', required: true },
  ];

  constructor(public facade: Kt1217Facade) {
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

  onUpdateClick(row: KtCalHattiYuzdeUzama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtCalHattiYuzdeUzama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
   };

    this.facade.saveOrUpdate(spesifikasyon);
  }
}
