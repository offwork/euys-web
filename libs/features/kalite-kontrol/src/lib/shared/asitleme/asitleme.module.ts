import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CplHattiComponent } from './components/cpl-hatti/cpl-hatti.component';
import { PplHattiComponent } from './components/ppl-hatti/ppl-hatti.component';
import { SharedUiModule } from '@euys/shared/ui';

@NgModule({
  declarations: [CplHattiComponent, PplHattiComponent],
  imports: [CommonModule, SharedUiModule],
  exports: [CplHattiComponent, PplHattiComponent],
})
export class AsitlemeModule {}
