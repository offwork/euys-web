import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnActionButtonComponent } from './column-action-button.component';
import { DesignSystemModule } from '../..';

@NgModule({
  declarations: [ColumnActionButtonComponent],
  imports: [CommonModule, DesignSystemModule],
  exports: [ColumnActionButtonComponent],
})
export class ColumnActionButtonModule {}
