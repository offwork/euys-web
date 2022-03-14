import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtBobHazTempYuzdeUzama } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { FormGroup } from '@ngneat/reactive-forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilKeyChanged, takeUntil } from 'rxjs/operators';
import { Kt1215Facade } from '../+state/kt-1215.facade';

@Component({
  selector: 'euys-kt1215',
  templateUrl: './kt-1215.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1215Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtBobHazTempYuzdeUzama;
  _selectedRow = new BehaviorSubject<KtAtBobHazTempYuzdeUzama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  form!: FormGroup<KtAtBobHazTempYuzdeUzama>;
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtBobHazTempYuzdeUzama;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('bobHazTempYuzdeUzamaKodu'),
    new SpecsTableCol('hedefYuzdeUzama'),
    new SpecsTableCol('minYuzdeUzama'),
    new SpecsTableCol('maxYuzdeUzama'),
    new SpecsTableCol('durum'),
  ];

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'bobHazTempYuzdeUzamaKodu' },
      { title: 'Hedef Yüzde Uzama (%)' },
      { title: 'Min. Yüzde Uzama (%)' },
      { title: 'Max. Yüzde Uzama (%)' },
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Hedef Yüzde Uzama (%):', controlName: 'hedefYuzdeUzama', type: 'string', required: true },
    { id: 1, label: 'Min. Yüzde Uzama (%):', controlName: 'minYuzdeUzama', type: 'string', required: true },
    { id: 2, label: 'Maks. Yüzde Uzama (%):', controlName: 'maxYuzdeUzama', type: 'string', required: true },
  ];

  constructor(public facade: Kt1215Facade) {
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

  onUpdateClick(row: KtAtBobHazTempYuzdeUzama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtBobHazTempYuzdeUzama = {
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
