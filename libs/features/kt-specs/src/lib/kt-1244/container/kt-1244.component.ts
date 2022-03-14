import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtMarkalama } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { toggledList } from '@euys/shared/utility';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1244Facade } from '../+state/kt-1244.facade';

@Component({
  selector: 'euys-kt1244',
  templateUrl: './kt-1244.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1244Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtMarkalama;
  _selectedRow = new BehaviorSubject<KtAtMarkalama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtMarkalama;
  _endSubscription = new Subject<boolean>();
  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'markalamaKodu' },
      { title: 'Markalama Kodu', colspan: 1 },
      { title: 'Markalama Açıklama', colspan: 1 },
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('markalamaKodu'),
    new SpecsTableCol('markaKodu').template(markaKodu => markaKodu ==='H'?'Hayır':'Evet'),
    new SpecsTableCol('markalamaAciklama'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      type: 'array',
      label: 'Markalama Kodu:',
      controlName: 'markaKodu',
      options: of([
        { id: 'E', description: 'EVET' },
        { id: 'H', description: 'HAYIR' },
      ]),
      props: ['description', 'id'],
      required: true
    },
    { id: 1, label: 'Markalama Açıklama:', controlName: 'markalamaAciklama', type: 'string', required: true },
  ];

  constructor(public facade: Kt1244Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
    this.data$.pipe(takeUntil(this._endSubscription)).subscribe(() => this.goBack());

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

  onUpdateClick(row: KtAtMarkalama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtMarkalama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108994',
      islemYapanKisi: '108994',
      olusturanKisi: '108994',
    };

    this.facade.save(spesifikasyon);
  }
}
