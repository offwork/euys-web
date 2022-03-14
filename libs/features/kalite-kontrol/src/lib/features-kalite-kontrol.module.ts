import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellModule } from '@euys/shared/app-shell';
import { KaliteKontrolRoutingModule } from './features-kalite-kontrol-routing.module';
import { FeaturesKaliteKontrolSharedModule } from './shared/features-kalite-kontrol-shared.module';

@NgModule({
  imports: [
    CommonModule,
    KaliteKontrolRoutingModule,
    AppShellModule,
    FeaturesKaliteKontrolSharedModule,
  ],
  declarations: [],
})
export class KaliteKontrolModule {}
