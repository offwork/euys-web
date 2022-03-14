import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IslemTipi, UtTankDurulamaLimit } from '@euys/api-interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Ut5104Facade } from '../+state/ut-5104.facade';

@Component({
  selector: 'euys-ut5104',
  templateUrl: './ut-5104.component.html',
})
export class Ut5104Component implements OnInit, OnDestroy {
  hatList$ = this.facade.hatList$;
  tankList$ = this.facade.tankList$;
  isUpdate$ = this.facade.isUpdate$;
  utTankDurulamaLimit$ = this.facade.utTankDurulamaLimit$;
  loading$ = this.facade.loading$;
  _endSubscription = new Subject<boolean>();
  form: FormGroup;

  constructor(
    private facade: Ut5104Facade,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log('hello');
    this.facade.getData();
    this.loading$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(async val => {
        if (!val) {
          const utTankDurulamaLimit = await this.utTankDurulamaLimit$
            .pipe(take(1))
            .toPromise();
          if (utTankDurulamaLimit) {
            this.form.patchValue(utTankDurulamaLimit);
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
      ph: ['', Validators.required],
      klor: ['', Validators.required],
      iletkenlik: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const utTankDurulamaLimit = await this.utTankDurulamaLimit$
        .pipe(take(1))
        .toPromise();
      const row =
        utTankDurulamaLimit ||
        ({
          idTankDurulamaLimitEski: null,
          aktifPasif: 'A',
          olusturanKisi: '22',
        } as UtTankDurulamaLimit);

      const obj = {
        ...row,
        ...this.form.value,
        islemTipiNo: utTankDurulamaLimit
          ? IslemTipi.GUNCELLEME
          : IslemTipi.KAYIT,
        islemYapanKisi: '22',
        islemYapanMenu: null,
        olusturanKisi: '109171',
      } as UtTankDurulamaLimit;
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
