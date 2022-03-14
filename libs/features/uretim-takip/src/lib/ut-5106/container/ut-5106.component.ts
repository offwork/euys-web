import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  UtAsitlemeRejenerasyon,
  UtAsitlemeRejenerasyonModel,
  UtAsitlemeRejenerasyonViewModel,
  UtVisible,
} from '@euys/api-interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ut5106Facade } from '../+state/ut-5106.facade';
import { defaultRow } from '../+state/ut-5106.reducer';

@Component({
  selector: 'euys-ut5106',
  templateUrl: './ut-5106.component.html',
})
export class Ut5106Component implements OnInit, OnDestroy {
  Visible = UtVisible;
  visible$ = new BehaviorSubject<UtVisible>(UtVisible.GORUNTULEME);
  selectedRow!: UtAsitlemeRejenerasyonModel;
  _selectedRow = new BehaviorSubject<UtAsitlemeRejenerasyonModel>(null);
  selectedRow$ = this._selectedRow.asObservable();
  data$ = this.facade.data$;
  utAsitlemeRejenerasyonModelList$ =
    this.facade.utAsitlemeRejenerasyonModelList$;
  dataLog$ = this.facade.dataLog$;
  _endSubscription$ = new Subject<boolean>();
  vardiyaUretimleri$ = this.facade.vardiyaUretimleri$;
  vardiyaNoList$ = this.facade.vardiyaNoList$;
  utAsitlemeRejenerasyonCode$ = this.facade.utAsitlemeRejenerasyonCode$;
  form: FormGroup;
  utAsitlemeRejenerasyonModelList: UtAsitlemeRejenerasyonModel[] = [];

  vardiyaTarihi: [];

  dateNow = new Date();
  dateOneAgoWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  lowestVardiyaTarihi = this.dateNow;
  highestVardiyaTarihi = this.dateOneAgoWeek;

  constructor(
    private facade: Ut5106Facade,
    private formBuilder: FormBuilder,
    private toast: HotToastService
  ) {
    this.createForm();
    this.utAsitlemeRejenerasyonCode$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(val => {
        if (val.code === '1') {
          this.goToSave(val.data);
        } else {
          this.goBack();
        }
      });
  }

  ngOnInit(): void {
    this.facade.init();
  }
  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
  log(row: UtAsitlemeRejenerasyon) {
    this.facade.log(row);
    this.visible$.next(UtVisible.GORUNTULEME_LOG);
  }
  goBack() {
    this.visible$.next(UtVisible.GORUNTULEME);
    this.selectedRow = null;
    this.facade.init();
  }
  goToSave(row?: UtAsitlemeRejenerasyonModel) {
    if (row) {
      this.selectedRow = row;
      this.form.patchValue(row);
      this.form.controls.vardiyaTarihiDate.disable();
      this.form.controls.vardiyaNo.disable();
    } else {
      this.form.controls.vardiyaTarihiDate.enable();
      this.form.controls.vardiyaNo.enable();

      this.selectedRow = null;
      this.form.patchValue(defaultRow);
    }
    this.visible$.next(UtVisible.GUNCELLEME_KAYIT);
  }
  saveOrUpdate() {
    const row = this.selectedRow ? this.selectedRow : defaultRow;
    const utAsitlemeRejenerasyon = {
      ...row,
      ...this.form.value,
    } as UtAsitlemeRejenerasyonModel;
    if (!this.selectedRow) {
      utAsitlemeRejenerasyon.kayitIslemTipiEnum = 0;
      utAsitlemeRejenerasyon.vardiyaTarihi = moment(
        this.form.value.vardiyaTarihiDate
      ).format('YYYY-MM-DD');
    } else {
      utAsitlemeRejenerasyon.kayitIslemTipiEnum = 1;
    }
    utAsitlemeRejenerasyon.islemYapanKisi = '109171';
    console.log(utAsitlemeRejenerasyon);
    this.facade.save(utAsitlemeRejenerasyon);
  }

  createForm() {
    this.form = this.formBuilder.group({
      vardiyaTarihiDate: [new Date(), Validators.required],
      islemSaatiDate: [new Date()],
      gelenKirliAsit: [],
      rejenereEdilenAsit: [],
      gonderilenAsit: [],
      tuketilenKirliAsit: [],
      gelenSafAsit: [],
      vardiyaNo: [],
    });
  }

  formatTime(time: string) {
    return moment(time, 'HH:mm:ss').format('HH:mm');
  }
}
