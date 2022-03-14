import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IslemTipi, PfdmKaliteGrup } from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pfdm3104Facade } from '../+state/pfdm-3104.facade';

@Component({
  selector: 'euys-pfdm3104',
  templateUrl: './pfdm-3104.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pfdm3104Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: PfdmKaliteGrup;
  _selectedRow = new BehaviorSubject<PfdmKaliteGrup>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: PfdmKaliteGrup;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [{ title: 'Kalite Grup' }, { title: 'Kalite Grup Tanım' }],
  ];

  cols = [
    new SpecsTableCol('kaliteGrup'),
    new SpecsTableCol('kaliteGrupTanim'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Kalite Grubu',
      controlName: 'kaliteGrup',
      type: 'string',
    },
    {
      id: 1,
      label: 'Açıklama',
      controlName: 'kaliteGrupTanim',
      type: 'string',
    },
  ];

  constructor(
    public facade: Pfdm3104Facade,
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

  onUpdateClick(row: PfdmKaliteGrup) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.kaliteGrup);
  }
  onDeleteClick(row: PfdmKaliteGrup) {
    this.confirmationService.confirm({
      message: 'Bu veriyi silmek istediğinize emin misiniz ?',
      accept: () => {
        this.facade.delete(row);
      },
    });
  }

  onSubmit(val = {}) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;

    const spesifikasyon: PfdmKaliteGrup = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanKisi: '108885',
      olusturanKisi: '108885',
    };

    this.facade.save(spesifikasyon);
  }
}
