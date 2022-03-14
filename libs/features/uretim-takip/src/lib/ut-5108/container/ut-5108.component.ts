import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  UtIsletmeHaddeYagEmulsiyon,
  UtIsletmeHaddeYagEmulsiyonModel,
  UtVisible,
} from '@euys/api-interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ut5108Facade } from '../+state/ut-5108.facade';
import { defaultRow } from '../+state/ut-5108.reducer';

@Component({
  selector: 'euys-ut5108',
  templateUrl: './ut-5108.component.html',
})
export class Ut5108Component implements OnInit {
  Visible = UtVisible;
  visible$ = new BehaviorSubject<UtVisible>(UtVisible.GORUNTULEME);
  selectedRow!: UtIsletmeHaddeYagEmulsiyonModel;
  _selectedRow = new BehaviorSubject<UtIsletmeHaddeYagEmulsiyonModel>(null);
  selectedRow$ = this._selectedRow.asObservable();
  data$ = this.facade.data$;
  dataLog$ = this.facade.dataLog$;
  _endSubscription$ = new Subject<boolean>();
  vardiyaUretimleri$ = this.facade.vardiyaUretimleri$;
  vardiyaNoList$ = this.facade.vardiyaNoList$;
  utIsletmeHaddeYagEmulsiyonCode$ = this.facade.utIsletmeHaddeYagEmulsiyonCode$;
  form: FormGroup;
  data: UtIsletmeHaddeYagEmulsiyonModel[] = [];

  vardiyaTarihi: [];

  dateNow = new Date();
  dateOneAgoWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  lowestVardiyaTarihi = this.dateNow;
  highestVardiyaTarihi = this.dateOneAgoWeek;

  constructor(
    private facade: Ut5108Facade,
    private formBuilder: FormBuilder,
    private toast: HotToastService
  ) {
    this.createForm();
    this.utIsletmeHaddeYagEmulsiyonCode$
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
  log(row: UtIsletmeHaddeYagEmulsiyon) {
    this.facade.log(row);
    this.visible$.next(UtVisible.GORUNTULEME_LOG);
  }
  goBack() {
    this.visible$.next(UtVisible.GORUNTULEME);
    this.selectedRow = null;
    this.facade.init();
  }
  goToSave(row?: UtIsletmeHaddeYagEmulsiyonModel) {
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
    const utIsletmeHaddeYagEmulsiyon = {
      ...row,
      ...this.form.value,
    } as UtIsletmeHaddeYagEmulsiyonModel;
    if (!this.selectedRow) {
      utIsletmeHaddeYagEmulsiyon.kayitIslemTipiEnum = 0;
      utIsletmeHaddeYagEmulsiyon.vardiyaTarihi = moment(
        this.form.value.vardiyaTarihiDate
      ).format('YYYY-MM-DD');
    } else {
      utIsletmeHaddeYagEmulsiyon.kayitIslemTipiEnum = 1;
    }
    utIsletmeHaddeYagEmulsiyon.islemYapanKisi = '109171';
    console.log(utIsletmeHaddeYagEmulsiyon);
    this.facade.save(utIsletmeHaddeYagEmulsiyon);
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

      // s1
      s11YagKonstasyonYuzde: [],
      s11PhDegeri: [],
      s11Iletkenlik: [],
      s12YagKonsantasyonYuzde: [],
      s12PhDegeri: [],
      s12Iletkenlik: [],
      s1EklenenYagLt: [],
      s1EklenenSuM3: [],
      s1SeviyeKirli: [],
      s1SeviyeTemiz: [],

      // s3
      s31YagKonstasyonYuzde: [],
      s31PhDegeri: [],
      s31Iletkenlik: [],
      s32YagKonsantasyonYuzde: [],
      s32PhDegeri: [],
      s32Iletkenlik: [],
      s3EklenenYagLt: [],
      s3EklenenSuM3: [],
      s3SeviyeKirli: [],
      s3SeviyeTemiz: [],

      // t
      t1YagKonstasyonYuzde: [],
      t1PhDegeri: [],
      t1Iletkenlik: [],
      t2YagKonsantasyonYuzde: [],
      t2PhDegeri: [],
      t2Iletkenlik: [],
      teklenenYagLt: [],
      teklenenSuM3: [],
      tseviyeKirli: [],
      tseviyeTemiz: [],

      // dm su
      dmSuPhDegeri: [],
      dmSuIletkenlik: [],

      vardiyaNo: [],
    });
  }

  formatTime(time: string) {
    return moment(time, 'HH:mm:ss').format('HH:mm');
  }
}
