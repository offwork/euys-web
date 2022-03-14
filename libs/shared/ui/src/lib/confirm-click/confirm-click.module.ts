import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmClickComponent } from './confirm-click.component';
import { ConfirmClickDirective } from './confirm-click.directive';

@NgModule({
  declarations: [ConfirmClickComponent, ConfirmClickDirective],
  imports: [CommonModule, DynamicDialogModule, ButtonModule],
  exports: [ConfirmClickDirective],
})
export class ConfirmClickModule {}
