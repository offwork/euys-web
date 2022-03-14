import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IslemTipi,
  UtTankDurulama,
  UtTankDurulamaLimit,
} from '@euys/api-interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Ut5105Facade } from '../+state/ut-5105.facade';

const defaultRow: UtTankDurulama = {
  id: null,
  aktifPasif: 'A',
  etag: null,
  olcumTarihi: null,
  hatKodu: '501',
  tankNo: 1,
  olcumSaati: null,
  islemTipiNo: IslemTipi.KAYIT,
  islemYapanMenu: null,
  olusturanKisi: '109171',
  islemYapanKisi: '109171',
  islemTarihi: null,
  olusturmaTarihi: null,
  olcumTarihiFormat: null,
  vardiyaTarihi: new Date(),
  ph: null,
  klor: null,
  iletkenlik: null,
  idTankDurulamaEski: null,
  idTankDurulamaLimit: null,
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
  selector: 'euys-ut5105',
  templateUrl: './ut-5105.component.html',
  styleUrls: ['./ut-5105.component.scss'],
})
export class Ut5105Component implements OnInit {
  Visible = Visible;
  visible = new BehaviorSubject<Visible>(Visible.GORUNTULEME);
  selectedRow!: UtTankDurulama;
  _selectedRow = new BehaviorSubject<UtTankDurulama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  utTankDurulamaLimitList$ = this.facade.utTankDurulamaLimitList$;
  data$ = this.facade.data$;
  dataLog$ = this.facade.dataLog$;
  _endSubscription = new Subject<boolean>();
  vardiyaUretimleri$ = this.facade.vardiyaUretimleri$;
  tankNoList$ = this.facade.tankNoList$;
  hatKodList$ = this.facade.hatKodList$;
  utTankDurulamaCode$ = this.facade.utTankDurulamaCode$;
  form: FormGroup;
  data: UtTankDurulama[] = [];
  limit: UtTankDurulamaLimit;

  olcumTarihi: [];

  dateNow = new Date();
  dateOneAgoWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  lowestOlcumTarihi = this.dateNow;
  highestOlcumTarihi = this.dateOneAgoWeek;

  constructor(
    private facade: Ut5105Facade,
    private formBuilder: FormBuilder,
    private toast: HotToastService
  ) {
    this.createForm();
    this.utTankDurulamaCode$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => {
        if (val.code === '1') {
          this.goToSave(val.utTankDurulama);
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
  log(row: UtTankDurulama) {
    this.facade.log(row);
    this.visible.next(Visible.GORUNTULEME_LOG);
  }
  goBack() {
    this.visible.next(Visible.GORUNTULEME);
    this.selectedRow = null;
    this.facade.init();
  }
  goToSave(row?: UtTankDurulama) {
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
    const utTankDurulama = { ...row, ...this.form.value } as UtTankDurulama;
    if (!this.selectedRow) {
      const olcumTarihi = this.form.value.olcumTarihiDate as Date;
      olcumTarihi.setUTCHours(this.form.value.olcumSaatiDate.getHours());
      olcumTarihi.setMinutes(this.form.value.olcumSaatiDate.getMinutes());
      utTankDurulama.olcumTarihi = moment(olcumTarihi).toISOString();
    } else {
      utTankDurulama.islemTipiNo = IslemTipi.GUNCELLEME;
    }
    utTankDurulama.islemYapanKisi = '109171';
    console.log(utTankDurulama);
    this.facade.save(utTankDurulama);
  }

  createForm() {
    this.form = this.formBuilder.group({
      olcumTarihiDate: [new Date(), Validators.required],
      olcumSaatiDate: [new Date()],
      tankNo: [],
      hatKodu: [],
      ph: [],
      klor: [],
      iletkenlik: [],
    });
  }

  findMinMax(utTankDurulamaler: UtTankDurulama[]) {
    for (let i = utTankDurulamaler.length - 1; i >= 0; i--) {
      const tmp = utTankDurulamaler[i].olcumTarihiDate;
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
    const limitler = await this.utTankDurulamaLimitList$
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
