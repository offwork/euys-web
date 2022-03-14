import { ChangeDetectionStrategy,Component, OnInit,OnDestroy } from '@angular/core';
import { IslemTipi, KtAtEnineKalinlikVeIkiKenarFarklari } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1226Facade } from '../+state/kt-1226.facade';

@Component({
  selector: 'euys-kt1226',
  templateUrl: './kt-1226.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1226Component implements OnInit , OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtEnineKalinlikVeIkiKenarFarklari;
  _selectedRow = new BehaviorSubject<KtAtEnineKalinlikVeIkiKenarFarklari>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtEnineKalinlikVeIkiKenarFarklari;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', sort: 'enineKalIkiKenarFarkKodu' },
      { title: 'Hedef Crown Değeri (mm)' },
      { title: 'Min. Crown Değeri (mm)' },
      { title: 'Max. Crown Değeri (mm)' },
      { title: 'Max. İki Kenar Farkı (mm)' },
      { title: 'Açıklama' },
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('enineKalIkiKenarFarkKodu'),
    new SpecsTableCol('hedefCrownMm'),
    new SpecsTableCol('minCrownMm'),
    new SpecsTableCol('maxCrownMm'),
    new SpecsTableCol('maxIkiKenarFarkiMm'),
    new SpecsTableCol('aciklama'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'number', label: 'Hedef Crown Değeri (mm):', controlName: 'hedefCrownMm', required: true },
    { id: 1, type: 'number', label: 'Min. Crown Değeri (mm):', controlName: 'minCrownMm', required: true },
    { id: 2, type: 'number', label: 'Max. Crown Değeri (mm):', controlName: 'maxCrownMm', required: true },
    { id: 3, type: 'number', label: 'Max. İki Kenar Farkı (mm):', controlName: 'maxIkiKenarFarkiMm' },
    { id: 4, type: 'string', label: 'Açıklama:', controlName: 'aciklama' },
  ];

  constructor(public facade: Kt1226Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
    this.data$.pipe(takeUntil(this._endSubscription)).subscribe(() => this.goBack());
    //this.data$
      //.pipe(distinctUntilKeyChanged('length'), takeUntil(this._endSubscription))
      //.subscribe(() => this._selectedRow.next({ ...this.selectedRow }));
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

  onUpdateClick(row: KtAtEnineKalinlikVeIkiKenarFarklari) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtEnineKalinlikVeIkiKenarFarklari = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '199999',
      olusturanKisi: '199999',
    };

    this.facade.save(spesifikasyon);
  }
}
