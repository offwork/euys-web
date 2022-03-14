import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { TeeHedefFiiliGrafikModule } from '../../tee-hedef-fiili-grafik/tee-hedef-fiili-grafik.module';
import { CuHedefFiiliGrafikComponent } from './container/cu-hedef-fiili-grafik.component';

@NgModule({
  declarations: [CuHedefFiiliGrafikComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    TeeHedefFiiliGrafikModule,
    RouterModule.forChild([{ path: '', component: CuHedefFiiliGrafikComponent }]),
  ],
})
export class CuHedefFiiliGrafikModule {}
