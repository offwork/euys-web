import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../../design-system/design-system.module';
import { StyledPanelComponent } from './styled-panel.component';

@NgModule({
  declarations: [StyledPanelComponent],
  imports: [CommonModule, DesignSystemModule],
  exports: [StyledPanelComponent],
})
export class StyledPanelModule {}
