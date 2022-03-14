import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, PfdmYuzeyKaplama } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pfdm3103Facade } from '../+state/pfdm-3103.facade';

@Component({
  selector: 'euys-pfdm3103',
  templateUrl: './pfdm-3103.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pfdm3103Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: PfdmYuzeyKaplama;
  _selectedRow = new BehaviorSubject<PfdmYuzeyKaplama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: PfdmYuzeyKaplama;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [{ title: 'Yuzey / Kaplama' }, { title: 'Açıklama' }],
  ];

  cols = [new SpecsTableCol('yuzeyKaplama'), new SpecsTableCol('aciklama')];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Yuzey / Kaplama',
      controlName: 'yuzeyKaplama',
      type: 'string',
    },
    {
      id: 1,
      label: 'Açıklama',
      controlName: 'aciklama',
      type: 'string',
    },
  ];

  constructor(
    public facade: Pfdm3103Facade,
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

  onUpdateClick(row: PfdmYuzeyKaplama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.etag);
  }
  onDeleteClick(row: PfdmYuzeyKaplama) {
    this.confirmationService.confirm({
      message: 'Bu veriyi silmek istediğinize emin misiniz ?',
      accept: () => {
        this.facade.delete(row);
      },
    });
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: PfdmYuzeyKaplama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108993',
      olusturanKisi: '108993',
    };

    this.facade.save(spesifikasyon);
  }
}
