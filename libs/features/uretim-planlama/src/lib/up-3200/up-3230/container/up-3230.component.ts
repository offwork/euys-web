import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ImalatLotCriteria,
  ImalatLotNo,
  ImalatLotResponseModel,
  ImalatLotSearchType,
  UpStMlnStatuModel,
} from '@euys/api-interfaces';
import { ToastMessageService } from '@euys/shared/ui';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Up3230Facade } from '../+state/up-3230.facade';
import { ImalatLotFacade } from '../../shared/imalat-lot/+state/imalat-lot.facade';

@Component({
  selector: 'euys-up3230',
  templateUrl: './up-3230.component.html',
})
export class Up3230Component implements OnInit, OnDestroy {
  progress$ = this.facade.progress$;
  failedUpdateList$ = this.facade.failedUpdateList$;
  loading$ = this.imalatLotFacade.loading$;
  imalatLotList$ = this.imalatLotFacade.imalatLotList$;
  statuList$ = this.imalatLotFacade.statuList$;
  _endSubscription$ = new Subject<boolean>();

  form: FormGroup;
  selectedImalatLotList: ImalatLotResponseModel[] = [];
  listVisible = false;
  lastSearchValues: ImalatLotNo | ImalatLotCriteria;
  lastSearchType: ImalatLotSearchType;

  constructor(
    private formBuilder: FormBuilder,
    private imalatLotFacade: ImalatLotFacade,
    private facade: Up3230Facade,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit() {
    this.facade.init();
    this.imalatLotFacade.loadStatuList();

    this.facade.failedUpdateList$
      .pipe(
        filter(list => list && list.length === 0),
        takeUntil(this._endSubscription$)
      )
      .subscribe(() => {
        this.search(this.lastSearchValues, this.lastSearchType);
      });

    this.form = this.formBuilder.group({
      statu: ['', Validators.required],
      yeniLotStatu: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  getStatuListFiltered(statuList: UpStMlnStatuModel[]) {
    return statuList.filter(
      ({ mlnStatu }) => mlnStatu !== this.form.controls.statu.value
    );
  }

  search(
    searchValues: ImalatLotNo | ImalatLotCriteria,
    searchType: ImalatLotSearchType
  ) {
    if (this.form.valid) {
      this.lastSearchValues = searchValues;
      this.lastSearchType = searchType;

      this.imalatLotFacade.load({
        ...searchValues,
        ...this.form.value,
        sorguTipi: searchType,
      });

      this.selectedImalatLotList = [];
      this.listVisible = true;
    } else {
      this.toastMessageService.warning('Statüleri Seçiniz.');
    }
  }

  searchByImalatLotNo(imalatLotNo: ImalatLotNo) {
    this.search(imalatLotNo, ImalatLotSearchType.BY_IMALAT_LOT);
  }

  searchByImalatLotCriteria(imalatLotCriteria: ImalatLotCriteria) {
    this.search(imalatLotCriteria, ImalatLotSearchType.BY_CRITERIA);
  }

  save() {
    if (this.form.valid) {
      const updateList = this.selectedImalatLotList.map(imalatLot => ({
        ...imalatLot,
        yeniLotStatu: this.form.value.yeniLotStatu,
      }));

      this.facade.update(updateList);
    } else {
      this.toastMessageService.warning('Statüleri Seçiniz.');
    }
  }
  closeDialog() {
    this.facade.init();
  }
}
