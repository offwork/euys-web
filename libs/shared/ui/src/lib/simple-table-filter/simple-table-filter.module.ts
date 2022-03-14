import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleTableFilterComponent } from './simple-table-filter.component';

@NgModule({
  declarations: [SimpleTableFilterComponent],
  imports: [CommonModule, DesignSystemModule, FormsModule, ReactiveFormsModule],
  exports: [SimpleTableFilterComponent],
})
export class SimpleTableFilterModule {}
