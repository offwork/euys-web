import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  KayitIslemTipiEnum,
  UtMerkezHaddeYagEmulsiyonModel,
  UtVisible,
} from '@euys/api-interfaces';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';
import moment from 'moment';
import { ConfirmationService, Message } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ut5109Facade } from '../+state/ut-5109.facade';

@Component({
  selector: 'euys-ut5109',
  templateUrl: './ut-5109.component.html',
})
export class Ut5109Component implements OnInit, OnDestroy {
  Visible = UtVisible;
  visible$ = new BehaviorSubject<UtVisible>(UtVisible.GORUNTULEME);
  selectedRow!: UtMerkezHaddeYagEmulsiyonModel;
  _selectedRow = new BehaviorSubject<UtMerkezHaddeYagEmulsiyonModel>(null);
  selectedRow$ = this._selectedRow.asObservable();
  form: FormGroup;
  data$ = this.facade.data$;
  loglar$ = this.facade.loglar$;
  olcumTarihi: [];
  olcumTarihiGoruntuleme: string;
  utMerkezHaddeYagEmulsiyonModelCode$ =
    this.facade.utMerkezHaddeYagEmulsiyonModelCode$;
  updatedData$ = this.facade.updatedData$;
  _endSubscription$ = new Subject<boolean>();
  msgs: Message[] = [];
  dateNow = new Date();
  dateOneAgoWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: UtMerkezHaddeYagEmulsiyonModel;

  constructor(
    private facade: Ut5109Facade,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.createForm();
    this.data$ = this.facade.data$;
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit(): void {
    this.facade.init();
    this.utMerkezHaddeYagEmulsiyonModelCode$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(data => {
        if (data != null) {
          if (data.code === '1') {
            this.confirm(data.message, data.utMerkezHaddeYagEmulsiyonModel);
          } else if (
            data.code === '0' &&
            data.message != null &&
            data.message.includes('Data Kayıt Başarılı!')
          ) {
            this.selectedRow = null;
            this.form.reset();
            this.form.controls.olcumTarihiDate.enable();
            this.form.controls.olcumTarihiDate.setValue(new Date());
          } else if (
            data.code === '0' &&
            data.message != null &&
            data.message.includes('Data Güncelleme Başarılı!')
          ) {
            this.selectedRow = data.utMerkezHaddeYagEmulsiyonModel;
            this.form.controls.olcumTarihiDate.disable();
            this.goBack();
          }
        }
      });
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  goBack() {
    this.visible$.next(UtVisible.GORUNTULEME);
    this.selectedRow = null;
    this.facade.init();
  }

  loglar(row: UtMerkezHaddeYagEmulsiyonModel) {
    this.facade.loglar(row);
    this.olcumTarihiGoruntuleme = row.olcumTarihi;
    this.visible$.next(UtVisible.GORUNTULEME_LOG);
  }

  goToSave(row?: UtMerkezHaddeYagEmulsiyonModel) {
    if (row) {
      this.selectedRow = row;
      this.form.patchValue(row);
      this.form.controls.olcumTarihiDate.disable();
      this.form.controls.olcumTarihiDate.setValue(new Date(row.olcumTarihi));
    } else {
      this.form.reset();
      this.form.controls.olcumTarihiDate.setValue(new Date());
      this.form.controls.olcumTarihiDate.enable();
      this.form.patchValue(this.defaultRow);
    }
    this.visible$.next(UtVisible.GUNCELLEME_KAYIT);
  }

  saveOrUpdate() {
    const row = this.selectedRow ? this.selectedRow : this.defaultRow;
    const utMerkezHaddeYagEmulsiyonModel = {
      ...row,
      ...this.form.value,
      islemTipiNo: this.selectedRow ? 2 : 1,
      kayitIslemTipiEnum: this.selectedRow
        ? KayitIslemTipiEnum.KAYIT_GUNCELLE
        : KayitIslemTipiEnum.KAYIT_EKLEME,
    };

    if (!this.selectedRow) {
      utMerkezHaddeYagEmulsiyonModel.olcumTarihi = moment(
        this.form.value.olcumTarihiDate
      ).format('YYYY-MM-DD');
      this.facade.save(utMerkezHaddeYagEmulsiyonModel);
    } else {
      this.facade.update(utMerkezHaddeYagEmulsiyonModel);
    }
  }
  confirm(
    message: string,
    utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel
  ) {
    this.confirmationService.confirm({
      message: message,
      header: 'Onay Formu',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedRow = utMerkezHaddeYagEmulsiyonModel;
        this.saveOrUpdate();
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }
  createForm() {
    this.form = this.formBuilder.group({
      olcumTarihiDate: [],
      s1Ph: [],
      s1YagParcalanmaYuzdeVv: [],
      s1SabNoMgKohG: [],
      s1KlorurMgKg: [],
      s1DemirMgKg: [],
      s1SerAsitYuzdeOleikAsit: [],
      s1StabiliteT8Yuzde: [],
      s1StabiliteT20Yuzde: [],
      s3Ph: [],
      s3YagParcalanmaYuzdeVv: [],
      s3KlorurMgKg: [],
      s3SabNoMgKohG: [],
      s3DemirMgKg: [],
      s3SerAsitYuzdeOleikAsit: [],
      s3StabiliteT8Yuzde: [],
      s3StabiliteT20Yuzde: [],
      tph: [],
      tyagParcalanmaYuzdeVv: [],
      tklorurMgKg: [],
      tsabNoMgKohG: [],
      tdemirMgKg: [],
      tserAsitYuzdeOleikAsit: [],
      tstabiliteT8Yuzde: [],
      tstabiliteT20Yuzde: [],
    });
  }
}
