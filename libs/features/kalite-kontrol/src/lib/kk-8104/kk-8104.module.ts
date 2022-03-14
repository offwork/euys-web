import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kk8104Component } from './container/kk-8104.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromKk8104 from './+state/kk-8104.reducer';
import { Kk8104Effects } from './+state/kk-8104.effects';
import { Kk8104Facade } from './+state/kk-8104.facade';
import { Kk8104Service } from './service/kk-8104.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@euys/shared/ui';
import { RouterModule, Routes } from '@angular/router';
import { OprBilgilendirmeGuncellemeSilmeComponent } from './components/opr-bilgilendirme-guncelleme-silme/opr-bilgilendirme-guncelleme-silme.component';
import { OprBilgilendirmeGuncellemeComponent } from './components/opr-bilgilendirme-guncelleme/opr-bilgilendirme-guncelleme.component';
import { OverlayModule } from '@angular/cdk/overlay';

const routes: Routes = [{ path: '', component: Kk8104Component }];

@NgModule({
  declarations: [
    Kk8104Component,
    OprBilgilendirmeGuncellemeSilmeComponent,
    OprBilgilendirmeGuncellemeComponent,
  ],
  imports: [
    OverlayModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    StoreModule.forFeature(fromKk8104.KK_8104_FEATURE_KEY, fromKk8104.reducer),
    EffectsModule.forFeature([Kk8104Effects]),
    RouterModule.forChild(routes),
  ],
  providers: [Kk8104Facade, Kk8104Service],
})
export class Kk8104Module {}
