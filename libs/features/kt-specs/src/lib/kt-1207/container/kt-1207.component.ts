import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtAmbalajPaket } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1207Facade } from '../+state/kt-1207.facade';

@Component({
  selector: 'euys-kt1207',
  templateUrl: './kt-1207.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1207Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtAmbalajPaket;
  _selectedRow = new BehaviorSubject<KtAtAmbalajPaket>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtAmbalajPaket;
  _endSubscription = new Subject<boolean>();
  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'ambalajPaketKodu' },
      'Ambalaj Paket Açıklama',
      'Kağıt Tipi',
      'Paket Tipi',
      'Yükleme Durumu',
      { title: 'Durum', rowspan: 1 },
    ],
  ];
  cols = [
    new SpecsTableCol('ambalajPaketKodu'),
    new SpecsTableCol('ambalajPaketAciklama'),
    new SpecsTableCol('kagitTipi'),
    new SpecsTableCol('paketTipi'),
    new SpecsTableCol('yukelemeDurumu'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      type: 'string',
      label: 'Ambalaj Paket Açıklama :',
      controlName: 'ambalajPaketAciklama',
      required: true,
    },
    { id: 1, type: 'string', label: 'Kağıt Tipi :', controlName: 'kagitTipi' },
    { id: 2, type: 'string', label: 'Paket Tipi :', controlName: 'paketTipi' },
    {
      id: 3,
      type: 'string',
      label: 'Yükleme Durumu :',
      controlName: 'yukelemeDurumu',
    },
  ];
  constructor(public facade: Kt1207Facade) {
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

  onUpdateClick(row: KtAtAmbalajPaket) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtAmbalajPaket = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
