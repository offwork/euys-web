import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UtCinkoLapa } from '@euys/api-interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ut5101Facade } from '../+state/ut-5101.facade';

enum Visible {
  GORUNTULEME,
  GUNCELLEME_KAYIT,
  GORUNTULEME_LOG,
}

const createRequiredValidator = (
  name: string,
  adetKey: string,
  agirlikKey: string
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const adet = control.get(adetKey).value;
    const agirlik = control.get(agirlikKey).value;
    return (adet && agirlik) || (!adet && !agirlik)
      ? null
      : {
          cglMessage: "Adet ve Ağırlık 2'si de boş olmalı veya dolu olmalı",
          [name]: true,
        };
  };
};

@Component({
  selector: 'euys-ut-5101',
  templateUrl: './ut5101.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ut5101Component {
  Visible = Visible;
  visible = new BehaviorSubject<Visible>(Visible.GORUNTULEME);
  selectedRow!: UtCinkoLapa;
  _selectedRow = new BehaviorSubject<UtCinkoLapa>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  dataLog$ = this.facade.dataLog$;
  vardiyaUretimleri$ = this.facade.vardiyaUretimleri$;
  lapaToplam$ = this.facade.lapaToplam$;
  cinkoLapaCode$ = this.facade.cinkoLapaCode$;

  defaultRow$ = this.facade.defaultRow$;
  defaultRow: UtCinkoLapa;
  _endSubscription = new Subject<boolean>();

  vardiyatarihi: [];
  form: FormGroup;
  data: UtCinkoLapa[] = [];

  dateNow = new Date();
  dateOneAgoWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  lowestUretimTarihi = this.dateNow;
  highestUretimTarihi = this.dateOneAgoWeek;

  constructor(
    public facade: Ut5101Facade,
    private formBuilder: FormBuilder,
    private toast: HotToastService
  ) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => (this.defaultRow = val));
    this.createForm();

    this.cinkoLapaCode$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => {
        if (val.code === '1') {
          this.goToSave(val.utCinkoLapa);
        } else {
          this.goBack();
        }
      });
  }
  ngOnInit() {
    this.facade.init();
    this.data$.pipe(takeUntil(this._endSubscription)).subscribe(data => {
      this.data = data;
      this.findMinMax(this.data);
    });
  }

  log(row: UtCinkoLapa) {
    this.facade.log(row);
    this.visible.next(Visible.GORUNTULEME_LOG);
  }
  goBack() {
    this.visible.next(Visible.GORUNTULEME);
    this.selectedRow = null;
  }

  saveOrUpdate() {
    if (this.form.valid) {
      const vardiyaTarihi = moment(this.form.value.uretimTarihiDate).format(
        'yyyy-MM-DD'
      );
      const row = this.selectedRow ? this.selectedRow : this.defaultRow;
      this.facade.save({
        ...row,
        ...this.form.value,
        vardiyaTarihi: this.selectedRow ? row.vardiyaTarihi : vardiyaTarihi,
        islemTipiNo: this.selectedRow ? 2 : 1,
        olusturanKisi: 108994,
      });
    } else {
      this.toast.warning(
        `Gerekli alanları doldurunuz!! <br> ${
          this.form.errors?.cglMessage || ''
        }`,
        {
          position: 'top-right',
          autoClose: false,
          dismissible: true,
        }
      );
    }
  }
  goToSave(row?: UtCinkoLapa) {
    if (row) {
      this.selectedRow = row;
      this.form.patchValue(row);
      this.form.controls.uretimTarihiDate.disable();
      this.form.controls.vardiyaNo.disable();
    } else {
      this.form.controls.vardiyaNo.enable();
      this.form.controls.uretimTarihiDate.enable();
      this.form.patchValue(this.defaultRow);
    }
    this.visible.next(Visible.GUNCELLEME_KAYIT);
  }
  createForm() {
    this.form = this.formBuilder.group(
      {
        uretimTarihiDate: [new Date(), Validators.required],
        vardiyaNo: ['1', Validators.required],
        cgl1Adet: [],
        cgl1Agirlik: [],
        cgl2Adet: [],
        cgl2Agirlik: [],
        sevkAdet: ['', Validators.required],
        sevkAgirlik: ['', Validators.required],
      },
      {
        validators: [
          createRequiredValidator('cgl1', 'cgl1Adet', 'cgl1Agirlik'),
          createRequiredValidator('cgl2', 'cgl2Adet', 'cgl2Agirlik'),
        ],
      }
    );
  }
  findMinMax(utCinkoLapalar: UtCinkoLapa[]) {
    for (let i = utCinkoLapalar.length - 1; i >= 0; i--) {
      const tmp = utCinkoLapalar[i].uretimTarihiDate;
      if (tmp < this.lowestUretimTarihi) {
        this.lowestUretimTarihi = tmp;
      }
      if (tmp > this.highestUretimTarihi) {
        this.highestUretimTarihi = tmp;
      }
    }
  }
}
