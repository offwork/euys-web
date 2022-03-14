import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtTincalTempYuzdeUzama } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1255Facade } from '../+state/kt-1255.facade';

@Component({
  selector: 'euys-kt1255',
  templateUrl: './kt-1255.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1255Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtTincalTempYuzdeUzama;
  _selectedRow = new BehaviorSubject<KtAtTincalTempYuzdeUzama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtTincalTempYuzdeUzama;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'tincalTempYuzdeUzamaKodu' },
      { title: 'Hedef Yüzde Uzama (%)' },
      { title: 'Minimum Yüzde Uzama (%)' },
      { title: 'Maksimum Yüzde Uzama (%)' },
      { title: 'Min. Temper Sertlik' },
      { title: 'Max. Temper Sertlik' },
      { title: 'Durum' },
    ],
  ];

  cols = [
    new SpecsTableCol('tincalTempYuzdeUzamaKodu'),
    new SpecsTableCol('hedefYuzdeUzama'),
    new SpecsTableCol('minYuzdeUzama'),
    new SpecsTableCol('maxYuzdeUzama'),
    new SpecsTableCol('minTemperSertlik'),
    new SpecsTableCol('maxTemperSertlik'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Yüzde Uzama (%):',
      controlName: 'hedefYuzdeUzama',
      required: true,
      type: 'string',
    },
    {
      id: 1,
      label: 'Minimum Yüzde Uzama (%):',
      controlName: 'minYuzdeUzama',
      required: true,
      type: 'string',
    },
    {
      id: 2,
      label: 'Maksimum Yüzde Uzama (%):',
      controlName: 'maxYuzdeUzama',
      required: true,
      type: 'string',
    },
    { id: 3, label: 'Min. Temper Sertlik:', controlName: 'minTemperSertlik' },
    { id: 4, label: 'Max. Temper Sertlik:', controlName: 'maxTemperSertlik' },
  ];

  constructor(public facade: Kt1255Facade) {
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

  onUpdateClick(row: KtAtTincalTempYuzdeUzama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtTincalTempYuzdeUzama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
