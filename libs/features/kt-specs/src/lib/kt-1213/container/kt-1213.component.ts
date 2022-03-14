import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtBobinBalikKuyrugu } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { FilterMatchMode } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1213Facade } from '../+state/kt-1213.facade';

@Component({
  selector: 'euys-kt1213',
  templateUrl: './kt-1213.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1213Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtBobinBalikKuyrugu;
  _selectedRow = new BehaviorSubject<KtAtBobinBalikKuyrugu>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtBobinBalikKuyrugu;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'bobinBalikKuyruguKodu' },
      { title: 'Bobin Balik Kuyrugu Aciklama' },
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('bobinBalikKuyruguKodu').match(
      FilterMatchMode.STARTS_WITH
    ),
    new SpecsTableCol('bobinBalikKuyruguAciklama'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      type: 'string',
      label: 'Bobin Balık Kuyruğu Açıklama :',
      controlName: 'bobinBalikKuyruguAciklama',
      required: true,
    },
  ];

  constructor(public facade: Kt1213Facade) {
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

  onUpdateClick(row: KtAtBobinBalikKuyrugu) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtBobinBalikKuyrugu = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '188885',
      olusturanKisi: '188885',
    };

    this.facade.save(spesifikasyon);
  }
}
