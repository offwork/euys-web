import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtKromKaplamaTfsDragout } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1240Facade } from '../+state/kt-1240.facade';

@Component({
  selector: 'euys-kt1240',
  templateUrl: './kt-1240.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1240Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtKromKaplamaTfsDragout;
  _selectedRow = new BehaviorSubject<KtAtKromKaplamaTfsDragout>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtKromKaplamaTfsDragout;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'kromKaplamaTfsDragOutKodu' },
      { title: 'I.Kaplama DRAG-OUT Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'I.Kaplama DRAG-OUT Sıcaklık (C):', colspan: 2 },
      { title: 'II.Kaplama DRAG-OUT Konsantrasyon (g/lt):', colspan: 2 },
      { title: 'II.Kaplama DRAG-OUT Sıcaklık (C):', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.', 'Min.', 'Max.', 'Min.', 'Max.', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('kromKaplamaTfsDragOutKodu'),
    new SpecsTableCol('minIKaplamaDragOutKonsant'),
    new SpecsTableCol('maxIKaplamaDragOutKonsant'),
    new SpecsTableCol('minIKaplamaDragOutSicaklk'),
    new SpecsTableCol('maxIKaplamaDragOutSicaklk'),
    new SpecsTableCol('minIiKaplamaDragOutKonsan'),
    new SpecsTableCol('maxIiKaplamaDragOutKonsan'),
    new SpecsTableCol('minIiKaplamaDragOutSicakl'),
    new SpecsTableCol('maxIiKaplamaDragOutSicakl'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Min. I.Kaplama DRAG-OUT Konsantrasyon (g/lt):', controlName: 'minIKaplamaDragOutKonsant', type: 'string',required: true },
    { id: 1, label: 'Max. I.Kaplama DRAG-OUT Konsantrasyon (g/lt):', controlName: 'maxIKaplamaDragOutKonsant', type: 'string',required: true },
    { id: 2, label: 'Min. I.Kaplama DRAG-OUT Sıcaklık (C):', controlName: 'minIKaplamaDragOutSicaklk',required: true },
    { id: 3, label: 'Max. I.Kaplama DRAG-OUT Sıcaklık (C):', controlName: 'maxIKaplamaDragOutSicaklk',required: true },
    { id: 4, label: 'Min. II.Kaplama DRAG-OUT Konsantrasyon (g/lt):', controlName: 'minIiKaplamaDragOutKonsan' , type: 'string',required: true},
    { id: 5, label: 'Max. II.Kaplama DRAG-OUT Konsantrasyon (g/lt):', controlName: 'maxIiKaplamaDragOutKonsan' , type: 'string',required: true},
    { id: 6, label: 'Min. II.Kaplama DRAG-OUT Sıcaklık (C):', controlName: 'minIiKaplamaDragOutSicakl',required: true },
    { id: 7, label: 'Max. II.Kaplama DRAG-OUT Sıcaklık (C):', controlName: 'maxIiKaplamaDragOutSicakl',required: true },
  ];

  constructor(public facade: Kt1240Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit(): void {
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

  onUpdateClick(row: KtAtKromKaplamaTfsDragout) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtKromKaplamaTfsDragout = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '994',
      islemYapanKisi: '108994',
      olusturanKisi: '108994',
    };

    this.facade.save(spesifikasyon);
  }
}
