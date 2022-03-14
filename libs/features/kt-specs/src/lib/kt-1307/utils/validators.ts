import { AbstractControl, ValidationErrors } from '@angular/forms';

export const createRequiredValidator = (
  name: string,
  minUzunluk: string,
  maxUzunluk: string
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const min = control.get(minUzunluk).value;
    const max = control.get(maxUzunluk).value;
    return (min == null && max == null) ||
      (min < max && min && max) ||
      (min == 0 && max && max != 0)
      ? null
      : {
          uzunlukMessage:
            "MinUzunluk ve MaxUzunluk 2'si de boş olmalı veya dolu olmalı",
          [name]: true,
        };
  };
};
