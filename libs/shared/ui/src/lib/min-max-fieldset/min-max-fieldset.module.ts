import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinMaxFieldsetComponent } from './min-max-fieldset.component';
import { FormFieldInfoModule } from '../form-field-info/form-field-info.module';

@NgModule({
  declarations: [MinMaxFieldsetComponent],
  imports: [
    CommonModule,
    DesignSystemModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldInfoModule,
  ],
  exports: [MinMaxFieldsetComponent],
})
export class MinMaxFieldsetModule {}
