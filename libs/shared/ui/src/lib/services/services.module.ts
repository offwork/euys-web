import { CommonModule } from '@angular/common';
import { FilteringAlgorithmsService } from './filtering-algorithms.service';
import { FormValidationService } from './form-validation.service';
import { NgModule } from '@angular/core';
import { TableColumnExpanderService } from './table-column.service';

@NgModule({
  providers: [
    FilteringAlgorithmsService,
    FormValidationService,
    TableColumnExpanderService,
  ],
  imports: [CommonModule],
})
export class ServicesModule {}
