/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { ChartsGecikme } from '../../models/charts-gecikme.models';

@Component({
  selector: 'euys-charts-gecikme',
  templateUrl: './gecikme-chart.component.html',
  styleUrls: ['./gecikme-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'charts-container',
  },
})
export class GecikmeChartComponent implements OnInit, OnChanges {
  options: any;
  @Input() data: ChartsGecikme;

  ngOnInit() {
    this.initChart();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges) {
    this.initChart();
  }

  initChart() {
    if (!this.data) return;

    const title = this.data.baslik;
    const year = this.data.yil;
    const barData = [
      this.data.oncekiYilHedef,
      this.data.simdikiYilHedef,
      this.data.simdikiYilFiili,
    ];
    const lineData = this.data.aylikVeri;

    const xAxisData = [
      '{prevYear}',
      '{year}\nHedef',
      '{year}\nFiili',
      '{year}\nOcak',
      '{year}\nŞubat',
      '{year}\nMart',
      '{year}\nNisan',
      '{year}\nMayıs',
      '{year}\nHaziran',
      '{year}\nTemmuz',
      '{year}\nAğustos',
      '{year}\nEylül',
      '{year}\nEkim',
      '{year}\nKasım',
      '{year}\nAralık',
    ];

    const dataBar: any[] = [];
    const dataLine = [...barData.map(_ => null), ...lineData];
    const dataXAxis = xAxisData.map(i =>
      i.replace('{year}', `${year}`).replace('{prevYear}', `${year - 1}`)
    );

    const labelTemplate = {
      show: true,
      position: 'top',
      verticalAlign: 'middle',
      offset: [25, 0],
      rotate: 90,
      fontSize: 14,
      color: '#7c7c7c',
      fontWeight: 'bold',
      formatter: function (params: any) {
        const data = parseFloat(params.value);
        return data.toLocaleString('tr-TR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      },
    };

    for (let i = 0; i < barData.length; i++) {
      dataBar[i] = {
        value: barData[i],
        itemStyle: {
          color: i % 2 === 0 ? '#002060' : '#ed7e31',
        },
        label: {
          ...labelTemplate,
          color: i % 2 === 0 ? '#002060' : '#ed7e31',
        },
      };
    }

    // Calculation of max value of y axis
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const yAxisMaxValue = Math.max(
      100,
      Math.ceil(Math.max(...dataBar) / 20) * 20
    );

    this.options = {
      title: {
        text: title,
        left: 'center',
      },
      grid: {
        top: 100,
      },
      tooltip: {},
      xAxis: {
        data: dataXAxis,
        silent: false,
        splitLine: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          fontSize: 9,
        },
      },
      yAxis: {
        max: yAxisMaxValue,
        splitNumber: yAxisMaxValue / 20,
      },
      series: [
        {
          type: 'bar',
          data: dataBar,
          animationDelay: (idx: number) => idx * 10,
        },
        {
          type: 'line',
          color: '#7c7c7c',
          data: dataLine,
          label: {
            ...labelTemplate,
          },
          lineStyle: {
            width: 4,
          },
          animationDelay: (idx: number) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }
}
