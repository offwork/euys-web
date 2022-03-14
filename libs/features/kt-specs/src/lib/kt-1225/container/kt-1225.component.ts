import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtDualBazliKaliteSckHadde } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { toggledList } from '@euys/shared/utility';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1225Facade } from '../+state/kt-1225.facade';

@Component({
  selector: 'euys-kt1225',
  templateUrl: './kt-1225.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class Kt1225Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtDualBazliKaliteSckHadde
  _selectedRow = new BehaviorSubject<KtAtDualBazliKaliteSckHadde>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtDualBazliKaliteSckHadde;
  _endSubscription = new Subject<boolean>();


  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'dualFazliKaliteSckHadKodu' },
      { title: 'Bölünmüş Duşlu Masa' },
      { title: '1. Bölge Soğutma Hızı(c/s)'},
      { title: '2. Bölge Soğutma Hızı(c/s)'},
      { title: 'Ara Sıcaklık(C)', colspan: 3 },
      { title: 'Havada Soğutma Süresi(C)'},
      { title: 'Durum', rowspan: 1 },
    ],
    ['','','','Hedef', 'Min.', 'Max.',''],
  ];

  cols = [
    
    new SpecsTableCol('dualFazliKaliteSckHadKodu').filterWith(['E', 'H']),
    new SpecsTableCol('bolunmusDusluMasa'),
    new SpecsTableCol('bolge1SogutmaHizi'),
    new SpecsTableCol('bolge2SogutmaHizi'),
    new SpecsTableCol('hedefAraSicaklik'),
    new SpecsTableCol('minAraSicaklik'),
    new SpecsTableCol('maxAraSicaklik'),
    new SpecsTableCol('havadaSogutmaSuresi'),
    new SpecsTableCol('durum'),
    
  ];

  formControls: Array<DynamicFormControl> = [
 
    {
      id: 0,
      type: 'array',
      label: 'Bölünmüş Duşlu Masa :',
      controlName: 'bolunmusDusluMasa',
      options: toggledList({ E: 'E', H: 'H' }),
      props: ['value', 'label'],
      required: true 
    },
    { id: 1, type: 'number', label: '1. Bölge Soğutma Hızı(c/s) :', controlName: 'bolge1SogutmaHizi' , required: true },
    { id: 2, type: 'number', label: '2. Bölge Soğutma Hızı(c/s) :', controlName: 'bolge2SogutmaHizi', required: true },
    { id: 3, type: 'number', label: 'Hedef Ara Sıcaklık(C) :', controlName: 'hedefAraSicaklik', required: true },
    { id: 4, type: 'number', label: 'Min. Ara Sıcaklık(C) :', controlName: 'minAraSicaklik' , required: true },
    { id: 5, type: 'number', label: 'Max. Ara Sıcaklık(C) :', controlName: 'maxAraSicaklik', required: true },
    { id: 6, type: 'number', label: 'Havada Soğutma Süresi(s) :', controlName: 'havadaSogutmaSuresi', required: true },
  ];
   
  constructor(public facade: Kt1225Facade) {
      this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit(): void {
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

  onUpdateClick(row: KtAtDualBazliKaliteSckHadde) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAtDualBazliKaliteSckHadde = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
    };

    this.facade.save(spesifikasyon);
  }

}
