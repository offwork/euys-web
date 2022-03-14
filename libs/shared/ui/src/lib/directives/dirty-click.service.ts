import { Injectable, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  // TODO: UI içerisindeki hiç bir servis root modülce provide edilemez
  // Bu uygulama boyunca çalışan her AppModule DirtyClickService
  // compile time bağlamı için ekleyecektir.
  providedIn: 'root',
})
export class DirtyClickService {
  private readonly accessors = new Map<FormControl, ElementRef<AnalyserNode>>();

  public registerControl(
    control: FormControl,
    elementRef: ElementRef<any>
  ): void {
    this.accessors.set(control, elementRef);
  }

  public deRegisterControl(control: FormControl): void {
    this.accessors.delete(control);
  }
}
