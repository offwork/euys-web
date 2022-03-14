import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IslemTipi,
  UtTankAsitleme,
  UtTankAsitlemeLimit,
} from '@euys/api-interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Ut5103Facade } from '../+state/ut-5103.facade';

const defaultRow: UtTankAsitleme = {
  id: null,
  aktifPasif: 'A',
  etag: null,
  olcumTarihi: null,
  hatKodu: '501',
  tankNo: 1,
  olcumSaati: null,
  islemTipiNo: IslemTipi.KAYIT,
  islemYapanMenu: null,
  olusturanKisi: '108992',
  islemYapanKisi: '108992',
  islemTarihi: null,
  olusturmaTarihi: null,
  olcumTarihiFormat: null,
  vardiyaTarihi: new Date(),
  hclGrLt: null,
  hclYuzde: null,
  fe2GrLt: null,
  fe2Yuzde: null,
  banyoSicakligi: null,
  idTankAsitlemeEski: null,
  idTankAsitlemeLimit: null,
  vardiyaNo: '1',
  islemTarihiFormat: null,
  islemSaati: null,
  olcumTarihiDate: new Date(),
};
enum Visible {
  GORUNTULEME,
  GUNCELLEME_KAYIT,
  GORUNTULEME_LOG,
}
@Component({
  selector: 'euys-ut5103',
  templateUrl: './ut-5103.component.html',
  styleUrls: ['./ut-5103.component.scss'],
})
export class Ut5103Component implements OnInit {
  Visible = Visible;
  visible = new BehaviorSubject<Visible>(Visible.GORUNTULEME);
  selectedRow!: UtTankAsitleme;
  _selectedRow = new BehaviorSubject<UtTankAsitleme>(null);
  selectedRow$ = this._selectedRow.asObservable();
  utTankAsitlemeLimitList$ = this.facade.utTankAsitlemeLimitList$;
  data$ = this.facade.data$;
  dataLog$ = this.facade.dataLog$;
  _endSubscription = new Subject<boolean>();
  vardiyaUretimleri$ = this.facade.vardiyaUretimleri$;
  tankNoList$ = this.facade.tankNoList$;
  hatKodList$ = this.facade.hatKodList$;
  utTankAsitlemeCode$ = this.facade.utTankAsitlemeCode$;
  form: FormGroup;
  data: UtTankAsitleme[] = [];
  limit: UtTankAsitlemeLimit;

  olcumTarihi: [];

  dateNow = new Date();
  dateOneAgoWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  lowestOlcumTarihi = this.dateNow;
  highestOlcumTarihi = this.dateOneAgoWeek;

  constructor(
    private facade: Ut5103Facade,
    private formBuilder: FormBuilder,
    private toast: HotToastService
  ) {
    this.createForm();
    this.utTankAsitlemeCode$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => {
        if (val.code === '1') {
          this.goToSave(val.utTankAsitleme);
        } else {
          this.goBack();
        }
      });
  }

  ngOnInit(): void {
    this.facade.init();
    this.data$.pipe(takeUntil(this._endSubscription)).subscribe(data => {
      this.data = data;
      this.findMinMax(this.data);
    });
  }
  log(row: UtTankAsitleme) {
    this.facade.log(row);
    this.visible.next(Visible.GORUNTULEME_LOG);
  }
  goBack() {
    this.visible.next(Visible.GORUNTULEME);
    this.selectedRow = null;
    this.facade.init();
  }
  goToSave(row?: UtTankAsitleme) {
    if (row) {
      this.selectedRow = row;
      this.form.patchValue(row);
      this.form.controls.olcumTarihiDate.disable();
      this.form.controls.olcumSaatiDate.disable();
      this.form.controls.tankNo.disable();
      this.form.controls.hatKodu.disable();
    } else {
      this.form.controls.olcumTarihiDate.enable();
      this.form.controls.olcumSaatiDate.enable();
      this.form.controls.tankNo.enable();
      this.form.controls.hatKodu.enable();
      this.selectedRow = null;
      this.form.patchValue(defaultRow);
    }
    this.visible.next(Visible.GUNCELLEME_KAYIT);
    this.getLimit();
  }
  saveOrUpdate() {
    const row = this.selectedRow ? this.selectedRow : defaultRow;
    const utTankAsitleme = { ...row, ...this.form.value } as UtTankAsitleme;
    if (!this.selectedRow) {
      const olcumTarihi = this.form.value.olcumTarihiDate as Date;
      olcumTarihi.setUTCHours(this.form.value.olcumSaatiDate.getHours());
      olcumTarihi.setMinutes(this.form.value.olcumSaatiDate.getMinutes());
      utTankAsitleme.olcumTarihi = moment(olcumTarihi).toISOString();
      //      utTankAsitleme.olcumTarihi = moment(olcumTarihi).format('YYYYMMDDhh24mi');
    } else {
      utTankAsitleme.islemTipiNo = IslemTipi.GUNCELLEME;
    }
    console.log(utTankAsitleme);
    this.facade.save(utTankAsitleme);
  }

  createForm() {
    this.form = this.formBuilder.group({
      olcumTarihiDate: [new Date(), Validators.required],
      olcumSaatiDate: [new Date()],
      tankNo: [],
      hatKodu: [],
      hclGrLt: [],
      hclYuzde: [],
      fe2GrLt: [],
      fe2Yuzde: [],
      banyoSicakligi: [],
    });
  }

  findMinMax(utTankAsitlemeler: UtTankAsitleme[]) {
    for (let i = utTankAsitlemeler.length - 1; i >= 0; i--) {
      const tmp = utTankAsitlemeler[i].olcumTarihiDate;
      if (tmp < this.lowestOlcumTarihi) {
        this.lowestOlcumTarihi = tmp;
      }
      if (tmp > this.highestOlcumTarihi) {
        this.highestOlcumTarihi = tmp;
      }
    }
  }
  formatTime(time: string) {
    return moment(time, 'HH:mm:ss').format('HH:mm');
  }

  async getLimit() {
    const limitler = await this.utTankAsitlemeLimitList$
      .pipe(take(1))
      .toPromise();
    const limit = limitler.find(
      item =>
        item.hatKodu === this.form.controls.hatKodu.value &&
        item.tankNo === this.form.controls.tankNo.value
    );
    this.limit = limit;
  }
}
