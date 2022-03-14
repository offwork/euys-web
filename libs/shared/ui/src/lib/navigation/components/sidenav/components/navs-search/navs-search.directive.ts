import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[euysNavsSearch]',
})
export class NavsSearchDirective implements OnInit {
  @Output() filterHandler = new EventEmitter<string>();

  private nativeElement: HTMLInputElement;

  constructor(private readonly elementRef: ElementRef) {
    this.nativeElement = this.elementRef.nativeElement as HTMLInputElement;
  }

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(this.nativeElement, 'keyup')
      .pipe(map((e) => e.target as HTMLInputElement))
      .subscribe((el: HTMLInputElement) => {
        this.filterHandler.emit(el.value);
      });
  }
}
