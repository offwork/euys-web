import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GecikmeChartComponent } from './components/gecikme-chart/gecikme-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [GecikmeChartComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [GecikmeChartComponent],
})
export class ChartsModule {}
