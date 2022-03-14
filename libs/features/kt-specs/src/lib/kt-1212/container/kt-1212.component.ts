import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, KtAtBafHattiTavlama } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1212Facade } from '../+state/kt-1212.facade';

@Component({
  selector: 'euys-kt1212',
  templateUrl: './kt-1212.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1212Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtBafHattiTavlama;
  _selectedRow = new BehaviorSubject<KtAtBafHattiTavlama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtBafHattiTavlama;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'bafHattiTavlamaKodu' },
      { title: 'Baf Hattı Tavlama Kodu' },
      { title: 'Baf Hattı Açıklama' },
      { title: 'Durum' },
    ],
  ];
  cols = [
    new SpecsTableCol('bafHattiTavlamaKodu'),
    new SpecsTableCol('bafTavlamaKodu'),
    new SpecsTableCol('bafTavlamaAciklama'),
    new SpecsTableCol('durum'),
  ];
  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      type: 'string',
      label: 'Baf Hattı Tavlama Kodu :',
      controlName: 'bafTavlamaKodu',
      required: true,
    },
    {
      id: 1,
      type: 'string',
      label: 'Baf Hattı Açıklama :',
      controlName: 'bafTavlamaAciklama',
    },
  ];
  constructor(public facade: Kt1212Facade) {
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

  onUpdateClick(row: KtAtBafHattiTavlama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const spesifikasyon: KtAtBafHattiTavlama = {
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
