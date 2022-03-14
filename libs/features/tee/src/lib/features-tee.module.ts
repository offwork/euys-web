import { NgModule } from '@angular/core';
import { AppShellModule } from '@euys/shared/app-shell';
import { DesignSystemModule } from '@euys/shared/ui';
import { TeeFeaturesComponent } from './components/tee-features.component';
import { FeaturesTeeRoutingModule } from './features-tee-routing.module';

@NgModule({
  imports: [DesignSystemModule, FeaturesTeeRoutingModule, AppShellModule],
  declarations: [TeeFeaturesComponent],
})
export class FeaturesTeeModule {}
