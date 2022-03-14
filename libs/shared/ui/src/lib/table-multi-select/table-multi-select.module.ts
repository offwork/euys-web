import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMultiSelectComponent } from './components/table-multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { SkeletonModule } from 'primeng/skeleton';
import { TableMultiSelectItemDirective } from './directives/table-multi-select-item.directive';
import { RemoveWhitespacePipe } from './pipes/remove-whitespace.pipe';
import { ReplaceWhitespacePipe } from './pipes/replace-whitespace.pipe';

@NgModule({
  declarations: [
    TableMultiSelectComponent,
    TableMultiSelectItemDirective,
    RemoveWhitespacePipe,
    ReplaceWhitespacePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CheckboxModule,
    SkeletonModule,
  ],
  exports: [TableMultiSelectComponent, TableMultiSelectItemDirective],
})
export class TableMultiSelectModule {}
