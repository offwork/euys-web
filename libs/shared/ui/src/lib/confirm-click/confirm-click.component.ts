import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'euys-confirm-click',
  template: `
    <div class="p-dialog-content">
      <i
        [ngClass]="'p-confirm-dialog-icon'"
        *ngIf="config.data?.icon"
        [class]="config.data.icon"
      ></i>
      <span class="p-confirm-dialog-message"> {{ config.data.message }}</span>
    </div>
    <div class="p-dialog-footer">
      <button
        type="button"
        pRipple
        pButton
        icon="pi pi-times"
        label="İptal"
        (click)="reject()"
        [ngClass]="'p-confirm-dialog-reject'"
      ></button>
      <button
        type="button"
        pRipple
        pButton
        icon="pi pi-check"
        label="Onay"
        (click)="accept()"
        [ngClass]="'p-confirm-dialog-accept'"
      ></button>
    </div>
  `,
  styles: [':host { margin: 0 -1.5rem -2rem -1.5rem; flex-grow: 1 }'],
})
export class ConfirmClickComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  reject(): void {
    this.ref.close(false);
  }

  accept(): void {
    this.ref.close(true);
  }
}
