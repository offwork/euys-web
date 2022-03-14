import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IslemTipi, UtTankAsitlemeLimit } from '@euys/api-interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Ut5102Facade } from '../+state/ut-5102.facade';

@Component({
  selector: 'euys-ut5102',
  templateUrl: './ut-5102.component.html',
})
export class Ut5102Component implements OnInit, OnDestroy {
  hatList$ = this.facade.hatList$;
  tankList$ = this.facade.tankList$;
  isUpdate$ = this.facade.isUpdate$;
  utTankAsitlemeLimit$ = this.facade.utTankAsitlemeLimit$;
  loading$ = this.facade.loading$;
  _endSubscription = new Subject<boolean>();
  form: FormGroup;

  constructor(
    private facade: Ut5102Facade,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.facade.getData();
    this.loading$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(async val => {
        if (!val) {
          const utTankAsitlemeLimit = await this.utTankAsitlemeLimit$
            .pipe(take(1))
            .toPromise();
          if (utTankAsitlemeLimit) {
            this.form.patchValue(utTankAsitlemeLimit);
            this.form.controls.tankNo.disable();
            this.form.controls.hatKodu.disable();
          } else {
            this.form.controls.tankNo.enable();
            this.form.controls.hatKodu.enable();
            this.createForm();
          }
        }
      });
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  createForm() {
    this.form = this.fb.group({
      tankNo: ['', Validators.required],
      hatKodu: ['', Validators.required],
      hclYuzde: ['', Validators.required],
      hclGrLt: ['', Validators.required],
      fe2Yuzde: ['', Validators.required],
      fe2GrLt: ['', Validators.required],
      banyoSicakligi: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const utTankAsitlemeLimit = await this.utTankAsitlemeLimit$
        .pipe(take(1))
        .toPromise();
      const row =
        utTankAsitlemeLimit ||
        ({
          idTankAsitlemeLimitEski: null,
          aktifPasif: 'A',
          olusturanKisi: '108994',
        } as UtTankAsitlemeLimit);

      const obj = {
        ...row,
        ...this.form.value,
        islemTipiNo: utTankAsitlemeLimit
          ? IslemTipi.GUNCELLEME
          : IslemTipi.KAYIT,
        islemYapanKisi: '105400',
        islemYapanMenu: null,
        olusturanKisi: '108994',
      } as UtTankAsitlemeLimit;
      this.facade.save(obj);
    } else {
      this.toast.warning(`Gerekli alanları doldurunuz!!`, {
        position: 'top-right',
        autoClose: false,
        dismissible: true,
      });
    }
  }
}
