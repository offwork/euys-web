import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldInfoComponent } from './form-field-info.component';

@NgModule({
  declarations: [FormFieldInfoComponent],
  imports: [CommonModule, DesignSystemModule, ReactiveFormsModule],
  exports: [FormFieldInfoComponent],
})
export class FormFieldInfoModule {}
