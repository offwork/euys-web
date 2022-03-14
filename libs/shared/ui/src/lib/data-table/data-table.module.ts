import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { GecikmeTableComponent } from './components/gecikme-table/gecikme-table.component';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

@NgModule({
  declarations: [GecikmeTableComponent],
  exports: [GecikmeTableComponent],
  imports: [CommonModule, DesignSystemModule, TranslocoLocaleModule],
})
export class DataTableModule {}
