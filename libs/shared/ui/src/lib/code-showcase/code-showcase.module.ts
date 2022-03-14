import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

import { CodeShowcaseComponent } from './components/code-showcase/code-showcase.component';

@NgModule({
  declarations: [CodeShowcaseComponent],
  imports: [CommonModule, ClipboardModule, PanelModule, TabViewModule, TooltipModule],
  exports: [CodeShowcaseComponent],
})
export class CodeShowcaseModule {}
