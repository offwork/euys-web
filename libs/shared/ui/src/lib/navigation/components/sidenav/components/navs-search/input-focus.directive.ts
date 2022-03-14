import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[euysInputFocus]',
})
export class InputFocusDirective implements OnChanges {
  @Input() euysInputFocus: boolean;

  private nativeElement: HTMLInputElement;

  constructor(private readonly elementRef: ElementRef) {
    this.nativeElement = this.elementRef.nativeElement as HTMLInputElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { euysInputFocus } = changes;
    if (
      !euysInputFocus.firstChange &&
      euysInputFocus.currentValue !== euysInputFocus.previousValue &&
      euysInputFocus.currentValue
    )
      this.nativeElement.focus();
  }
}
