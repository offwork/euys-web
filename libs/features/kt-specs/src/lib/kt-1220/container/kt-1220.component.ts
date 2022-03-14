import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtCgl12Tavlama2 } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1220Facade } from '../+state/kt-1220.facade';

@Component({
  selector: 'euys-kt1220',
  templateUrl: './kt-1220.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1220Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtCgl12Tavlama2;
  _selectedRow = new BehaviorSubject<KtCgl12Tavlama2>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtCgl12Tavlama2;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'cgl12Tavlama2Kodu' },
      { title: 'SCS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'SCS Bölümü Soğutma Hızı (C/sn)', colspan: 2 },
      { title: 'RCS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'RCS Bölümü Soğutma Hızı (C/sn)', colspan: 2 },
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
    ],
  ];

  cols = [
    new SpecsTableCol('cgl12Tavlama2Kodu'),
    new SpecsTableCol('hedefScsSicaklik'),
    new SpecsTableCol('minScsSicaklik'),
    new SpecsTableCol('maxScsSicaklik'),
    new SpecsTableCol('minScsHizi'),
    new SpecsTableCol('maxScsHizi'),
    new SpecsTableCol('hedefRcsSicaklik'),
    new SpecsTableCol('minRcsSicaklik'),
    new SpecsTableCol('maxRcsSicaklik'),
    new SpecsTableCol('minRcsHizi'),
    new SpecsTableCol('maxRcsHizi'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      type: 'number',
      label: 'Hedef SCS Bölümü Sıcaklık (C):',
      controlName: 'hedefScsSicaklik',
      required: true,
    },
    {
      id: 1,
      type: 'number',
      label: 'Min. SCS Bölümü Sıcaklık (C):',
      controlName: 'minScsSicaklik',
      required: true,
    },
    {
      id: 2,
      type: 'number',
      label: 'Max. SCS Bölümü Sıcaklık (C):',
      controlName: 'maxScsSicaklik',
      required: true,
    },
    {
      id: 3,
      type: 'string',
      label: 'Min. SCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'minScsHizi',
      required: true,
    },
    {
      id: 4,
      type: 'string',
      label: 'Max. SCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'maxScsHizi',
      required: true,
    },
    {
      id: 5,
      type: 'number',
      label: 'Hedef RCS Bölümü Sıcaklık (C):',
      controlName: 'hedefRcsSicaklik',
      required: true,
    },
    {
      id: 6,
      type: 'number',
      label: 'Min. RCS Bölümü Sıcaklık (C):',
      controlName: 'minRcsSicaklik',
      required: true,
    },
    {
      id: 7,
      type: 'number',
      label: 'Max. RCS Bölümü Sıcaklık (C):',
      controlName: 'maxRcsSicaklik',
      required: true,
    },
    {
      id: 8,
      type: 'string',
      label: 'Min. RCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'minRcsHizi',
      required: true,
    },
    {
      id: 9,
      type: 'string',
      label: 'Max. RCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'maxRcsHizi',
      required: true,
    },
  ];

  constructor(public facade: Kt1220Facade) {
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

  onUpdateClick(row: KtCgl12Tavlama2) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtCgl12Tavlama2 = {
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
