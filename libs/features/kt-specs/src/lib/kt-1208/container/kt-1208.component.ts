import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtAsitlemeTank } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { toggledList } from '@euys/shared/utility';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1208Facade } from '../+state/kt-1208.facade';

@Component({
  selector: 'euys-kt1208',
  templateUrl: './kt-1208.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1208Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtAsitlemeTank;
  _selectedRow = new BehaviorSubject<KtAtAsitlemeTank>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtAsitlemeTank;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('asitlemeTankKodu'),
    new SpecsTableCol('tank1HdfHclKonsantrasyon'),
    new SpecsTableCol('tank1MinHclKonsantrasyon'),
    new SpecsTableCol('tank1MaxHclKonsantrasyon'),
    new SpecsTableCol('tank1MinBanyoSicakligi'),
    new SpecsTableCol('tank1MaxBanyoSicakligi'),
    new SpecsTableCol('tank2HdfHclKonsantrasyon'),
    new SpecsTableCol('tank2MinHclKonsantrasyon'),
    new SpecsTableCol('tank2MaxHclKonsantrasyon'),
    new SpecsTableCol('tank2MinBanyoSicakligi'),
    new SpecsTableCol('tank2MaxBanyoSicakligi'),
    new SpecsTableCol('tank3HdfHclKonsantrasyon'),
    new SpecsTableCol('tank3MinHclKonsantrasyon'),
    new SpecsTableCol('tank3MaxHclKonsantrasyon'),
    new SpecsTableCol('tank3MinBanyoSicakligi'),
    new SpecsTableCol('tank3MaxBanyoSicakligi'),
    new SpecsTableCol('kenarKesmeDurumu').filterWith(['E', 'H']),
    new SpecsTableCol('durum'),
  ];

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'asitlemeTankKodu' },
      { title: '1. Tank HCL Konsantrasyon (%) ', colspan: 3 },
      { title: '1. Tank Banyo Sıcaklığı (C)', colspan: 2 },
      { title: '2. Tank HCL Konsantrasyon (%)', colspan: 3 },
      { title: '2. Tank Banyo Sıcaklığı (C)', colspan: 2 },
      { title: '3. Tank HCL Konsantrasyon (%)', colspan: 3 },
      { title: '3. Tank Banyo Sıcaklığı (C)', colspan: 2 },
      { title: 'Kenar Kesme Durumu', rowspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    [
      'Hedef',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
      'Hedef',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
      'Hedef',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
    ],
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: '1. Tank Hedef HCL Konsantrasyon (%):',
      controlName: 'tank1HdfHclKonsantrasyon',
    },
    {
      id: 1,
      label: '1. Tank Min. HCL Konsantrasyon (%):',
      controlName: 'tank1MinHclKonsantrasyon',
    },
    {
      id: 2,
      label: '1. Tank Max. HCL Konsantrasyon (%):',
      controlName: 'tank1MaxHclKonsantrasyon',
    },
    {
      id: 3,
      label: '1. Tank Min. Banyo Sıcaklığı (C):',
      controlName: 'tank1MinBanyoSicakligi',
    },
    {
      id: 4,
      label: '1. Tank Max. Banyo Sıcaklığı (C):',
      controlName: 'tank1MaxBanyoSicakligi',
    },
    {
      id: 5,
      label: '2. Tank Hedef HCL Konsantrasyon (%):',
      controlName: 'tank2HdfHclKonsantrasyon',
    },
    {
      id: 6,
      label: '2. Tank Min. HCL Konsantrasyon (%):',
      controlName: 'tank2MinHclKonsantrasyon',
    },
    {
      id: 7,
      label: '2. Tank Max. HCL Konsantrasyon (%):',
      controlName: 'tank2MaxHclKonsantrasyon',
    },
    {
      id: 8,
      label: '2. Tank Min. Banyo Sıcaklığı (C):',
      controlName: 'tank2MinBanyoSicakligi',
    },
    {
      id: 9,
      label: '2. Tank Max. Banyo Sıcaklığı (C):',
      controlName: 'tank2MaxBanyoSicakligi',
    },
    {
      id: 10,
      label: '3. Tank Hedef HCL Konsantrasyon (%):',
      controlName: 'tank3HdfHclKonsantrasyon',
    },
    {
      id: 11,
      label: '3. Tank Min HCL Konsantrasyon (%):',
      controlName: 'tank3MinHclKonsantrasyon',
    },
    {
      id: 12,
      label: '3. Tank Max. HCL Konsantrasyon (%):',
      controlName: 'tank3MaxHclKonsantrasyon',
    },
    {
      id: 13,
      label: '3. Tank Min. Banyo Sıcaklığı (C):',
      controlName: 'tank3MinBanyoSicakligi',
    },
    {
      id: 14,
      label: '3. Tank Max. Banyo Sıcaklığı (C):',
      controlName: 'tank3MaxBanyoSicakligi',
    },
    {
      id: 15,
      type: 'array',
      label: 'Kenar Kesme Durumu:',
      controlName: 'kenarKesmeDurumu',
      options: toggledList({ E: 'E', H: 'H' }),
      props: ['value', 'label'],
    },
  ];

  constructor(public facade: Kt1208Facade) {
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

  onUpdateClick(row: KtAtAsitlemeTank) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtAsitlemeTank = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      durum: 'A',
      uretimOzellikTipi: '008',
      islemYapanKisi: '108993',
      olusturanKisi: '108993',
    };

    this.facade.save(spesifikasyon);
  }
}
