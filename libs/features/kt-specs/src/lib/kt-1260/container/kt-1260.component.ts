import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  IslemTipi,
  KtAtTemperMerdaneTipi,
  KtOiTanimYuzeyDurum,
} from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Kt1260Facade } from '../+state/kt-1260.facade';

@Component({
  selector: 'euys-kt1260',
  templateUrl: './kt-1260.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1260Component implements OnInit, OnDestroy {
  isFormVisible$ = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtTemperMerdaneTipi;
  _selectedRow = new BehaviorSubject<KtAtTemperMerdaneTipi>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  tanimYuzeyDurumulari$ = this.facade.tanimYuzeyDurumulari$;
  tanimYuzeyDurumulari: KtOiTanimYuzeyDurum[] = [];
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtTemperMerdaneTipi;
  _endSubscription$ = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'temperMerdaneTipiKodu' },
      'Yüzey Durumu',
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('temperMerdaneTipiKodu'),
    new SpecsTableCol('comboYuzeyDurumAciklama').filterWith(
      this.tanimYuzeyDurumulari$.pipe(
        map(durumlar => durumlar.map(durum => durum.comboYuzeyDurumAciklama))
      )
    ),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 3,
      label: 'Yüzey Durumu:',
      controlName: 'yuzeyDurumKodu',
      type: 'array',
      options: this.tanimYuzeyDurumulari$,
      props: ['comboYuzeyDurumAciklama', 'yuzeyDurumKodu'],
    },
  ];
  constructor(public facade: Kt1260Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit(): void {
    this.facade.init();
    this.tanimYuzeyDurumulari$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(tanimYuzeyDurumulari => {
        this.tanimYuzeyDurumulari = tanimYuzeyDurumulari;
      });
    this.data$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(() => this.goBack());
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  reload() {
    this.facade.init();
  }

  goBack() {
    this.isFormVisible$.next(false);
    this.selectedRow = null;
  }

  goBackUpdateSuccess(row: KtAtTemperMerdaneTipi) {
    this._selectedRow.next(row);
  }

  onAddClick() {
    this.isFormVisible$.next(true);
    this.selectedRow = null;
  }

  onUpdateClick(row: KtAtTemperMerdaneTipi) {
    this._selectedRow.next(row);
    this.isFormVisible$.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val: KtAtTemperMerdaneTipi) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const tanimYuzeyDurum = this.tanimYuzeyDurumulari.find(
      durum => durum.yuzeyDurumKodu === Number(val.yuzeyDurumKodu)
    );
    const spesifikasyon: KtAtTemperMerdaneTipi = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '100396',
      islemYapanKisi: '100396',
      olusturanKisi: '100396',
      comboYuzeyDurumAciklama: tanimYuzeyDurum?.comboYuzeyDurumAciklama,
    };
    this.facade.save(spesifikasyon);
  }
}
