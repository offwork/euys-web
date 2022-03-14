import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumnExpanderComponent } from './table-column-expander.component';

@NgModule({
  declarations: [TableColumnExpanderComponent],
  exports: [TableColumnExpanderComponent],
  imports: [CommonModule],
})
export class TableColumnExpanderModule {}
