import { AppShellModule } from '@euys/shared/app-shell';
import { DesignSystemModule } from '@euys/shared/ui';
import { KtFeatureShellComponent } from './components/kt-feature-shell.component';
import { KtSpecsRoutingModule } from './features-kt-specs-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [DesignSystemModule, KtSpecsRoutingModule, AppShellModule],
  declarations: [KtFeatureShellComponent],
})
export class KtSpecsModule {}
