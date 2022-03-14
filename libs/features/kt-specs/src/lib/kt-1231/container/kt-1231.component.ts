import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtIiTenekeKalayErgitme } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { FormGroup } from '@ngneat/reactive-forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1231Facade } from '../+state/kt-1231.facade';

@Component({
  selector: 'euys-kt1231',
  templateUrl: './kt-1231.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1231Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtIiTenekeKalayErgitme;
  _selectedRow = new BehaviorSubject<KtAtIiTenekeKalayErgitme>(null);
  selectedRow$ = this._selectedRow.asObservable();
  form!: FormGroup<KtAtIiTenekeKalayErgitme>;
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtIiTenekeKalayErgitme;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'iiTenekeKalayErgitmeKodu' },
      { title: 'Sıcaklık (C)', colspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('iiTenekeKalayErgitmeKodu'),
    new SpecsTableCol('minSicaklik'),
    new SpecsTableCol('maxSicaklik'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Min. Sıcaklık (C):',
      controlName: 'minSicaklik',
      required: true,
    },
    {
      id: 1,
      label: 'Max. Sıcaklık (C):',
      controlName: 'maxSicaklik',
      required: true,
    },
  ];

  constructor(public facade: Kt1231Facade) {
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

  onUpdateClick(row: KtAtIiTenekeKalayErgitme) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtIiTenekeKalayErgitme = {
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
