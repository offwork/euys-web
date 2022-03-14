import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellModule } from '@euys/shared/app-shell';
import { UretimTakipRoutingModule } from './features-uretim-takip-routing.module';
import { UretimTakipFeatureShellComponent } from './components/uretim-takip-feature-shell.component';

@NgModule({
  imports: [CommonModule, UretimTakipRoutingModule, AppShellModule],
  declarations: [UretimTakipFeatureShellComponent],
})
export class FeaturesUretimTakipModule {}
