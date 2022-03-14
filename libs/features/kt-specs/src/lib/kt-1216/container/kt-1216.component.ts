import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtCalHattiTavlama } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { FormGroup } from '@ngneat/reactive-forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1216Facade } from '../+state/kt-1216.facade';

@Component({
  selector: 'euys-kt1216',
  templateUrl: './kt-1216.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1216Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtCalHattiTavlama;
  _selectedRow = new BehaviorSubject<KtAtCalHattiTavlama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  form!: FormGroup<KtAtCalHattiTavlama>;
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtCalHattiTavlama;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('calHattiTavlamaKodu'),
    new SpecsTableCol('tavlamaKodu'),
    new SpecsTableCol('hedefRth'),
    new SpecsTableCol('minRth'),
    new SpecsTableCol('maxRth'),
    new SpecsTableCol('hedefRts'),
    new SpecsTableCol('minRts'),
    new SpecsTableCol('maxRts'),
    new SpecsTableCol('rtsSure'),
    new SpecsTableCol('hedefGjc'),
    new SpecsTableCol('minGjc'),
    new SpecsTableCol('maxGjc'),
    new SpecsTableCol('hedefRqs'),
    new SpecsTableCol('minRqs'),
    new SpecsTableCol('maxRqs'),
    new SpecsTableCol('hedefOa'),
    new SpecsTableCol('minOa'),
    new SpecsTableCol('maxOa'),
    new SpecsTableCol('oaSure'),
    new SpecsTableCol('hedefFcs'),
    new SpecsTableCol('durum'),
  ];
  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'calHattiTavlamaKodu' },
      { title: 'Tavlama Kodu', rowspan: 2 },
      { title: 'RTH Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'RTS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'RTS Bölümü Süresi (sn)', rowspan: 2 },
      { title: 'GJC Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'RQS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'OA Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'OA Bölümü Süresi (sn)', rowspan: 2 },
      { title: 'Hedef FCS Bölümü Sıcaklık (C)', rowspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    [
      'Hedef',
      'Min.',
      'Max.',
      'Hedef',
      'Min.',
      'Max.',
      'Hedef',
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

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Tavlama Kodu:',
      controlName: 'tavlamaKodu',
      required: true,
      type: 'string',
    },
    {
      id: 1,
      label: 'Hedef RTH Bölümü Sıcaklık (C):',
      controlName: 'hedefRth',
      required: true,
    },
    {
      id: 2,
      label: 'Min. RTH Bölümü Sıcaklık (C):',
      controlName: 'minRth',
      required: true,
    },
    {
      id: 3,
      label: 'Max. RTH Bölümü Sıcaklık (C):',
      controlName: 'maxRth',
      required: true,
    },
    {
      id: 4,
      label: 'Hedef RTS Bölümü Sıcaklık (C):',
      controlName: 'hedefRts',
      required: true,
    },
    {
      id: 5,
      label: 'Min. RTS Bölümü Sıcaklık (C):',
      controlName: 'minRts',
      required: true,
    },
    {
      id: 6,
      label: 'Max. RTS Bölümü Sıcaklık (C):',
      controlName: 'maxRts',
      required: true,
    },
    {
      id: 7,
      label: 'RTS Bölümü Süresi (sn):',
      controlName: 'rtsSure',
      required: true,
    },
    {
      id: 8,
      label: 'Hedef GJC Bölümü Sıcaklık (C):',
      controlName: 'hedefGjc',
      required: true,
    },
    {
      id: 9,
      label: 'Min. GJC Bölümü Sıcaklık (C):',
      controlName: 'minGjc',
      required: true,
    },
    {
      id: 10,
      label: 'Max. GJC Bölümü Sıcaklık (C):',
      controlName: 'maxGjc',
      required: true,
    },
    {
      id: 11,
      label: 'Hedef RQS Bölümü Sıcaklık (C):',
      controlName: 'hedefRqs',
      required: true,
    },
    {
      id: 12,
      label: 'Min. RQS Bölümü Sıcaklık (C):',
      controlName: 'minRqs',
      required: true,
    },
    {
      id: 13,
      label: 'Max. RQS Bölümü Sıcaklık (C):',
      controlName: 'maxRqs',
      required: true,
    },
    {
      id: 14,
      label: 'Hedef OA Bölümü Sıcaklık (C):',
      controlName: 'hedefOa',
      required: true,
    },
    {
      id: 15,
      label: 'Min. OA Bölümü Sıcaklık (C):',
      controlName: 'minOa',
      required: true,
    },
    {
      id: 16,
      label: 'Max. OA Bölümü Sıcaklık (C):',
      controlName: 'maxOa',
      required: true,
    },
    {
      id: 17,
      label: 'OA Bölümü Süresi(sn):',
      controlName: 'oaSure',
      required: true,
    },
    {
      id: 18,
      label: 'Hedef FCS Bölümü Sıcaklık (C):',
      controlName: 'hedefFcs',
      required: true,
    },
  ];

  constructor(public facade: Kt1216Facade) {
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

  onUpdateClick(row: KtAtCalHattiTavlama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }
  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtCalHattiTavlama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
      islemYapanMenu: 'test',
    };

    this.facade.save(spesifikasyon);
  }
}
