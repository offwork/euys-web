import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  EvetHayir,
  IslemTipi,
  KtAt1SckHadIkmalSicakl,
} from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1201Facade } from '../+state/kt-1201.facade';

@Component({
  selector: 'euys-kt1201',
  templateUrl: './kt-1201.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1201Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAt1SckHadIkmalSicakl;
  _selectedRow = new BehaviorSubject<KtAt1SckHadIkmalSicakl>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAt1SckHadIkmalSicakl;
  _endSubscription = new Subject<boolean>();

  evetHayir = EvetHayir;

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'sckHad1IkmalSicaklikKodu' },

      { title: 'Giriş Sıcaklığı', colspan: 3 },
      { title: 'Çıkış Sıcaklığı', colspan: 3 },
      { title: 'Bekletme TCR Kalınlığı', colspan: 3 },
      { title: 'Bekletme TCR Sıcaklığı', colspan: 3 },
      { title: 'Bekletme TCR Süresi', colspan: 3 },

      { title: 'TCR', rowspan: 2 },
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

  cols = [
    new SpecsTableCol('sckHad1IkmalSicaklikKodu'),

    new SpecsTableCol('hedefGirisSicakligi'),
    new SpecsTableCol('minGirisSicakligi'),
    new SpecsTableCol('maxGirisSicakligi'),

    new SpecsTableCol('hedefCikisSicakligi'),
    new SpecsTableCol('minCikisSicakligi'),
    new SpecsTableCol('maxCikisSicakligi'),

    new SpecsTableCol('hedefTcrBekletmeKalinligi'),
    new SpecsTableCol('minTcrBekletmeKalinligi'),
    new SpecsTableCol('maxTcrBekletmeKalinligi'),

    new SpecsTableCol('hedefTcrBekletmeSicakligi'),
    new SpecsTableCol('minTcrBekletmeSicakligi'),
    new SpecsTableCol('maxTcrBekletmeSicakligi'),

    new SpecsTableCol('hedefTcrBekletmeSuresi'),
    new SpecsTableCol('minTcrBekletmeSuresi'),
    new SpecsTableCol('maxTcrBekletmeSuresi'),

    new SpecsTableCol('tcrSign'),

    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Giriş Sıcaklığı (C):',
      controlName: 'hedefGirisSicakligi',
      required: true,
    },

    {
      id: 1,
      label: 'Min. Giriş Sıcaklığı (C):',
      controlName: 'minGirisSicakligi',
      required: true,
    },
    {
      id: 2,
      label: 'Max. Giriş Sıcaklığı (C):',
      controlName: 'maxGirisSicakligi',
      required: true,
    },

    {
      id: 3,
      label: 'Hedef Çıkış Sıcaklığı (C):',
      controlName: 'hedefCikisSicakligi',
      required: true,
    },

    {
      id: 4,
      label: 'Min. Çıkış Sıcaklığı (C):',
      controlName: 'minCikisSicakligi',
      required: true,
    },
    {
      id: 5,
      label: 'Max. Çıkış Sıcaklığı (C):',
      controlName: 'maxCikisSicakligi',
      required: true,
    },

    {
      id: 6,
      label: 'Hedef TCR Bekletme Kalınlığı:',
      controlName: 'hedefTcrBekletmeKalinligi',
    },
    {
      id: 7,
      label: 'Min. TCR Bekletme Kalınlığı:',
      controlName: 'minTcrBekletmeKalinligi',
    },
    {
      id: 8,
      label: 'Max. TCR Bekletme Kalınlığı:',
      controlName: 'maxTcrBekletmeKalinligi',
    },

    {
      id: 9,
      label: 'Hedef TCR Bekletme Sıcaklığı (C):',
      controlName: 'hedefTcrBekletmeSicakligi',
    },

    {
      id: 10,
      label: 'Min. TCR Bekletme Sıcaklığı (C):',
      controlName: 'minTcrBekletmeSicakligi',
    },
    {
      id: 11,
      label: 'Max. TCR Bekletme Sıcaklığı (C):',
      controlName: 'maxTcrBekletmeSicakligi',
    },

    {
      id: 12,
      label: 'Hedef TCR Bekletme Süresi (sn):',
      controlName: 'hedefTcrBekletmeSuresi',
    },

    {
      id: 13,
      label: 'Min. TCR Bekletme Süresi (sn):',
      controlName: 'minTcrBekletmeSuresi',
    },
    {
      id: 14,
      label: 'Max. TCR Bekletme Süresi (sn):',
      controlName: 'maxTcrBekletmeSuresi',
    },
  ];

  constructor(public facade: Kt1201Facade) {
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

  onUpdateClick(row: KtAt1SckHadIkmalSicakl) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAt1SckHadIkmalSicakl = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      uretimOzellikTipi: '001',
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
    };
    console.log('spec');
    console.log(spesifikasyon);
    this.facade.save(spesifikasyon);
  }
}
