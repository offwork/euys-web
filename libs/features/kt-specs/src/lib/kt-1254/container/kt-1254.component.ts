import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtTincalHattiTemizleme } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1254Facade } from '../+state/kt-1254.facade';

@Component({
  selector: 'euys-kt1254',
  templateUrl: './kt-1254.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1254Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtTincalHattiTemizleme;
  _selectedRow = new BehaviorSubject<KtAtTincalHattiTemizleme>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtTincalHattiTemizleme;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'tincalHattiTemizlemeKodu' },
      { title: 'Alkali Temizleme Sıcaklık (C)', colspan: 3 },
      { title: 'Alkali Temizleme Konsantrasyon (g/lt)', colspan: 2 },
      { title: 'Elektrolitik Temizleme Sıcaklık (C)', colspan: 3 },
      { title: 'Elektrolitik Temizleme Konsantrasyon (g/lt)', colspan: 2 },
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
    new SpecsTableCol('tincalHattiTemizlemeKodu'),
    new SpecsTableCol('hedefAlkaliTemizlemeSicakli'),
    new SpecsTableCol('minAlkaliTemizlemeSicakligi'),
    new SpecsTableCol('maxAlkaliTemizlemeSicakligi'),
    new SpecsTableCol('minAlkaliTemizlemeKonsantra'),
    new SpecsTableCol('maxAlkaliTemizlemeKonsantra'),
    new SpecsTableCol('hdfElektrolitikTemizlSicakl'),
    new SpecsTableCol('minElektrolitikTemizlSicakl'),
    new SpecsTableCol('maxElektrolitikTemizlSicakl'),
    new SpecsTableCol('minElektrolitikTemizlKonsan'),
    new SpecsTableCol('maxElektrolitikTemizlKonsan'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Alkali Temizleme Sıcaklık (C):',
      controlName: 'hedefAlkaliTemizlemeSicakli',
      required: true,
    },
    {
      id: 1,
      label: 'Min. Alkali Temizleme Sıcaklık (C):',
      controlName: 'minAlkaliTemizlemeSicakligi',
      required: true,
    },
    {
      id: 2,
      label: 'Max. Alkali Temizleme Sıcaklık (C):',
      controlName: 'maxAlkaliTemizlemeSicakligi',
      required: true,
    },
    {
      id: 3,
      label: 'Min. Alkali Temizleme Konsantrasyon (g/lt):',
      controlName: 'minAlkaliTemizlemeKonsantra',
      required: true,
      type: 'string',
    },
    {
      id: 4,
      label: 'Max. Alkali Temizleme Konsantrasyon (g/lt):',
      controlName: 'maxAlkaliTemizlemeKonsantra',
      required: true,
      type: 'string',
    },
    {
      id: 5,
      label: 'Hedef Elektrolitik Temizleme Sıcaklığı (C):',
      controlName: 'hdfElektrolitikTemizlSicakl',
      required: true,
    },
    {
      id: 6,
      label: 'Min. Elektrolitik Temizleme Sıcaklığı (C):',
      controlName: 'minElektrolitikTemizlSicakl',
      required: true,
    },
    {
      id: 7,
      label: 'Max. Elektrolitik Temizleme Sıcaklığı (C):',
      controlName: 'maxElektrolitikTemizlSicakl',
      required: true,
    },
    {
      id: 8,
      label: 'Min. Elektrolitik Temizleme Konsantrasyon (g/lt):',
      controlName: 'minElektrolitikTemizlKonsan',
      required: true,
      type: 'string',
    },
    {
      id: 9,
      label: 'Max. Elektrolitik Temizleme Konsantrasyon (g/lt):',
      controlName: 'maxElektrolitikTemizlKonsan',
      required: true,
      type: 'string',
    },
  ];

  constructor(public facade: Kt1254Facade) {
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

  onUpdateClick(row: KtAtTincalHattiTemizleme) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtTincalHattiTemizleme = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
      islemYapanMenu: '108992',
    };

    this.facade.save(spesifikasyon);
  }
}
