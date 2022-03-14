import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formControlName]',
})
export class DirtyClickDirective {
  @HostListener('focusout', ['$event'])
  onFocusOut() {
    this.findControl(
      new FormGroup({
        topLevel: this.formGroupDirective?.control,
      })
    );
  }

  findControl(formGroup: FormGroup) {
    console.log('Dirty click directive find control working!!');
    Object.keys(formGroup.controls).some(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        // TODO: BENİ OKU
        // FormControl'ü için dom da dolaşmamalışın bu daha çok legal olmayan bir yöntem
        // Lütfen directive'in form control üzerinde denetimi için aşağıdaki path bakın
        // libs/shared/ui/src/lib/forms/directives/form-field.directive.ts
        if (control.controls[this.elementRef.nativeElement.id]) {
          control.controls[this.elementRef.nativeElement.id].markAsDirty();
          return true;
        }
        this.findControl(control);
      }
    });
  }

  constructor(
    private readonly formGroupDirective: FormGroupDirective,
    private readonly elementRef: ElementRef<any>
  ) {}
}
