import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IslemTipi, KtAtLevhaHadIkmalSicaklik } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { toggledList } from '@euys/shared/utility';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1243Facade } from '../+state/kt-1243.facade';

@Component({
  selector: 'euys-kt1243',
  templateUrl: './kt-1243.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1243Component implements OnInit {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtLevhaHadIkmalSicaklik;
  _selectedRow = new BehaviorSubject<KtAtLevhaHadIkmalSicaklik>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtLevhaHadIkmalSicaklik;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'levhaHadIkmalSicaklikKodu' },
      { title: 'Çıkış Sıcaklığı', colspan: 3 },
      { title: 'Bekletme TCR Kalınlığı', colspan: 3 },
      { title: 'Bekletme TCR Sıcaklığı', colspan: 3 },
      { title: 'TCR', rowspan: 2 },
      { title: 'FIRIN', rowspan: 2 },
      { title: 'Durum', rowspan: 1 },
    ],
    ['Hedef', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.'],
  ];
  cols = [
    new SpecsTableCol('levhaHadIkmalSicaklikKodu'),
    new SpecsTableCol('hedefCikisSicakligi'),
    new SpecsTableCol('minCikisSicakligi'),
    new SpecsTableCol('maxCikisSicakligi'),

    new SpecsTableCol('hedefTcrKalinligi'),
    new SpecsTableCol('minTcrKalinligi'),
    new SpecsTableCol('maxTcrKalinligi'),

    new SpecsTableCol('hedefTcrBekletmeSicakligi'),
    new SpecsTableCol('minTcrBekletmeSicakligi'),
    new SpecsTableCol('maxTcrBekletmeSicakligi'),

    new SpecsTableCol('tcr'),
    new SpecsTableCol('firin').filterWith(['E', 'H']),
    new SpecsTableCol('durum'),
  ];
  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Çıkış Sıcaklığı (C):',
      controlName: 'hedefCikisSicakligi',
    },

    {
      id: 1,
      label: 'Min. Çıkış Sıcaklığı (C):',
      controlName: 'minCikisSicakligi',
    },
    {
      id: 2,
      label: 'Max. Çıkış Sıcaklığı (C):',
      controlName: 'maxCikisSicakligi',
    },

    {
      id: 3,
      label: 'Hedef TCR Bekletme Kalınlığı:',
      controlName: 'hedefTcrKalinligi',
    },
    {
      id: 4,
      label: 'Min. TCR Bekletme Kalınlığı:',
      controlName: 'minTcrKalinligi',
    },
    {
      id: 5,
      label: 'Max. TCR Bekletme Kalınlığı:',
      controlName: 'maxTcrKalinligi',
    },

    {
      id: 6,
      label: 'Hedef TCR Bekletme Sıcaklığı (C):',
      controlName: 'hedefTcrBekletmeSicakligi',
    },

    {
      id: 7,
      label: 'Min. TCR Bekletme Sıcaklığı (C):',
      controlName: 'minTcrBekletmeSicakligi',
    },
    {
      id: 8,
      label: 'Max. TCR Bekletme Sıcaklığı (C):',
      controlName: 'maxTcrBekletmeSicakligi',
    },

    {
      id: 9,
      type: 'array',
      label: 'FIRIN:',
      controlName: 'firin',
      options: toggledList({ E: 'E', H: 'H' }),
      props: ['value', 'label'],
    },
  ];

  constructor(public facade: Kt1243Facade) {}

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

  onUpdateClick(row: KtAtLevhaHadIkmalSicaklik) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtLevhaHadIkmalSicaklik = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      durum: 'A',

      uretimOzellikTipi: '001',
      islemYapanKisi: '108993',
      islemYapanMenu: '108993',
      olusturanKisi: '108993',
    };
    console.log('dsdsdsdsdsd');
    console.log(spesifikasyon);

    this.facade.save(spesifikasyon);
  }
}
