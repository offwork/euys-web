import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { YuzeyKusurKaydiComponent } from './components/yuzey-kusur-kaydi/yuzey-kusur-kaydi.component';
import { YuzeyKusurKaydiDialogComponent } from './components/yuzey-kusur-kaydi-dialog/yuzey-kusur-kaydi-dialog.component';
import { KaliteKontrolGorselService } from './services/kalite-kontrol-gorsel.service';

@NgModule({
  declarations: [YuzeyKusurKaydiComponent, YuzeyKusurKaydiDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedUiModule],
  exports: [YuzeyKusurKaydiComponent, YuzeyKusurKaydiDialogComponent],
  providers: [KaliteKontrolGorselService],
})
export class FeaturesKaliteKontrolSharedModule {}
