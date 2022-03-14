import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtTincalHattiTavlama } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1253Facade } from '../+state/kt-1253.facade';

@Component({
  selector: 'euys-kt1253',
  templateUrl: './kt-1253.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1253Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtTincalHattiTavlama;
  _selectedRow = new BehaviorSubject<KtAtTincalHattiTavlama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtTincalHattiTavlama;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'tincalHattiTavlamaKodu' },
      { title: 'Tincal Hattı Tavlama Kodu', rowspan: 2 },
      { title: 'HS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'HS Bölümü Isıtma Hızı (C/sn)', colspan: 2 },
      { title: 'SS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'SS Bölümü Süresi (sn)', colspan: 3 },
      { title: 'Durum', rowspan: 2, colspan: 1 },
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
    new SpecsTableCol('tincalHattiTavlamaKodu'),
    new SpecsTableCol('tincalTavlamaKodu'),
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
      label: 'Tincal Hattı Tavlama Kodu:',
      controlName: 'tincalTavlamaKodu',
      required: true,
      type: 'string',
    },
    {
      id: 1,
      label: 'Hedef HS Bölümü Sıcaklık (C):',
      controlName: 'hedefHsSicaklik',
      required: true,
    },
    {
      id: 2,
      label: 'Min. HS Bölümü Sıcaklık (C):',
      controlName: 'minHsSicaklik',
      required: true,
    },
    {
      id: 3,
      label: 'Max. HS Bölümü Sıcaklık (C):',
      controlName: 'maxHsSicaklik',
      required: true,
    },
    {
      id: 4,
      label: 'Min. HS Bölümü Isıtma Hızı (C/sn):',
      controlName: 'minHsIsitmaHizi',
      required: true,
      type: 'string',
    },
    {
      id: 5,
      label: 'Max. HS Bölümü Isıtma Hızı (C/sn):',
      controlName: 'maxHsIsitmaHizi',
      required: true,
      type: 'string',
    },
    {
      id: 6,
      label: 'Hedef SS Bölümü Sıcaklık (C):',
      controlName: 'hedefSsSicaklik',
      required: true,
    },
    {
      id: 7,
      label: 'Min. SS Bölümü Sıcaklık (C):',
      controlName: 'minSsSicaklik',
      required: true,
    },
    {
      id: 8,
      label: 'Max. SS Bölümü Sıcaklık (C):',
      controlName: 'maxSsSicaklik',
      required: true,
    },
    {
      id: 9,
      label: 'Hedef SS Bölümü Süresi (sn):',
      controlName: 'hedefSsSuresi',
      required: true,
    },
    {
      id: 10,
      label: 'Min. SS Bölümü Süresi (sn):',
      controlName: 'minSsSuresi',
      required: true,
    },
    {
      id: 11,
      label: 'Max. SS Bölümü Süresi (sn):',
      controlName: 'maxSsSuresi',
      required: true,
    },
  ];

  constructor(public facade: Kt1253Facade) {
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

  onUpdateClick(row: KtAtTincalHattiTavlama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtTincalHattiTavlama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '109171',
      uretimOzellikTipi: '055',
      islemYapanKisi: '109171',
      olusturanKisi: '109171',
    };

    this.facade.save(spesifikasyon);
  }
}
