import { NgModule } from '@angular/core';
import { AppShellModule } from '@euys/shared/app-shell';
import { UretimPlanlamaRoutingModule } from './features-uretim-planlama-routing.module';
import { UretimPlanlamaFeatureShellComponent } from './components/uretim-planlama-feature-shell.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, UretimPlanlamaRoutingModule, AppShellModule],
  declarations: [UretimPlanlamaFeatureShellComponent],
})
export class FeaturesUretimPlanlamaModule {}
