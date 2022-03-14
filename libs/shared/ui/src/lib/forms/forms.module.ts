import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { DesignSystemModule } from '../design-system/design-system.module';
import { CheckboxInputComponent } from './components/checkbox-input/checkbox-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { DropdownInputComponent } from './components/dropdown-input/dropdown-input.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { OverrideErrorPipe } from './pipes/override-error.pipe';

@NgModule({
  declarations: [
    CheckboxInputComponent,
    DateInputComponent,
    DropdownInputComponent,
    TextInputComponent,
    FormFieldDirective,
    OverrideErrorPipe,
    FormFieldErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoLocaleModule,
    DesignSystemModule,
  ],
  exports: [
    CheckboxInputComponent,
    DateInputComponent,
    DropdownInputComponent,
    TextInputComponent,
    FormFieldDirective,
    OverrideErrorPipe,
    FormFieldErrorComponent,
  ],
})
export class EuysFormsModule {}
