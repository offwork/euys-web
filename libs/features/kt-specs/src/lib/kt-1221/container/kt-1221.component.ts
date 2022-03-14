import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtCgl12Temizleme } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { FormGroup } from '@ngneat/reactive-forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1221Facade } from '../+state/kt-1221.facade';

@Component({
  selector: 'euys-kt1221',
  templateUrl: './kt-1221.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1221Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtCgl12Temizleme;
  _selectedRow = new BehaviorSubject<KtAtCgl12Temizleme>(null);
  selectedRow$ = this._selectedRow.asObservable();
  form!: FormGroup<KtAtCgl12Temizleme>;
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtCgl12Temizleme;
  _endSubscription = new Subject<boolean>();

  cols = [
    new SpecsTableCol('cgl12TemizlemeKodu'),
    new SpecsTableCol('hedefAlkaliTemizlemeSicaklg'),
    new SpecsTableCol('minAlkaliTemizlemeSicakligi'),
    new SpecsTableCol('maxAlkaliTemizlemeSicakligi'),
    new SpecsTableCol('minAlkaliTemizlemeKonsantrs'),
    new SpecsTableCol('maxAlkaliTemizlemeKonsantrs'),
    new SpecsTableCol('hdfElektrolitikTemizlSicakl'),
    new SpecsTableCol('minElektrolitikTemizlSicakl'),
    new SpecsTableCol('maxElektrolitikTemizlSicakl'),
    new SpecsTableCol('minElektrolitikTemizlKonsan'),
    new SpecsTableCol('maxElektrolitikTemizlKonsan'),
    new SpecsTableCol('durum'),
  ];

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'cgl12TemizlemeKodu' },
      { title: 'Alkali Temizleme Sıcaklık (C)', colspan: 3 },
      { title: 'Alkali Temizleme Konsantrasyonu (g/lt)', colspan: 2 },
      { title: 'Elektrolitik Temizleme Sıcaklığı (C)', colspan: 3 },
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

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Alkali Temizleme Sıcaklık (C):',
      controlName: 'hedefAlkaliTemizlemeSicaklg',
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
      label: 'Min. Alkali Temizleme Konsantrasyonu (g/lt):',
      controlName: 'minAlkaliTemizlemeKonsantrs',
      type: 'string',
      required: true,
    },
    {
      id: 4,
      label: 'Max. Alkali Temizleme Konsantrasyonu (g/lt):',
      controlName: 'maxAlkaliTemizlemeKonsantrs',
      type: 'string',
      required: true,
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
      label: 'Max Elektrolitik Temizleme Sıcaklığı (C):',
      controlName: 'maxElektrolitikTemizlSicakl',
      required: true,
    },
    {
      id: 8,
      label: 'Min. Elektrolitik Temizleme Konsantrasyon (g/lt):',
      controlName: 'minElektrolitikTemizlKonsan',
      type: 'string',
      required: true,
    },
    {
      id: 9,
      label: 'Max. Elektrolitik Temizleme Konsantrasyon (g/lt):',
      controlName: 'maxElektrolitikTemizlKonsan',
      type: 'string',
      required: true,
    },
  ];

  constructor(public facade: Kt1221Facade) {
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

  onUpdateClick(row: KtAtCgl12Temizleme) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtCgl12Temizleme = {
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
