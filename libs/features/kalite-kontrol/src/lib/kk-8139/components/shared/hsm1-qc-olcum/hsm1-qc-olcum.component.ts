import {
  Component,
  Inject,
  LOCALE_ID,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { HSM1UretimDegerleri, NumberFormat } from '@euys/api-interfaces';
import { FormControl, FormGroup, ValidatorFn } from '@ngneat/reactive-forms';
import { InputNumber } from 'primeng/inputnumber';
import { Observable } from 'rxjs';
import { Kk8139Facade } from '../../../+state/kk-8139.facade';
import {
  getHsm1MpcOlculenMax,
  getHsm1MpcOlculenMin,
  getHsm1MpcOlculenOrtalama,
  getHsm1MpcOzellikRowData,
} from '../../../../shared/hsm/utils';
import { Hsm1UretimDegerOutput } from '../../../models/hsm1-uretim-deger-output';

@Component({
  selector: 'euys-hsm1-qc-olcum',
  templateUrl: './hsm1-qc-olcum.component.html',
  styleUrls: ['./hsm1-qc-olcum.component.scss'],
})
export class Hsm1QcOlcumComponent implements OnChanges {
  @Input() qcKayitBilgileriLoaded$: Observable<boolean>;
  @Input()
  uretimDegerleri: HSM1UretimDegerleri[];
  @Output()
  update = new EventEmitter<HSM1UretimDegerleri>();
  @Input()
  disabled = false;

  dummyQcOlcumList = new Array(13);

  editableRowIndexArr: number[] = [0, 1, 11, 12];
  editableColModelPropNameArr = [
    { name: 'olculenOrtalama', index: 2 },
    { name: 'olculenMin', index: 3 },
    { name: 'olculenMax', index: 4 },
  ];

  qcOlcumFormGroup = new FormGroup<Hsm1UretimDegerOutput>({
    ortKalinlik: new FormControl<number>(null, this.kalinlikValidator),
    ortGenislik: new FormControl<number>(null, this.genislikValidator),
    shOrtalamaIkmalSicakligi: new FormControl<number>(
      null,
      this.ikmalValidator
    ),
    shOrtalamaSarilmaSicakligi: new FormControl<number>(
      null,
      this.sarilmaIkmalValidator
    ),
    minKalinlik: new FormControl<number>(null),
    minGenislik: new FormControl<number>(null),
    shMinIkmalSicakligi: new FormControl<number>(null),
    shMinSarilmaSicakligi: new FormControl<number>(null),
    maxKalinlik: new FormControl<number>(null),
    maxGenislik: new FormControl<number>(null),
    shMaxIkmalSicakligi: new FormControl<number>(null),
    shMaxSarilmaSicakligi: new FormControl<number>(null),
  });

  decimalFormat = NumberFormat.Standard;

  constructor(
    @Inject(LOCALE_ID) public readonly appLocale: string,
    private facade: Kk8139Facade
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('uretimDegerleri' in changes) {
      console.log('Üretim değerleri changes!!!');
      const curr = changes.uretimDegerleri.currentValue;
      if (curr) this.initForm();
    }
  }

  handleInputBlur(element: InputNumber, elementIndexArr: number[]): void {
    const formControl: AbstractControl = this.getFormControlByElement(element);
    this.parseToHsm1UretimDegerleri(formControl, elementIndexArr);
  }

  handleInputFocus(element: InputNumber): void {
    const formControl: AbstractControl = this.getFormControlByElement(element);
    this.setPrevFormElValue(formControl.value);
  }

  setPrevFormElValue(prevVal: number): void {
    this.setPrevFormElValue(prevVal);
  }

  getFormControlByElement(element: InputNumber): AbstractControl {
    return this.getFormControlByName(element.el.nativeElement.id);
  }

  parseToHsm1UretimDegerleri(
    formControl: AbstractControl,
    elementIndexArr: number[]
  ) {
    const [activeRowIndex, activeColumnIndex] = [
      elementIndexArr[0],
      elementIndexArr[1],
    ];
    const uretimDegerleri = [...this.uretimDegerleri];
    if (
      this.editableRowIndexArr.findIndex(
        rowIndex => rowIndex === activeRowIndex
      ) > -1
    ) {
      const activeColModel = this.editableColModelPropNameArr.find(
        colModel => colModel.index === activeColumnIndex
      );
      const source: Record<string, number> = {
        [`${activeColModel.name}`]: formControl.value,
      };
      this.update.emit(
        Object.assign({ ...uretimDegerleri[activeRowIndex] }, { ...source })
      );
    }
  }

  private initForm() {
    const [
      ortKalinlik,
      ortGenislik,
      shOrtalamaIkmalSicakligi,
      shOrtalamaSarilmaSicakligi,
      minKalinlik,
      minGenislik,
      shMinIkmalSicakligi,
      shMinSarilmaSicakligi,
      maxKalinlik,
      maxGenislik,
      shMaxIkmalSicakligi,
      shMaxSarilmaSicakligi,
    ] = [
      getHsm1MpcOlculenOrtalama('KALINLIK', this.uretimDegerleri),
      getHsm1MpcOlculenOrtalama('GENISLIK', this.uretimDegerleri),
      getHsm1MpcOlculenOrtalama('SHIKMALSICAKLIGI', this.uretimDegerleri),
      getHsm1MpcOlculenOrtalama('SHSARILMASICAKLIGI', this.uretimDegerleri),
      getHsm1MpcOlculenMin('KALINLIK', this.uretimDegerleri),
      getHsm1MpcOlculenMin('GENISLIK', this.uretimDegerleri),
      getHsm1MpcOlculenMin('SHIKMALSICAKLIGI', this.uretimDegerleri),
      getHsm1MpcOlculenMin('SHSARILMASICAKLIGI', this.uretimDegerleri),
      getHsm1MpcOlculenMax('KALINLIK', this.uretimDegerleri),
      getHsm1MpcOlculenMax('GENISLIK', this.uretimDegerleri),
      getHsm1MpcOlculenMax('SHIKMALSICAKLIGI', this.uretimDegerleri),
      getHsm1MpcOlculenMax('SHSARILMASICAKLIGI', this.uretimDegerleri),
    ];
    this.qcOlcumFormGroup.setValue({
      ortKalinlik,
      ortGenislik,
      shOrtalamaIkmalSicakligi,
      shOrtalamaSarilmaSicakligi,
      minKalinlik,
      minGenislik,
      shMinIkmalSicakligi,
      shMinSarilmaSicakligi,
      maxKalinlik,
      maxGenislik,
      shMaxIkmalSicakligi,
      shMaxSarilmaSicakligi,
    });
    this.qcOlcumFormGroup.updateValueAndValidity();
    this.qcOlcumFormGroup.markAsTouched();
    if (this.disabled) {
      this.qcOlcumFormGroup.disable();
    }
  }

  /*
   * Validators
   */

  get kalinlikValidator(): ValidatorFn {
    return () => {
      if (!this.uretimDegerleri?.length) return null;

      const kalinlikRowData = getHsm1MpcOzellikRowData(
        'KALINLIK',
        this.uretimDegerleri
      );
      const outOfBounds = kalinlikRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  get genislikValidator(): ValidatorFn {
    return () => {
      if (!this.uretimDegerleri?.length) return null;

      const genislikRowData = getHsm1MpcOzellikRowData(
        'GENISLIK',
        this.uretimDegerleri
      );
      const outOfBounds = genislikRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  get ikmalValidator(): ValidatorFn {
    return () => {
      if (!this.uretimDegerleri?.length) return null;

      const ikmalRowData = getHsm1MpcOzellikRowData(
        'SHIKMALSICAKLIGI',
        this.uretimDegerleri
      );
      const outOfBounds = ikmalRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  get sarilmaIkmalValidator(): ValidatorFn {
    return () => {
      if (!this.uretimDegerleri?.length) return null;

      const sarilmaRowData = getHsm1MpcOzellikRowData(
        'SHSARILMASICAKLIGI',
        this.uretimDegerleri
      );
      const outOfBounds = sarilmaRowData.olculenOrtalamaIkaz;
      return outOfBounds ? { outOfBounds: true } : null;
    };
  }

  /*
   * Form getter
   */

  getFormControlByName(formControlName: string): AbstractControl {
    return this.qcOlcumFormGroup.get(formControlName);
  }
}
