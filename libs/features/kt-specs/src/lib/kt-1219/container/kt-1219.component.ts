import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtCgl12Tavlama1 } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1219Facade } from '../+state/kt-1219.facade';

@Component({
  selector: 'euys-kt1219',
  templateUrl: './kt-1219.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1219Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtCgl12Tavlama1;
  _selectedRow = new BehaviorSubject<KtCgl12Tavlama1>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtCgl12Tavlama1;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'cgl12Tavlama1Kodu' },
      { title: 'CGL-1-2 Hattı Tavlama Kodu', rowspan: 2 },
      { title: 'HS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'HS Bölümü Isıtma Hızı (C/sn)', colspan: 2 },
      { title: 'SS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'SS Bölümü Süresi (sn)', colspan: 3 },
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
      'Hedef',
      'Min.',
      'Max.',
    ],
  ];

  cols = [
    new SpecsTableCol('cgl12Tavlama1Kodu'),
    new SpecsTableCol('cgl12TavlamaKodu'),
    new SpecsTableCol('hedefHsSicaklik'),
    new SpecsTableCol('minHsSicaklik'),
    new SpecsTableCol('maxHsSicaklik'),
    new SpecsTableCol('minHsIsitmaHizi'),
    new SpecsTableCol('maxHsIsitmaHizi'),
    new SpecsTableCol('hedefSsSicaklik'),
    new SpecsTableCol('minSsSicaklik'),
    new SpecsTableCol('maxSsSicaklik'),
    new SpecsTableCol('hedefSsSuresi'),
    new SpecsTableCol('minSsSuresi'),
    new SpecsTableCol('maxSsSuresi'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      type: 'string',
      label: 'CGL-1-2 Hattı Tavlama Kodu:',
      controlName: 'cgl12TavlamaKodu',
      required: true,
    },
    {
      id: 1,
      type: 'number',
      label: 'Hedef HS Bölümü Sıcaklık (C):',
      controlName: 'hedefHsSicaklik',
      required: true,
    },
    {
      id: 2,
      type: 'number',
      label: 'Min. HS Bölümü Sıcaklık (C):',
      controlName: 'minHsSicaklik',
      required: true,
    },
    {
      id: 3,
      type: 'number',
      label: 'Max. HS Bölümü Sıcaklık (C):',
      controlName: 'maxHsSicaklik',
      required: true,
    },
    {
      id: 4,
      type: 'string',
      label: 'Min. HS Bölümü Isıtma Hızı (C/sn):',
      controlName: 'minHsIsitmaHizi',
      required: true,
    },
    {
      id: 5,
      type: 'string',
      label: 'Max. HS Bölümü Isıtma Hızı (C/sn):',
      controlName: 'maxHsIsitmaHizi',
      required: true,
    },
    {
      id: 6,
      type: 'number',
      label: 'Hedef SS Bölümü Sıcaklık (C):',
      controlName: 'hedefSsSicaklik',
      required: true,
    },
    {
      id: 7,
      type: 'number',
      label: 'Min. SS Bölümü Sıcaklık (C):',
      controlName: 'minSsSicaklik',
      required: true,
    },
    {
      id: 8,
      type: 'number',
      label: 'Max. SS Bölümü Sıcaklık (C):',
      controlName: 'maxSsSicaklik',
      required: true,
    },
    {
      id: 9,
      type: 'number',
      label: 'Hedef SS Bölümü Süresi (sn):',
      controlName: 'hedefSsSuresi',
      required: true,
    },
    {
      id: 10,
      type: 'number',
      label: 'Min. SS Bölümü Süresi (sn):',
      controlName: 'minSsSuresi',
      required: true,
    },
    {
      id: 11,
      type: 'number',
      label: 'Max. SS Bölümü Süresi (sn):',
      controlName: 'maxSsSuresi',
      required: true,
    },
  ];

  constructor(public facade: Kt1219Facade) {
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

  onUpdateClick(row: KtCgl12Tavlama1) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtCgl12Tavlama1 = {
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
