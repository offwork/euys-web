import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtDemirAlasimVeGaFirini } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1223Facade } from '../+state/kt-1223.facade';
@Component({
  selector: 'euys-kt1223',
  templateUrl: './kt-1223.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1223Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtDemirAlasimVeGaFirini
  _selectedRow = new BehaviorSubject<KtAtDemirAlasimVeGaFirini>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtDemirAlasimVeGaFirini;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'demirAlasimGaFiriniKodu' },
      { title: 'Demir Alaşım(%)', colspan: 3 },
      { title: 'GA Fırında Tutma Sıcaklığı(C)', colspan: 3 },
      { title: 'GA Fırında Tutma Süresi(sn)', colspan: 3 },
      { title: 'Max. Tozlaşma Testi (mm)', rowspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Ortalama', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.', 'Hedef', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('demirAlasimGaFiriniKodu'),
    new SpecsTableCol('ortalamaDemirAlasim'),
    new SpecsTableCol('minDemirAlasim'),
    new SpecsTableCol('maxDemirAlasim'),
    new SpecsTableCol('hedefGaFirindaTutmaSicaklg'),
    new SpecsTableCol('minGaFirindaTutmaSicakligi'),
    new SpecsTableCol('maxGaFirindaTutmaSicakligi'),
    new SpecsTableCol('hedefGaFirindaTutmaSuresi'),
    new SpecsTableCol('minGaFirindaTutmaSuresi'),
    new SpecsTableCol('maxGaFirindaTutmaSuresi'),
    new SpecsTableCol('maxTozlasmaTesti'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    { id: 0, type: 'number', label: 'Ortalama Demir Alaşım (%):', controlName: 'ortalamaDemirAlasim', required: true },
    { id: 1, type: 'number', label: 'Min Demir Alaşım (%):', controlName: 'minDemirAlasim', required: true },
    { id: 2, type: 'number', label: 'Max Demir Alasim (%):', controlName: 'maxDemirAlasim', required: true },
    {
      id: 3,
      type: 'number',
      label: 'Hedef GA Fırında Tutma Sıcaklığı (C):',
      controlName: 'hedefGaFirindaTutmaSicaklg',
      required: true },
    { id: 4, type: 'number', label: 'Min. GA Fırında Tutma Sıcaklığı (C):', controlName: 'minGaFirindaTutmaSicakligi', required: true },
    { id: 5, type: 'number', label: 'Max. GA Fırında Tutma Sıcaklığı (C):', controlName: 'maxGaFirindaTutmaSicakligi', required: true },
    { id: 6, type: 'number', label: 'Hedef GA Fırında Tutma Süresi (sn):', controlName: 'hedefGaFirindaTutmaSuresi', required: true },
    { id: 7, type: 'number', label: 'Min. GA Fırında Tutma Süresi (sn):', controlName: 'minGaFirindaTutmaSuresi', required: true },
    { id: 8, type: 'number', label: 'Max. GA Fırında Tutma Süresi (sn):', controlName: 'maxGaFirindaTutmaSuresi', required: true },
    { id: 9, type: 'number', label: 'Max. Tozlaşma Testi (mm):', controlName: 'maxTozlasmaTesti', required: true },
  ];

  constructor(public facade: Kt1223Facade) {
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

  onUpdateClick(row: KtAtDemirAlasimVeGaFirini) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtDemirAlasimVeGaFirini = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
    };

    this.facade.save(spesifikasyon);
  }
}
