import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtIiTenekeAsitleme } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1230Facade } from '../+state/kt-1230.facade';

@Component({
  selector: 'euys-kt1230',
  templateUrl: './kt-1230.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1230Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtIiTenekeAsitleme;
  _selectedRow = new BehaviorSubject<KtAtIiTenekeAsitleme>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtIiTenekeAsitleme;
  _endSubscription = new Subject<boolean>();
  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'iiTenekeAsitlemeKodu' },
      { title: 'Asit Konsantrasyon (g/lt)', colspan: 2 },
      { title: 'Demir Konsantrasyon (g/lt)', colspan: 2 },
      { title: 'Sıcaklık (C)', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.', 'Min.', 'Max.', 'Min.', 'Max.'],
  ];
  cols = [
    new SpecsTableCol('iiTenekeAsitlemeKodu'),
    new SpecsTableCol('minAsitKonsantrasyon'),
    new SpecsTableCol('maxAsitKonsantrasyon'),
    new SpecsTableCol('minDemirKonsantrasyon'),
    new SpecsTableCol('maxDemirKonsantrasyon'),
    new SpecsTableCol('minSicaklik'),
    new SpecsTableCol('maxSicaklik'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Min. Asit Konsantrasyon (g/lt) :',
      controlName: 'minAsitKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 1,
      label: 'Max. Asit Konsantrasyon (g/lt) :',
      controlName: 'maxAsitKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 2,
      label: 'Min. Demir Konsantrasyon (g/lt) ',
      controlName: 'minDemirKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 3,
      label: 'Max. Demir Konsantrasyon (g/lt) :',
      controlName: 'maxDemirKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 4,
      label: 'Min. Sıcaklık (C) :',
      controlName: 'minSicaklik',
      required: true,
    },
    {
      id: 5,
      label: 'Max. Sıcaklık (C) :',
      controlName: 'maxSicaklik',
      required: true,
    },
  ];

  constructor(public facade: Kt1230Facade) {
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

  onUpdateClick(row: KtAtIiTenekeAsitleme) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtIiTenekeAsitleme = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      islemYapanMenu: '108992',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
