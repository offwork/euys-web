import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { IFrameComponent } from './iframe.component';

@NgModule({
  declarations: [IFrameComponent],
  imports: [CommonModule, DesignSystemModule],
  exports: [IFrameComponent],
})
export class IFrameModule {}
