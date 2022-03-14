import {
  Component,
  Input,
  OnDestroy,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import {
  KkUretimYuzeyKusuru,
  Combo,
  EvetHayir,
  YuzeyKusurYeri,
} from '@euys/api-interfaces';
import { FormArray, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'euys-yuzey-kusur-kaydi',
  templateUrl: './yuzey-kusur-kaydi.component.html',
})
export class YuzeyKusurKaydiComponent implements OnInit, OnDestroy {
  @Input() hatKodu: string = null;
  @Input() defaultYuzeyKusurKodu?: string;
  @Input() dispoze = false;
  @Input() minDerece = 1;
  @Input() yuzeyKusurKaydiList$: Observable<KkUretimYuzeyKusuru[]>;
  @Input() yuzeyKusurKaydiListLoaded$: Observable<boolean>;
  @Input() aktifKusur$: Observable<Combo[]>;
  @Input() readOnly = false;

  heads: string[] = [
    'Kusur Kodu*',
    'Derece*',
    '%',
    'Sırası*',
    'Başlangıç(m)',
    'Bitiş(m)',
    'Yeri',
    'Kusur Bu Hatta Mı?*',
    'Kusur Hattı',
  ];

  @Output()
  updated: EventEmitter<KkUretimYuzeyKusuru[]> = new EventEmitter<
    KkUretimYuzeyKusuru[]
  >();

  kusurBuHattaMiOptions = [EvetHayir.HAYIR, EvetHayir.EVET];
  yuzeyKusurYeriOptions = [
    YuzeyKusurYeri.BAS,
    YuzeyKusurYeri.ORTA,
    YuzeyKusurYeri.SON,
  ];
  evet = EvetHayir.EVET;
  dereceOptions: { derece: number; disabled: boolean }[] = [];
  defaultForm: FormGroup<KkUretimYuzeyKusuru> = null;

  formGroup: FormGroup<{ value: KkUretimYuzeyKusuru[] }>;
  formArray: FormArray<KkUretimYuzeyKusuru>;

  destroy$ = new Subject<void>();
  constructor() {
    const formValidator = this.createMainValidator();

    this.formArray = this.constructFormArray();

    this.setFormArrayDynamicValidators();

    this.formGroup = new FormGroup<{ value: KkUretimYuzeyKusuru[] }>(
      {
        value: this.formArray,
      },
      formValidator
    );
  }
  private setFormArrayDynamicValidators() {
    (this.formArray.controls as FormGroup<KkUretimYuzeyKusuru>[]).forEach(
      form => {
        form.controls.yuzeyKusuruKodu.valueChanges
          .pipe(takeUntil(this.destroy$))
          .subscribe(value => {
            if (value) {
              form.controls.yuzeyKusuruDerecesi.setValidators(
                Validators.required
              );
              form.controls.yuzeyKusuruSiraNo.setValidators(
                Validators.required
              );
              form.controls.yuzeyKusuruBuHattaMi.setValidators(
                Validators.required
              );
            } else {
              form.controls.yuzeyKusuruDerecesi.removeValidators(
                Validators.required
              );
              form.controls.yuzeyKusuruSiraNo.removeValidators(
                Validators.required
              );
              form.controls.yuzeyKusuruBuHattaMi.removeValidators(
                Validators.required
              );
            }
          });
      }
    );
  }

  private constructFormArray(): FormArray<KkUretimYuzeyKusuru> {
    return new FormArray<KkUretimYuzeyKusuru>([
      this.createFormConfig(),
      this.createFormConfig(),
      this.createFormConfig(),
    ]);
  }

