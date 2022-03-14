import {
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Output,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  HSM2MpcOzellik,
  HSM2UretimDegerleri,
  NumberFormat,
} from '@euys/api-interfaces';
import { FormControl, FormGroup, ValidatorFn } from '@ngneat/reactive-forms';
import {
  getMpcOlculenOrtalama,
  getMpcOzellikRowData,
} from '../../../shared/hsm/utils';
import { Hsm2UretimDegerOutput } from '../../models/hsm2-uretim-deger-output';

@Component({
  selector: 'euys-hsm2-uretim-degerleri',
  templateUrl: './hsm2-uretim-degerleri.component.html',
  styleUrls: ['./hsm2-uretim-degerleri.component.scss'],
})
export class Hsm2UretimDegerleriComponent implements OnInit {
  @Input()
  uretimDegerleri: HSM2UretimDegerleri[];
  @Input()
  disabled = false;
  @Output()
  update = new EventEmitter<HSM2UretimDegerleri>();

  formGroup = new FormGroup<Hsm2UretimDegerOutput>({
    kalinlik: new FormControl<number>(null, this.kalinlikValidator),
    genislik: new FormControl<number>(null, this.genislikValidator),
    bobinIcCap: new FormControl<number>(null, this.icCapValidator),
    bobinDisCap: new FormControl<number>(null, this.disCapValidator),
  });

  decimalFormat = NumberFormat.Standard;

  constructor(@Inject(LOCALE_ID) public readonly appLocale: string) {}

  get kalinlikValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!this.uretimDegerleri?.length) return null;

      const kalinlikRowData = getMpcOzellikRowData(
        'KALINLIK',
        this.uretimDegerleri
      );
      const outOfBounds = kalinlikRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  get genislikValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!this.uretimDegerleri?.length) return null;

      const genislikRowData = getMpcOzellikRowData(
        'GENISLIK',
        this.uretimDegerleri
      );
      const outOfBounds = genislikRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  get icCapValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!this.uretimDegerleri?.length) return null;

      const icCapRowData = getMpcOzellikRowData(
        'BOBINICCAPI',
        this.uretimDegerleri
      );
      const outOfBounds = icCapRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  get disCapValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!this.uretimDegerleri?.length) return null;

      const disCapRowData = getMpcOzellikRowData(
        'BOBINDISCAPI',
        this.uretimDegerleri
      );
      const outOfBounds = disCapRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  ngOnInit(): void {
    this.initForm();
  }

  updateUretimDegeri(mpcOzellik: HSM2MpcOzellik) {
    const uretimDegerleri = this.uretimDegerleri.find(
      ud => ud.mpcOzellik === mpcOzellik
    );
    if (!uretimDegerleri) {
      return;
    }
    let updatedRow: HSM2UretimDegerleri;
    switch (mpcOzellik) {
      case 'KALINLIK':
        updatedRow = {
          ...uretimDegerleri,
          olculenOrtalama: this.formGroup.value.kalinlik,
        };
        break;
      case 'GENISLIK':
        updatedRow = {
          ...uretimDegerleri,
          olculenOrtalama: this.formGroup.value.genislik,
        };
        break;
      case 'BOBINDISCAPI':
        updatedRow = {
          ...uretimDegerleri,
          olculenOrtalama: this.formGroup.value.bobinDisCap,
        };
        break;
      case 'BOBINICCAPI':
        updatedRow = {
          ...uretimDegerleri,
          olculenOrtalama: this.formGroup.value.bobinIcCap,
        };
        break;
      default:
        updatedRow = uretimDegerleri;
        break;
    }
    this.update.emit(updatedRow);
  }

  private initForm() {
    const [kalinlik, genislik, bobinIcCap, bobinDisCap] = [
      getMpcOlculenOrtalama('KALINLIK', this.uretimDegerleri),
      getMpcOlculenOrtalama('GENISLIK', this.uretimDegerleri),
      getMpcOlculenOrtalama('BOBINICCAPI', this.uretimDegerleri),
      getMpcOlculenOrtalama('BOBINDISCAPI', this.uretimDegerleri),
    ];
    this.formGroup.setValue({
      kalinlik,
      genislik,
      bobinIcCap,
      bobinDisCap,
    });
    this.formGroup.updateValueAndValidity();
    this.formGroup.markAsTouched();
    if (this.disabled) {
      this.formGroup.disable();
    }
  }
}
