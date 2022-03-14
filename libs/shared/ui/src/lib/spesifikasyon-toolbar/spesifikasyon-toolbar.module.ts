import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignSystemModule } from '../design-system/design-system.module';
import { SpesifikasyonToolbarComponent } from './components/spesifikasyon-toolbar/spesifikasyon-toolbar.component';

@NgModule({
  declarations: [SpesifikasyonToolbarComponent],
  imports: [CommonModule, DesignSystemModule],
  exports: [SpesifikasyonToolbarComponent],
})
export class SpesifikasyonToolbarModule {}
