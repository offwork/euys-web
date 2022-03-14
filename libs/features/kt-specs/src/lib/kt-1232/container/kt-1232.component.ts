import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtIiTenekeKalayKimyasal } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1232Facade } from '../+state/kt-1232.facade';

@Component({
  selector: 'euys-kt1232',
  templateUrl: './kt-1232.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1232Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtIiTenekeKalayKimyasal;
  _selectedRow = new BehaviorSubject<KtAtIiTenekeKalayKimyasal>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtIiTenekeKalayKimyasal;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('iiTenekeKalayKimyasalKodu'),
    new SpecsTableCol('minOnKimyasalIslemKonsantr'),
    new SpecsTableCol('maxOnKimyasalIslemKonsantr'),
    new SpecsTableCol('minKimyasalIslemKonsantrasy'),
    new SpecsTableCol('maxKimyasalIslemKonsantrasy'),
    new SpecsTableCol('minBanyoSicakligi'),
    new SpecsTableCol('maxBanyoSicakligi'),
    new SpecsTableCol('durum'),
  ];

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'iiTenekeKalayKimyasalKodu' },
      { title: 'Ön Kimyasal İşlem Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Kimyasal İşlem Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'Banyo Sıcaklığı (C):', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.', 'Min.', 'Max.', 'Min.', 'Max.'],
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Min.Ön Kimyasal İşlem Konsantrasyonu (g/lt):',
      controlName: 'minOnKimyasalIslemKonsantr',
      required: true,
      type: 'string',
    },
    {
      id: 1,
      label: 'Max.Ön Kimyasal İşlem Konsantrasyonu (g/lt):',
      controlName: 'maxOnKimyasalIslemKonsantr',
      required: true,
      type: 'string',
    },
    {
      id: 2,
      label: 'Min. Kimyasal İşlem Konsantrasyon (g/lt):',
      controlName: 'minKimyasalIslemKonsantrasy',
      required: true,
      type: 'string',
    },
    {
      id: 3,
      label: 'Max. Kimyasal İşlem Konsantrasyon (g/lt):',
      controlName: 'maxKimyasalIslemKonsantrasy',
      required: true,
      type: 'string',
    },
    {
      id: 4,
      label: 'Min. Banyo Sıcaklığı (C):',
      controlName: 'minBanyoSicakligi',
      required: true,
    },
    {
      id: 5,
      label: 'Max. Banyo Sıcaklığı (C):',
      controlName: 'maxBanyoSicakligi',
      required: true,
    },
  ];

  constructor(public facade: Kt1232Facade) {
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

  onUpdateClick(row: KtAtIiTenekeKalayKimyasal) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtIiTenekeKalayKimyasal = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108993',
      islemYapanKisi: '108993',
      olusturanKisi: '108993',
    };
    this.facade.save(spesifikasyon);
  }
}
