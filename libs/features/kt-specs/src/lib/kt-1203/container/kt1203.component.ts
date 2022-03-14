import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAt2SckHadIkmalSicakl } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1203Facade } from '../+state/kt-1203.facade';

@Component({
  selector: 'euys-kt1203',
  templateUrl: './kt1203.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1203Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAt2SckHadIkmalSicakl;
  _selectedRow = new BehaviorSubject<KtAt2SckHadIkmalSicakl>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAt2SckHadIkmalSicakl;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'sckHad2IkmalSicaklikKodu' },
      { title: 'Giriş Sıcaklığı', colspan: 3 },
      { title: 'Çıkış Sıcaklığı', colspan: 3 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Hedef', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('sckHad2IkmalSicaklikKodu'),
    new SpecsTableCol('hedefGirisSicakligi'),
    new SpecsTableCol('minGirisSicakligi'),
    new SpecsTableCol('maxGirisSicakligi'),
    new SpecsTableCol('hedefCikisSicakligi'),
    new SpecsTableCol('minCikisSicakligi'),
    new SpecsTableCol('maxCikisSicakligi'),
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
      label: 'Maksimum Giriş Sıcaklığı (C):',
      controlName: 'maxGirisSicakligi',
      required: true,
    },
    {
      id: 2,
      label: 'Minimum Giriş Sıcaklığı (C):',
      controlName: 'minGirisSicakligi',
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
      label: 'Maksimum Çıkış Sıcaklığı (C):',
      controlName: 'maxCikisSicakligi',
      required: true,
    },
    {
      id: 5,
      label: 'Minimum Çıkış Sıcaklığı (C):',
      controlName: 'minCikisSicakligi',
      required: true,
    },
  ];

  constructor(public facade: Kt1203Facade) {
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

  onUpdateClick(row: KtAt2SckHadIkmalSicakl) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAt2SckHadIkmalSicakl = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      uretimOzellikTipi: '003',
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
    };

    this.facade.save(spesifikasyon);
  }
}
