import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtIiTenekeKalayKaplama } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1233Facade } from '../+state/kt-1233.facade';

@Component({
  selector: 'euys-kt1233',
  templateUrl: './kt-1233.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1233Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtIiTenekeKalayKaplama;
  _selectedRow = new BehaviorSubject<KtAtIiTenekeKalayKaplama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtIiTenekeKalayKaplama;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('iiTenekeKalayKaplamaKodu'),
    new SpecsTableCol('minAsitMsaKonsantrasyon'),
    new SpecsTableCol('maxAsitMsaKonsantrasyon'),
    new SpecsTableCol('minKalayKonsantrasyon'),
    new SpecsTableCol('maxKalayKonsantrasyon'),
    new SpecsTableCol('minAddKatkiKonsantrasyon'),
    new SpecsTableCol('maxAddKatkiKonsantrasyon'),
    new SpecsTableCol('minAntioxidanKonsantrasyon'),
    new SpecsTableCol('maxAntioxidanKonsantrasyon'),
    new SpecsTableCol('minFlaksKonsantrasyon'),
    new SpecsTableCol('maxFlaksKonsantrasyon'),
    new SpecsTableCol('minBanyoSicakligi'),
    new SpecsTableCol('maxBanyoSicakligi'),
    new SpecsTableCol('minH2So4Konsantrasyon'),
    new SpecsTableCol('maxH2So4Konsantrasyon'),
    new SpecsTableCol('durum'),
  ];

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'iiTenekeKalayKaplamaKodu' },
      { title: 'Asit(MSA) Konsantrasyon (ml/lt):', colspan: 2 },
      { title: 'Kalay Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'ADD(Katkı) Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Antioxidan Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Flaks Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Banyo Sıcaklığı (C):', colspan: 2 },
      { title: 'H2SO4 Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    [
      'Min.',
      'Max.',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
      'Min.',
      'Max.',
    ],
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Min. Asit(MSA) Konsantrasyon (m/lt):',
      controlName: 'minAsitMsaKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 1,
      label: 'Max. Asit(MSA) Konsantrasyon (m/lt):',
      controlName: 'maxAsitMsaKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 2,
      label: 'Min. Kalay Konsantrasyon (m/lt):',
      controlName: 'minKalayKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 3,
      label: 'Max. Kalay Konsantrasyon (m/lt):',
      controlName: 'maxKalayKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 4,
      label: 'Min. ADD(Katkı) Konsantrasyon (m/lt):',
      controlName: 'minAddKatkiKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 5,
      label: 'Max.ADD(Katkı) Konsantrasyon (m/lt):',
      controlName: 'maxAddKatkiKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 6,
      label: 'Min. Antioxidan Konsantrasyon (m/lt):',
      controlName: 'minAntioxidanKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 7,
      label: 'Max. Antioxidan Konsantrasyon (m/lt):',
      controlName: 'maxAntioxidanKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 8,
      label: 'Min. Flaks Konsantrasyon (m/lt):',
      controlName: 'minFlaksKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 9,
      label: 'Max. Flaks Konsantrasyon (m/lt):',
      controlName: 'maxFlaksKonsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 10,
      label: 'Min. Banyo Sıcaklığı (C):',
      controlName: 'minBanyoSicakligi',
      required: true,
    },
    {
      id: 11,
      label: 'Max. Banyo Sıcaklığı (C):',
      controlName: 'maxBanyoSicakligi',
      required: true,
    },
    {
      id: 12,
      label: 'Min. H2SO4 Konsantrasyon (m/lt):',
      controlName: 'minH2So4Konsantrasyon',
      required: true,
      type: 'string',
    },
    {
      id: 13,
      label: 'Max. H2SO4 Konsantrasyon (m/lt):',
      controlName: 'maxH2So4Konsantrasyon',
      required: true,
      type: 'string',
    },
  ];

  constructor(public facade: Kt1233Facade) {
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

  onUpdateClick(row: KtAtIiTenekeKalayKaplama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtIiTenekeKalayKaplama = {
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
