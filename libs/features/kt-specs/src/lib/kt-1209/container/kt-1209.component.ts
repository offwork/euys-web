import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtAsitlemeTlv } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilKeyChanged, takeUntil } from 'rxjs/operators';
import { Kt1209Facade } from '../+state/kt-1209.facade';

@Component({
  selector: 'euys-kt1209',
  templateUrl: './kt-1209.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1209Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtAsitlemeTlv;
  _selectedRow = new BehaviorSubject<KtAtAsitlemeTlv>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtAsitlemeTlv;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('asitlemeTlvKodu'),
    new SpecsTableCol('hedefFlex1'),
    new SpecsTableCol('minFlex1'),
    new SpecsTableCol('maxFlex1'),
    new SpecsTableCol('hedefFlex2'),
    new SpecsTableCol('minFlex2'),
    new SpecsTableCol('maxFlex2'),
    new SpecsTableCol('hedefGergi'),
    new SpecsTableCol('minGergi'),
    new SpecsTableCol('maxGergi'),
    new SpecsTableCol('durum'),
  ];

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'asitlemeTlvKodu' },
      { title: 'FLEX 1 (mm) ', colspan: 3 },
      { title: 'FLEX 2 (mm)', colspan: 3 },
      { title: 'Gergi (kn/mm2)', colspan: 3 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Hedef', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.'],
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Hedef FLEX 1 (mm):', controlName: 'hedefFlex1' },
    { id: 1, label: 'Min. FLEX 1 (mm):', controlName: 'minFlex1' },
    { id: 2, label: 'Max. FLEX 1 (mm):', controlName: 'maxFlex1' },
    { id: 3, label: 'Hedef FLEX 2 (mm):', controlName: 'hedefFlex2' },
    { id: 4, label: 'Min. FLEX 2 (mm):', controlName: 'minFlex2' },
    { id: 5, label: 'Max. FLEX 2 (mm):', controlName: 'maxFlex2' },
    { id: 6, label: 'Hedef Gergi (kn/mm2):', controlName: 'hedefGergi' },
    { id: 7, label: 'Min. Gergi (kn/mm2):', controlName: 'minGergi' },
    { id: 8, label: 'Max. Gergi (kn/mm2):', controlName: 'maxGergi' },
  ];

  constructor(public facade: Kt1209Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
    this.data$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(() => this.goBack());
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

  onUpdateClick(row: KtAtAsitlemeTlv) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtAsitlemeTlv = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      durum: 'A',
      uretimOzellikTipi: '008',
      islemYapanKisi: '109993',
      olusturanKisi: '109993',
    };

    this.facade.save(spesifikasyon);
  }
}
