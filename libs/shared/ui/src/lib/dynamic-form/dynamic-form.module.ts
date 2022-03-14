import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignSystemModule } from '../design-system/design-system.module';
import { SelectOptionsPipe } from './pipes/select-options.pipe';

@NgModule({
  declarations: [DynamicFormComponent, SelectOptionsPipe],
  exports: [DynamicFormComponent, SelectOptionsPipe],
  imports: [CommonModule, DesignSystemModule, ReactiveFormsModule],
})
export class DynamicFormModule {}
