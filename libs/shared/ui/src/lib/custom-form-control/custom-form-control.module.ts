import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignSystemModule } from '../design-system/design-system.module';
import { YearPickerComponent } from './components/year-picker.component';
import { PicklistFormControlDirective } from './directives/picklist-form-control.directive';

@NgModule({
  declarations: [PicklistFormControlDirective, YearPickerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DesignSystemModule],
  exports: [PicklistFormControlDirective, YearPickerComponent],
})
export class CustomFormControlModule {}
