import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignSystemModule } from '../design-system/design-system.module';
import { EuysFormsModule } from '../forms/forms.module';
import { FilterBarComponent } from './components/filter-bar.component';

@NgModule({
  declarations: [FilterBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DesignSystemModule,
    EuysFormsModule,
  ],
  exports: [FilterBarComponent],
})
export class FilterBarModule {}
