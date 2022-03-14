import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtTcalSogutmaYaslandirma } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1252Facade } from '../+state/kt-1252.facade';

@Component({
  selector: 'euys-kt1252',
  templateUrl: './kt-1252.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1252Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtTcalSogutmaYaslandirma;
  _selectedRow = new BehaviorSubject<KtAtTcalSogutmaYaslandirma>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtTcalSogutmaYaslandirma;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'tcalSogutmaYaslandirmaKodu' },
      { title: 'RCS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'RCS Bölümü Soğutma Hızı (C/sn)', colspan: 2 },
      { title: 'OAS/CS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'OAS/CS Bölümü Soğutma Hızı (C/sn)', colspan: 2 },
      { title: 'OAS/CS Bölümü Süresi (sn)', colspan: 3 },
      { title: 'Hedef FCS Bölümü Sıcaklık (C)', colspan: 3 },
      { title: 'FCS Bölümü Soğutma Hızı (C/sn)', colspan: 2 },
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
      'Min.',
      'Max.',
      'Hedef',
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
    new SpecsTableCol('tcalSogutmaYaslandirmaKodu'),

    new SpecsTableCol('hedefRcsSicaklik'),
    new SpecsTableCol('minRcsSicaklik'),
    new SpecsTableCol('maxRcsSicaklik'),
    new SpecsTableCol('minRcsSogutmaHizi'),
    new SpecsTableCol('maxRcsSogutmaHizi'),
    new SpecsTableCol('hedefOasCsSicaklik'),
    new SpecsTableCol('minOasCsSicaklik'),
    new SpecsTableCol('maxOasCsSicaklik'),
    new SpecsTableCol('minOasCsSogutmaHizi'),
    new SpecsTableCol('maxOasCsSogutmaHizi'),
    new SpecsTableCol('hedefOasCsSure'),
    new SpecsTableCol('minOasCsSure'),
    new SpecsTableCol('maxOasCsSure'),
    new SpecsTableCol('hedefFcsSicaklik'),
    new SpecsTableCol('minFcsSicaklik'),
    new SpecsTableCol('maxFcsSicaklik'),
    new SpecsTableCol('minFcsSogutmaHizi'),
    new SpecsTableCol('maxFcsSogutmaHizi'),
    new SpecsTableCol('durum'),
  ];
  // check for the error
  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef RCS Bölümü Sıcaklık (C):',
      controlName: 'hedefRcsSicaklik',
      required: true,
    },
    {
      id: 1,
      label: 'Min. RCS Bölümü Sıcaklık (C):',
      controlName: 'minRcsSicaklik',
      required: true,
    },
    {
      id: 2,
      label: 'Max. RCS Bölümü Sıcaklık (C):',
      controlName: 'maxRcsSicaklik',
      required: true,
    },
    {
      id: 3,
      label: 'Min. RCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'minRcsSogutmaHizi',
      required: true,
      type: 'string',
    },
    {
      id: 4,
      label: 'Max. RCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'maxRcsSogutmaHizi',
      required: true,
      type: 'string',
    },
    {
      id: 5,
      label: 'Hedef OAS/CS Bölümü Sıcaklık (C):',
      controlName: 'hedefOasCsSicaklik',
      required: true,
    },
    {
      id: 6,
      label: 'Min. OAS/CS Bölümü Sıcaklık (C):',
      controlName: 'minOasCsSicaklik',
      required: true,
    },
    {
      id: 7,
      label: 'Max. OAS/CS Bölümü Sıcaklık (C):',
      controlName: 'maxOasCsSicaklik',
      required: true,
    },
    {
      id: 8,
      label: 'Min. OAS/CS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'minOasCsSogutmaHizi',
      required: true,
      type: 'string',
    },
    {
      id: 9,
      label: 'Max. OAS/CS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'maxOasCsSogutmaHizi',
      required: true,
      type: 'string',
    },
    {
      id: 10,
      label: 'Hedef OAS/CS Bölümü Süresi (sn):',
      controlName: 'hedefOasCsSure',
      required: true,
    },
    {
      id: 11,
      label: 'Min. OAS/CS Bölümü Süresi (sn):',
      controlName: 'minOasCsSure',
      required: true,
    },
    {
      id: 12,
      label: 'Max. OAS/CS Bölümü Süresi (sn):',
      controlName: 'maxOasCsSure',
      required: true,
    },
    {
      id: 13,
      label: 'Hedef FCS Bölümü Sıcaklık (C):',
      controlName: 'hedefFcsSicaklik',
      required: true,
    },
    {
      id: 14,
      label: 'Min. FCS Bölümü Sıcaklık (C):',
      controlName: 'minFcsSicaklik',
      required: true,
    },
    {
      id: 15,
      label: 'Max. FCS Bölümü Sıcaklık (C):',
      controlName: 'maxFcsSicaklik',
      required: true,
    },
    {
      id: 16,
      label: 'Min. FCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'minFcsSogutmaHizi',
      required: true,
      type: 'string',
    },
    {
      id: 17,
      label: 'Max. FCS Bölümü Soğutma Hızı (C/sn):',
      controlName: 'maxFcsSogutmaHizi',
      required: true,
      type: 'string',
    },
  ];

  constructor(public facade: Kt1252Facade) {
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

  onUpdateClick(row: KtAtTcalSogutmaYaslandirma) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtTcalSogutmaYaslandirma = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '109171',
      uretimOzellikTipi: '054',
      islemYapanKisi: '109171',
      olusturanKisi: '109171',
    };

    this.facade.save(spesifikasyon);
  }
}
