import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, PfdmKalinlikCap } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pfdm3101Facade } from '../+state/pfdm-3101.facade';

@Component({
  selector: 'euys-pfdm-kalinlik-cap',
  templateUrl: './pfdm-3101.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pfdm3101Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: PfdmKalinlikCap;
  _selectedRow = new BehaviorSubject<PfdmKalinlikCap>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: PfdmKalinlikCap;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Minumum Kalınlık/Çap (mm)', sort: 'minKalinlikCap' },
      { title: 'Maximum Kalınlık/Çap (mm)', sort: 'maxKalinlikCap' },
    ],
  ];

  cols = [
    new SpecsTableCol('minKalinlikCap').decimalSize(3),
    new SpecsTableCol('maxKalinlikCap').decimalSize(3),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Minumum Kalınlık/Çap (mm)',
      controlName: 'minKalinlikCap',
      type: 'decimal',
      decimalSize: 3,
      required: true,
    },
    {
      id: 1,
      label: 'Maximum Kalınlık/Çap (mm)',
      controlName: 'maxKalinlikCap',
      type: 'decimal',
      decimalSize: 3,
      required: true,
    },
  ];

  constructor(
    public facade: Pfdm3101Facade,
    private confirmationService: ConfirmationService
  ) {
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

  onUpdateClick(row: PfdmKalinlikCap) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onDeleteClick(row: PfdmKalinlikCap) {
    this.confirmationService.confirm({
      message: 'Bu veriyi silmek istediğinize emin misiniz ?',
      accept: () => {
        this.facade.delete(row);
      },
    });
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: PfdmKalinlikCap = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
