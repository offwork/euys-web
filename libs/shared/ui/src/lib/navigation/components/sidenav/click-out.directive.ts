import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[euysClickOut]',
})
export class ClickOutDirective {
  @Input() euysClickOut: boolean;
  @Output() clickOut = new EventEmitter<undefined>();
  private nativeElement: HTMLElement;

  constructor(private readonly elementRef: ElementRef) {
    this.nativeElement = this.elementRef.nativeElement as HTMLElement;
  }

  @HostListener('document:click', ['$event.target']) onClick(
    target: HTMLElement
  ) {
    const clickedInside = this.nativeElement.contains(target);
    if (
      this.euysClickOut &&
      typeof clickedInside !== null &&
      typeof clickedInside !== undefined &&
      !clickedInside
    )
      this.clickOutHandler();
  }

  clickOutHandler() {
    this.clickOut.emit();
  }
}
