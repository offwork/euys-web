import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtIcCapDisCapTolerans } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1235Facade } from '../+state/kt-1235.facade';

@Component({
  selector: 'euys-kt1235',
  templateUrl: './kt-1235.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1235Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtIcCapDisCapTolerans;
  _selectedRow = new BehaviorSubject<KtAtIcCapDisCapTolerans>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtIcCapDisCapTolerans;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'icCapDisCapToleransKodu' },
      { title: 'Hedef İç Çap (mm)' },
      { title: 'Min. İç Çap Toleransı (mm)' },
      { title: 'Max. İç Çap Toleransı (mm)' },
      { title: 'Min. Dış Çap (mm)' },
      { title: 'Max. Dış Çap (mm)' },
      { title: 'Durum' },
    ],
  ];

  cols = [
    new SpecsTableCol('icCapDisCapToleransKodu'),
    new SpecsTableCol('hedefIcCap'),
    new SpecsTableCol('minIcCapTolerans'),
    new SpecsTableCol('maxIcCapTolerans'),
    new SpecsTableCol('minDisCap'),
    new SpecsTableCol('maxDisCap'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef İç Çap (mm):',
      controlName: 'hedefIcCap',
      required: true,
    },
    {
      id: 1,
      label: 'Minimum İç Çap Toleransı (mm):',
      controlName: 'minIcCapTolerans',
      required: true,
      type: 'string',
    },
    {
      id: 2,
      label: 'Maksimum İç Çap Toleransı (mm):',
      controlName: 'maxIcCapTolerans',
      required: true,
      type: 'string',
    },
    {
      id: 3,
      label: 'Minimum Dış Çap (mm):',
      controlName: 'minDisCap',
      required: true,
    },
    {
      id: 4,
      label: 'Maksimum Çıkış Sıcaklığı (mm):',
      controlName: 'maxDisCap',
      required: true,
    },
  ];

  constructor(public facade: Kt1235Facade) {
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

  onUpdateClick(row: KtAtIcCapDisCapTolerans) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtIcCapDisCapTolerans = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
      islemYapanMenu: '108992',
    };

    this.facade.save(spesifikasyon);
  }
}
