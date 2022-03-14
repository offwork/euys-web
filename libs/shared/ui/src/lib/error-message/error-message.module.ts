import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';

import { ErrorMessageComponent } from './components/error-message.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [CommonModule, PanelModule],
  exports: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
