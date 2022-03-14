import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[euysDigitOnly]',
})
export class DigitOnlyDirective {
  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^-,0-9]*$/g, '');
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  constructor(private _el: ElementRef) {}
}
