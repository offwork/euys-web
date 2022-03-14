import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeHeaderComponent } from './free-header.component';
import { DesignSystemModule } from '../../design-system/design-system.module';

@NgModule({
  declarations: [FreeHeaderComponent],
  imports: [CommonModule, DesignSystemModule],
  exports: [FreeHeaderComponent],
})
export class FreeHeaderModule {}
