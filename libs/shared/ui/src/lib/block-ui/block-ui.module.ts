import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { BlockUiComponent } from './block-ui.component';

@NgModule({
  declarations: [BlockUiComponent],
  imports: [CommonModule, DesignSystemModule],
  exports: [BlockUiComponent],
})
export class BlockUiModule {}
