import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtOzelAgirlik } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1246Facade } from '../+state/kt-1246.facade';

@Component({
  selector: 'euys-kt1246',
  templateUrl: './kt-1246.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1246Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtOzelAgirlik;
  _selectedRow = new BehaviorSubject<KtAtOzelAgirlik>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtOzelAgirlik;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'ozelAgirlikKodu' },
      { title: 'Hedef Özel Ağırlık(kg)' },
      { title: 'Min. Özel Ağırlık(kg)' },
      { title: 'Max. Özel Ağırlık(kg)' },
      { title: 'Durum' },
    ],
  ];

  cols = [
    new SpecsTableCol('ozelAgirlikKodu'),
    new SpecsTableCol('hedefOzelAgirlik'),
    new SpecsTableCol('minOzelAgirlik'),
    new SpecsTableCol('maxOzelAgirlik'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Özel Ağırlık(kg):',
      controlName: 'hedefOzelAgirlik',
      required: true,
    },
    {
      id: 1,
      label: 'Minimum Özel Ağırlık(kg):',
      controlName: 'minOzelAgirlik',
      required: true,
    },
    {
      id: 2,
      label: 'Maksimum Özel Ağırlık(kg):',
      controlName: 'maxOzelAgirlik',
      required: true,
    },
  ];

  constructor(public facade: Kt1246Facade) {
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

  onUpdateClick(row: KtAtOzelAgirlik) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtOzelAgirlik = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      uretimOzellikTipi: '045',
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
      islemYapanMenu: '108992',
    };

    this.facade.save(spesifikasyon);
  }
}
