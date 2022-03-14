import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[euysValidationMessage]',
})
export class ValidationMessageDirective implements OnInit, AfterViewInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('for') forControl!: string;
  @Input() validationLabel!: string;
  label = '';
  control!: FormControl;

  constructor(private el: ElementRef, private formGroup: FormGroupDirective) {
    el.nativeElement.classList.add('validation-message-directive');
  }

  ngAfterViewInit() {
    this.label = (this.validationLabel || this.el.nativeElement.textContent)
      .replace(':', '')
      .replace('*', '')
      .trim();

    if (this.el.nativeElement.nextSibling?.rows) {
      const rowAsRem = (this.el.nativeElement.nextSibling.rows - 1) * 0.6;
      this.el.nativeElement.style.setProperty('--rows', rowAsRem + 'rem');
    }
  }

  ngOnInit(): void {
    const toggleMessage = (status: string) => {
      if (status === 'INVALID') {
        let messageText = '';

        if (this.control.errors?.required) {
          messageText = `${this.label} zorunludur.`;
        } else if (this.control.errors?.max) {
          messageText = `${this.label} ${this.control.errors.max.max}'den büyük olamaz.`;
        } else if (this.control.errors?.min) {
          messageText = `${this.label} ${this.control.errors.min.min}'den küçük olamaz.`;
        } else if (this.control.errors?.maxlength) {
          messageText = `${this.label} ${this.control.errors.maxlength.requiredLength} harfden uzun olamaz.`;
        } else if (this.control.errors?.minlength) {
          messageText = `${this.label} ${this.control.errors.minlength.requiredLength} harfden kısa olamaz.`;
        } else if (this.control.errors?.email) {
          messageText = `${this.label} e-posta formatında olmalı.`;
        } else if (this.control.errors?.pattern) {
          messageText = `${this.label} beklenen formatta olmalı.`;
        }

        this.el.nativeElement.dataset['validationMessage'] = messageText;
      } else {
        this.el.nativeElement.dataset['validationMessage'] = '';
      }
    };

    this.control = this.formGroup.form.controls[this.forControl] as FormControl;
    const markAsTouched = this.control.markAsTouched;
    this.control.markAsTouched = opts => {
      markAsTouched.bind(this.control)(opts);
      toggleMessage(this.control.status);
    };
    this.control.statusChanges.subscribe(toggleMessage);
  }
}
