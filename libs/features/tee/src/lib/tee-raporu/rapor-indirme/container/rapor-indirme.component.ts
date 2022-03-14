import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { EuysValidators } from '@euys/shared/ui';
import { ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'euys-rapor-indirme',
  templateUrl: './rapor-indirme.component.html',
  styleUrls: ['./rapor-indirme.component.scss'],
})
export class RaporIndirmeComponent {
  downloadReportFormGroup = new FormGroup({
    tarih: new FormControl<Date>(),
    haftaAy: new FormControl(),
    hafta: new FormControl(1),
  });

  dateCtrlValidators: ValidatorFn[] = [
    EuysValidators.maxDate(new Date('03/10/2022')),
    EuysValidators.minDate(new Date('01/31/2022')),
    Validators.required,
  ];

  weekCtrlValidators: ValidatorFn[] = [Validators.max(4), Validators.min(2)];

  maxDate = new Date('05/01/2022');
  selectedDate: Date;
  haftaSayilari: number[];
  weekMonthOpts: Array<{ value: string; label: string }> = [
    { value: 'AYLIK', label: 'Aylık' },
    { value: 'HAFTALIK', label: 'Haftalık' },
  ];

  submit() {
    console.log(this.downloadReportFormGroup.value);
  }

  tarihDegisti(date: Date) {
    if (date) {
      const firstDay = new Date(date.setDate(1)).getDay();
      const totalDays = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      const weekDays = Math.ceil((totalDays + firstDay) / 7); // FIXME: yanlış hesaplıyor değiştirilmesi gerek
      this.haftaSayilari = [...Array(weekDays)].map((val, idx) => idx + 1);
      this.downloadReportFormGroup.controls.hafta.enable();
    }
  }

  // TODO: cannot yet be used with name of the form controller
  // `euys-*-input`, it must match the form object dynamically
  getFormControl(ctrl: string) {
    return this.downloadReportFormGroup.getControl(ctrl) as FormControl;
  }
}
