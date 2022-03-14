import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  Combo,
  ComboBase,
  KkKusurKtlgMuhOprYorum,
  KusurSiddeti,
  KusurYogunlugu,
} from '@euys/api-interfaces';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@ngneat/reactive-forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'euys-muh-operator-yorum',
  templateUrl: './muh-operator-yorum.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MuhOperatorYorumComponent,
      multi: true,
    },
  ],
})
export class MuhOperatorYorumComponent
  implements OnInit, OnChanges, OnDestroy, ControlValueAccessor
{
  @Input()
  urunList: Combo[] = [];
  @Input()
  idKusurHat: string = null;
  disabled = false;

  destroy$ = new Subject<void>();

  kusurSiddetleri: ComboBase<KusurSiddeti>[] = [
    {
      kodu: KusurSiddeti.HAFIF,
      adi: 'Hafif',
    },
    {
      kodu: KusurSiddeti.ORTA,
      adi: 'Orta',
    },
    {
      kodu: KusurSiddeti.AGIR,
      adi: 'Ağır',
    },
  ];
  kusurYogunluklari: ComboBase<KusurYogunlugu>[] = [
    {
      kodu: KusurYogunlugu.SEYREK,
      adi: 'Seyrek',
    },
    {
      kodu: KusurYogunlugu.SIK,
      adi: 'Sık',
    },
    {
      kodu: KusurYogunlugu.SUREKLI,
      adi: 'Sürekli',
    },
  ];

  kusurSiddeti = KusurSiddeti;
  kusurYogunlugu = KusurYogunlugu;

  list: KkKusurKtlgMuhOprYorum[] = [];
  urunMap: Record<string, string> = {};
  form: FormGroup<KkKusurKtlgMuhOprYorum>;
  hasError = false;

  onChange = (value: any): void => {
    // noop
  };
  onTouched = (): void => {
    // noop
  };

  siddetYogunlukRequiredValidator: ValidatorFn = control => {
    const value = control.value as KkKusurKtlgMuhOprYorum;
    if (!value.kusurSiddetNo || !value.kusurYogunlukNo) {
      return { siddetYogunlukRequired: true };
    } else return null;
  };

  existsValidator: ValidatorFn = control => {
    const value = control.value;
    if (!value.kusurSiddetNo || !value.kusurYogunlukNo) return null;
    const matchFound = this.list.find(row => {
      if (row.kusurSiddetNo !== value.kusurSiddetNo) {
        return false;
      }
      if (row.kusurYogunlukNo !== value.kusurYogunlukNo) {
        return false;
      }
      return (
        !row.urunKodu || !value.urunKodu || row.urunKodu === value.urunKodu
      );
    });
    return matchFound ? { matchExists: true } : null;
  };

  yorumRequiredValidator: ValidatorFn = control => {
    const value = control.value as KkKusurKtlgMuhOprYorum;
    if (!value.kusurSiddetNo || !value.kusurYogunlukNo) return null;
    if (!value.kusurMuhendisYorum && !value.kusurOperatorYorum) {
      return { yorumRequired: true };
    } else return null;
  };

  constructor() {
    this.form = new FormGroup<KkKusurKtlgMuhOprYorum>(
      {
        id: new FormControl<string>(null),
        idKusurHat: new FormControl<string>(this.idKusurHat),
        kusurMuhendisYorum: new FormControl<string>(null),
        kusurOperatorYorum: new FormControl<string>(null),
        kusurSiddetNo: new FormControl<KusurSiddeti>(null, Validators.required),
        kusurYogunlukNo: new FormControl<KusurYogunlugu>(
          null,
          Validators.required
        ),
        urunKodu: new FormControl<string>(null),
      },
      [
        this.siddetYogunlukRequiredValidator,
        this.existsValidator,
        this.yorumRequiredValidator,
      ]
    );
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  writeValue(value: KkKusurKtlgMuhOprYorum[]): void {
    this.list = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else this.form.enable();
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    /* for (const urun of this.urunList) {
      this.urunMap[urun.kodu] = urun.adi;
    } */
    this.resetForm();
    this.form.status$
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(state => {
        if (state === 'INVALID') {
          this.hasError = true;
        } else this.hasError = false;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.urunList && changes.urunList.currentValue?.length) {
      const value = changes.urunList.currentValue as Combo[];
      this.urunMap = value.reduce(
        (acc, next) =>
          acc[next.kodu] ? acc : { ...acc, [next.kodu]: next.adi },
        this.urunMap
      );
    }
  }

  resetForm(): void {
    this.form.reset({
      id: null,
      idKusurHat: this.idKusurHat,
      kusurMuhendisYorum: null,
      kusurOperatorYorum: null,
      kusurSiddetNo: null,
      kusurYogunlukNo: null,
      urunKodu: null,
    });
  }

  add() {
    if (this.form.valid) {
      this.list = this.list.concat(this.form.value);
      this.resetForm();
      this.onChange([...this.list]);
    }
  }

  removeAt(index: number) {
    this.list = this.list.filter((_, i) => i !== index);
    this.onChange([...this.list]);
  }
}
