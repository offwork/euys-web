import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ImalatLotCriteria,
  ImalatLotNo,
  ImalatLotResponseModel,
  ImalatLotSearchType,
  UpStMlnTedarikTipiModel,
} from '@euys/api-interfaces';
import { ToastMessageService } from '@euys/shared/ui';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Up3231Facade } from '../+state/up-3231.facade';
import { ImalatLotFacade } from '../../shared/imalat-lot/+state/imalat-lot.facade';

@Component({
  selector: 'euys-up3231',
  templateUrl: './up-3231.component.html',
})
export class Up3231Component implements OnInit, OnDestroy {
  progress$ = this.facade.progress$;
  failedUpdateList$ = this.facade.failedUpdateList$;
  loading$ = this.imalatLotFacade.loading$;
  imalatLotList$ = this.imalatLotFacade.imalatLotList$;
  tedarikTipiList$ = this.imalatLotFacade.tedarikTipiList$;
  _endSubscription$ = new Subject<boolean>();

  form: FormGroup;
  selectedImalatLotList: ImalatLotResponseModel[] = [];
  listVisible = false;
  lastSearchValues: ImalatLotNo | ImalatLotCriteria;
  lastSearchType: ImalatLotSearchType;

  constructor(
    private formBuilder: FormBuilder,
    private imalatLotFacade: ImalatLotFacade,
    private facade: Up3231Facade,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit() {
    this.facade.init();
    this.imalatLotFacade.loadTedarikTipiList();

    this.facade.failedUpdateList$
      .pipe(
        filter(list => list && list.length === 0),
        takeUntil(this._endSubscription$)
      )
      .subscribe(() => {
        this.search(this.lastSearchValues, this.lastSearchType);
      });

    this.form = this.formBuilder.group({
      tedarikTipi: ['', Validators.required],
      yeniTedarikTipi: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  getTedarikTipiListFiltered(tedarikTipiList: UpStMlnTedarikTipiModel[]) {
    return tedarikTipiList.filter(
      ({ mlnTedarikTipi }) =>
        mlnTedarikTipi !== this.form.controls.tedarikTipi.value
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
      this.toastMessageService.warning('Tedarik Tiplerini Seçiniz.');
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
        yeniTedarikTipi: this.form.value.yeniTedarikTipi,
      }));

      this.facade.update(updateList);
    } else {
      this.toastMessageService.warning('Tedarik Tiplerini Seçiniz.');
    }
  }

  closeDialog() {
    this.facade.init();
  }
}
