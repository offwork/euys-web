import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeeHedefFiiliGrafikModule } from '../../tee-hedef-fiili-grafik/tee-hedef-fiili-grafik.module';
import { DuHedefFiiliGrafikComponent } from './container/du-hedef-fiili-grafik.component';

@NgModule({
  declarations: [DuHedefFiiliGrafikComponent],
  imports: [
    CommonModule,
    TeeHedefFiiliGrafikModule,
    RouterModule.forChild([{ path: '', component: DuHedefFiiliGrafikComponent }]),
  ],
})
export class DuHedefFiiliGrafikModule {}
