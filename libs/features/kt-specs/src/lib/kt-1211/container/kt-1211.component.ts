import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  IslemTipi,
  KtAtNumune,
  KtStNumuneBaz,
  KtStNumuneYeri,
  KtStNumuneYonu,
} from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Kt1211Facade } from '../+state/kt-1211.facade';

@Component({
  selector: 'euys-kt1211',
  templateUrl: './kt-1211.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1211Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtNumune;
  _selectedRow = new BehaviorSubject<KtAtNumune>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  numuneBazlari$ = this.facade.numuneBazlari$;
  numuneYonleri$ = this.facade.numuneYonleri$;
  numuneYerleri$ = this.facade.numuneYerleri$;
  numuneBazlari: KtStNumuneBaz[] = [];
  numuneYerleri: KtStNumuneYeri[] = [];
  numuneYonleri: KtStNumuneYonu[] = [];
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtNumune;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'numuneKodu' },
      'Numune Yeri',
      'Numune Yönü',
      'Baz',
      'Adet',
      'Tonaj',
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('numuneKodu'),
    new SpecsTableCol('numuneYeri').filterWith(
      this.numuneYerleri$.pipe(map(yerler => yerler.map(yer => yer.numuneYeri)))
    ),
    new SpecsTableCol('numuneYonu').filterWith(
      this.numuneYonleri$.pipe(map(yonler => yonler.map(yon => yon.numuneYonu)))
    ),
    new SpecsTableCol('numuneBaz').filterWith(
      this.numuneBazlari$.pipe(map(bazlar => bazlar.map(baz => baz.numuneBaz)))
    ),
    new SpecsTableCol('adet'),
    new SpecsTableCol('tonaj'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Numune Yeri:',
      controlName: 'numuneYeriKodu',
      type: 'array',
      options: this.numuneYerleri$,
      props: ['numuneYeri', 'numuneYeriKodu'],
      required: true,
    },
    {
      id: 1,
      label: 'Numune Yönü:',
      controlName: 'numuneYonuKodu',
      type: 'array',
      options: this.numuneYonleri$,
      props: ['numuneYonu', 'numuneYonuKodu'],
      required: true,
    },
    {
      id: 2,
      label: 'Baz:',
      controlName: 'numuneBazKodu',
      type: 'array',
      options: this.numuneBazlari$,
      props: ['numuneBaz', 'numuneBazKodu'],
      required: true,
    },
    { id: 3, label: 'Adet:', controlName: 'adet', required: true },
    { id: 4, label: 'Tonaj:', controlName: 'tonaj' },
  ];

  constructor(public facade: Kt1211Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
    this.numuneBazlari$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(numuneBazlari => {
        this.numuneBazlari = numuneBazlari;
      });
    this.numuneYonleri$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(numuneYonleri => {
        this.numuneYonleri = numuneYonleri;
      });
    this.numuneYerleri$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(numuneYerleri => {
        this.numuneYerleri = numuneYerleri;
      });
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

  onUpdateClick(row: KtAtNumune) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val: KtAtNumune) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const numuneBaz = this.numuneBazlari.find(
      baz => baz.numuneBazKodu === Number(val.numuneBazKodu)
    );
    const numuneYer = this.numuneYerleri.find(
      yer => yer.numuneYeriKodu === Number(val.numuneYeriKodu)
    );
    const numuneYon = this.numuneYonleri.find(
      yon => yon.numuneYonuKodu === Number(val.numuneYonuKodu)
    );
    const spesifikasyon: KtAtNumune = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
      tonaj:
        numuneBaz.numuneBaz === 'B' || numuneBaz.numuneBaz === 'L'
          ? null
          : val.tonaj,
      numuneBaz: numuneBaz.numuneBaz,
      numuneYeri: numuneYer.numuneYeri,
      numuneYonu: numuneYon.numuneYonu,
    };

    this.facade.save(spesifikasyon);
  }
}
