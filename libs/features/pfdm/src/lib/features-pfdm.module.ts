import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PFDMRoutingModule } from './features-pfdm-routing.module';
import { AppShellModule } from '@euys/shared/app-shell';
import { PFDMFeatureShellComponent } from './components/pfdm-feature-shell.component';

@NgModule({
  imports: [CommonModule, PFDMRoutingModule, AppShellModule],
  declarations: [PFDMFeatureShellComponent],
})
export class FeaturesPfdmModule {}
