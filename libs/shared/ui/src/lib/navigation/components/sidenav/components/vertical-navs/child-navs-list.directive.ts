import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[euysChildNavsList]',
})
export class ChildNavsListDirective implements AfterViewInit, OnChanges {
  @Input() euysChildNavsList: boolean;

  private headerNavHeight = 64;
  private toggleButtonHeight = 41;
  private firstRender = true;
  private nativeElement: HTMLElement;
  private availableVerticalSpace: number;

  constructor(
    private renderer: Renderer2,
    private readonly elementRef: ElementRef
  ) {
    this.nativeElement = this.elementRef.nativeElement as HTMLElement;
  }

  ngAfterViewInit(): void {
    this.availableVerticalSpace = this.getAvailableVerticalSpace(
      this.nativeElement
    );
    this.dynamicResize(this.availableVerticalSpace, this.nativeElement);
    this.firstRender = false;
  }

  ngOnChanges(): void {
    if (!this.firstRender)
      this.dynamicResize(
        this.getAvailableVerticalSpace(this.nativeElement),
        this.nativeElement
      );
  }

  dynamicResize(availableVerticalSpace: number, nativeElement: HTMLElement) {
    if (this.euysChildNavsList) {
      if (this.needResize(availableVerticalSpace, nativeElement.clientHeight))
        this.resizeElement(nativeElement, availableVerticalSpace, 'auto');
    } else this.resizeElement(nativeElement, 'unset', 'unset');
  }

  getAvailableVerticalSpace(nativeElement: HTMLElement) {
    return this.calculateAvailableVerticalSpace(
      window.innerHeight,
      nativeElement.offsetParent as HTMLElement
    );
  }

  calculateAvailableVerticalSpace(
    windowInnerHeight: number,
    offsetElement: HTMLElement
  ) {
    return windowInnerHeight - (offsetElement.offsetTop + this.headerNavHeight);
  }

  needResize(availableVerticalSpace: number, elementHeight: number) {
    return availableVerticalSpace < elementHeight;
  }

  resizeElement(
    nativeElement: HTMLElement,
    height: number | string,
    overflowY: string
  ) {
    this.setHeight(nativeElement, height);
    this.setOverflowY(nativeElement, overflowY);
  }

  setHeight(nativeElement: HTMLElement, value: number | string) {
    this.renderer.setStyle(
      nativeElement,
      'height',
      typeof value === 'number'
        ? (value = `${value - this.toggleButtonHeight}px`)
        : value
    );
  }

  setOverflowY(nativeElement: HTMLElement, value: string) {
    this.renderer.setStyle(nativeElement, 'overflow-y', `${value}`);
  }

  setVisible(visible: boolean) {
    visible
      ? this.setVisibility(this.nativeElement, 'visible')
      : this.setVisibility(this.nativeElement, 'hidden');
  }

  setVisibility(nativeElement: HTMLElement, value: string) {
    this.renderer.setStyle(nativeElement, 'visibility', `${value}`);
  }
}
