import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, PfdmGenislikAraligi } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pfdm3102Facade } from '../+state/pfdm-3102.facade';

@Component({
  selector: 'euys-pfdm3102',
  templateUrl: './pfdm-3102.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pfdm3102Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: PfdmGenislikAraligi;
  _selectedRow = new BehaviorSubject<PfdmGenislikAraligi>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: PfdmGenislikAraligi;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Minumum Genişlik', sort: 'minGenislik' },
      { title: 'Maximum Genişlik', sort: 'maxGenislik' },
    ],
  ];

  cols = [new SpecsTableCol('minGenislik'), new SpecsTableCol('maxGenislik')];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Minumum Genişlik',
      controlName: 'minGenislik',
      type: 'string',
      required: true,
    },
    {
      id: 1,
      label: 'Maximum Genişlik',
      controlName: 'maxGenislik',
      type: 'string',
      required: true,
    },
  ];

  constructor(
    public facade: Pfdm3102Facade,
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

  onUpdateClick(row: PfdmGenislikAraligi) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }
  onDeleteClick(row: PfdmGenislikAraligi) {
    this.confirmationService.confirm({
      message: 'Bu veriyi silmek istediğinize emin misiniz ?',
      accept: () => {
        this.facade.delete(row);
      },
    });
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: PfdmGenislikAraligi = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
