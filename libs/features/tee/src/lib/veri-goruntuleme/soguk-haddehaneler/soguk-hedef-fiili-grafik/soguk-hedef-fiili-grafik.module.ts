import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeeHedefFiiliGrafikModule } from '../../tee-hedef-fiili-grafik/tee-hedef-fiili-grafik.module';
import { SogukHedefFiiliGrafikComponent } from './container/soguk-hedef-fiili-grafik.component';

@NgModule({
  declarations: [SogukHedefFiiliGrafikComponent],
  imports: [
    CommonModule,
    TeeHedefFiiliGrafikModule,
    RouterModule.forChild([{ path: '', component: SogukHedefFiiliGrafikComponent }]),
  ],
})
export class SogukHedefFiiliGrafikModule {}
