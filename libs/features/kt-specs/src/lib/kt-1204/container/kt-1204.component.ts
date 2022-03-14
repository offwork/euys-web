import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { KtAt2SckHadSarilmaSicakl, IslemTipi } from '@euys/api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1204Facade } from '../+state/kt-1204.facade';

@Component({
  selector: 'euys-kt1204',
  templateUrl: './kt-1204.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1204Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAt2SckHadSarilmaSicakl;
  _selectedRow = new BehaviorSubject<KtAt2SckHadSarilmaSicakl>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAt2SckHadSarilmaSicakl;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'sckHad2SarilmaSicaklkKodu' },
      { title: '2. Sıcak Haddahane Sarılma Sıcaklığı (C)', colspan: 3 },
      { title: 'Özel Talimat', rowspan: 2 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Hedef', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('sckHad2SarilmaSicaklkKodu'),
    new SpecsTableCol('hdf2SicakHadSarilmaSicak'),
    new SpecsTableCol('min2SicakHadSarilmaSicak'),
    new SpecsTableCol('max2SicakHadSarilmaSicak'),
    new SpecsTableCol('ozelTalimat').template(ozelTalimat =>
      ozelTalimat === 1 ? 'Evet' : 'Hayır'
    ),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Hedef Giriş Sıcaklığı (C):',
      controlName: 'hdf2SicakHadSarilmaSicak',
      required: true,
    },
    {
      id: 1,
      label: 'Minimum Giriş Sıcaklığı (C):',
      controlName: 'min2SicakHadSarilmaSicak',
      required: true,
    },
    {
      id: 2,
      label: 'Maksimum Giriş Sıcaklığı (C):',
      controlName: 'max2SicakHadSarilmaSicak',
      required: true,
    },
  ];

  constructor(public facade: Kt1204Facade) {
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

  onUpdateClick(row: KtAt2SckHadSarilmaSicakl) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: KtAt2SckHadSarilmaSicakl = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108806',
      islemYapanKisi: '999999',
      olusturanKisi: '999999',
    };

    this.facade.save(spesifikasyon);
  }
}