  private createMainValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control as FormGroup<{ value: KkUretimYuzeyKusuru[] }>;
      return (
        form.controls.value as FormArray<KkUretimYuzeyKusuru>
      ).controls.some(frmGroup => frmGroup.valid)
        ? null
        : {
            atLeastOneFormRequired: true,
          };
    };
  }

  private createFormConfig() {
    return new FormGroup<KkUretimYuzeyKusuru>({
      yuzeyKusuruKodu: new FormControl<string>(null),
      yuzeyKusuruDerecesi: new FormControl<number>(null),
      yuzeyKusuruYuzdesi: new FormControl<number>(null),
      yuzeyKusuruSiraNo: new FormControl<number>(null),
      yuzeyKusuruBaslNoktasi: new FormControl<number>(null),
      yuzeyKusuruBitisNoktasi: new FormControl<number>(null),
      yuzeyKusuruYeri: new FormControl<YuzeyKusurYeri>(null),
      yuzeyKusuruBuHattaMi: new FormControl<EvetHayir>(EvetHayir.HAYIR),
      yuzeyKusuruHatKodu: new FormControl<string>(null),
      id: new FormControl<string>(null),
      idUretimKyd: new FormControl<string>(null),
    });
  }

  ngOnInit() {
    this.dereceOptions = this.generateOptions();
    this.yuzeyKusurKaydiList$.pipe(takeUntil(this.destroy$)).subscribe(list => {
      const values = [...list];
      if (list.length < 3) {
        for (let index = 0; index < 3 - list.length; index++) {
          values.push({
            id: null,
            idUretimKyd: null,
            yuzeyKusuruBaslNoktasi: null,
            yuzeyKusuruBitisNoktasi: null,
            yuzeyKusuruBuHattaMi: EvetHayir.HAYIR,
            yuzeyKusuruDerecesi: null,
            yuzeyKusuruHatKodu: null,
            yuzeyKusuruKodu: null,
            yuzeyKusuruSiraNo: index + 1,
            yuzeyKusuruYeri: null,
            yuzeyKusuruYuzdesi: null,
          });
        }
      }
      this.formArray.patchValue(values);
      this.defaultKusurControl();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  generateOptions() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => ({
      disabled: num < this.minDerece && this.dispoze,
      derece: num,
    }));
  }

  defaultKusurControl() {
    if (this.defaultYuzeyKusurKodu && !this.defaultForm) {
      this.formArray.controls.forEach((form, i) => {
        if (i) {
          return;
        }

        this.defaultForm = form as FormGroup<KkUretimYuzeyKusuru>;
        this.defaultForm.controls.yuzeyKusuruKodu.setValue(
          this.defaultYuzeyKusurKodu
        );
        this.defaultForm.controls.yuzeyKusuruKodu.markAsDirty();

        this.defaultForm.controls.yuzeyKusuruDerecesi.setValue(this.minDerece);
        this.defaultForm.controls.yuzeyKusuruDerecesi.markAsDirty();
      });
    } else if (!this.defaultYuzeyKusurKodu && this.defaultForm) {
      this.defaultForm.controls.yuzeyKusuruKodu.reset();
      this.defaultForm.controls.yuzeyKusuruDerecesi.setValue(1);
      this.defaultForm = null;
    }
  }

  yeniDeger() {
    const value = this.formArray.getRawValue();
    this.updated.emit(value);
  }

  clearForm(formGroup: FormGroup<KkUretimYuzeyKusuru>) {
    const index = this.formArray.controls.indexOf(formGroup);
    formGroup.reset({
      yuzeyKusuruSiraNo: index > -1 ? index + 1 : 1,
      yuzeyKusuruBuHattaMi: EvetHayir.HAYIR,
    });
    this.reorderForms();
    this.yeniDeger();
  }

  reorderForms() {
    setTimeout(() => {
      this.formArray.controls.sort((form1, form2) => {
        const weightForm1 = form1.pristine
          ? 0
          : 10 * form1.value.yuzeyKusuruDerecesi +
            (10 - form1.value.yuzeyKusuruSiraNo);
        const weightForm2 = form2.pristine
          ? 0
          : 10 * form2.value.yuzeyKusuruDerecesi +
            (10 - form2.value.yuzeyKusuruSiraNo);
        return weightForm2 - weightForm1;
      });
      this.yeniDeger();
    }, 300);
  }

  onChangeKusurBuHattaMi(
    event: { value: EvetHayir },
    form: FormGroup<KkUretimYuzeyKusuru>
  ) {
    if (event.value === EvetHayir.EVET) {
      form.patchValue({
        yuzeyKusuruHatKodu: this.hatKodu,
      });
      form.controls.yuzeyKusuruHatKodu.disable();
    } else form.controls.yuzeyKusuruHatKodu.enable();
  }

  isFormValid() {
    return this.formGroup.valid;
  }
}
