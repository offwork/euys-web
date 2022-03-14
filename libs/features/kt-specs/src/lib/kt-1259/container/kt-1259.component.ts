import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtYansitmaTesti } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1259Facade } from '../+state/kt-1259.facade';

@Component({
  selector: 'euys-kt1259',
  templateUrl: './kt-1259.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1259Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtYansitmaTesti;
  _selectedRow = new BehaviorSubject<KtAtYansitmaTesti>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtYansitmaTesti;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'yansitmaTestiKodu' },
      { title: 'Hedef LRF' },
      { title: 'Min. LRF' },
      { title: 'Max. LRF' },
      { title: 'Durum', colspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('yansitmaTestiKodu'),
    new SpecsTableCol('hdfYansitmaTesti'),
    new SpecsTableCol('minYansitmaTesti'),
    new SpecsTableCol('maxYansitmaTesti'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef LRF:',
      controlName: 'hdfYansitmaTesti',
      required: true,
    },
    {
      id: 1,
      label: 'Min. LRF:',
      controlName: 'minYansitmaTesti',
      required: true,
    },
    {
      id: 1,
      label: 'Max. LRF:',
      controlName: 'maxYansitmaTesti',
      required: true,
    },
  ];
  constructor(public facade: Kt1259Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit(): void {
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
  onUpdateClick(row: KtAtYansitmaTesti) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtYansitmaTesti = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '100396',
      uretimOzellikTipi: '061',
      islemYapanKisi: '100396',
      olusturanKisi: '100396',
    };
    this.facade.save(spesifikasyon);
  }
}
