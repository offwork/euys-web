import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HsmBobinKalinlikDegerleriComponent } from './components/hsm-bobin-kalinlik-degerleri/hsm-bobin-kalinlik-degerleri.component';
import { SicakHaddelemeComponent } from './components/sicak-haddeleme/sicak-haddeleme.component';
import { SharedUiModule } from '@euys/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { BagimsizNumuneListComponent } from './components/bagimsiz-numune-list/bagimsiz-numune-list.component';
import { BagimsizMesajlarListComponent } from './components/bagimsiz-mesajlar-list/bagimsiz-mesajlar-list.component';
import { QcKayitKararComponent } from './components/qc-kayit-karar/qc-kayit-karar.component';
import { KabaHaddelemePasoDialogComponent } from './components/kaba-haddeleme-dialog/kaba-haddeleme-dialog.component';

@NgModule({
  declarations: [
    HsmBobinKalinlikDegerleriComponent,
    SicakHaddelemeComponent,
    BagimsizNumuneListComponent,
    BagimsizMesajlarListComponent,
    QcKayitKararComponent,
    KabaHaddelemePasoDialogComponent,
  ],
  imports: [ReactiveFormsModule, SharedUiModule, CommonModule],
  exports: [
    HsmBobinKalinlikDegerleriComponent,
    SicakHaddelemeComponent,
    BagimsizNumuneListComponent,
    BagimsizMesajlarListComponent,
    QcKayitKararComponent,
    KabaHaddelemePasoDialogComponent,
  ],
})
export class HsmModule {}
