/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { Line } from '@euys/api-interfaces';
import {
  ChartsGecikme,
  FilterFormSchema,
  FormFieldSchema,
} from '@euys/shared/ui';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HedefFiiliGrafikFacade } from '../+state/hedef-fiili-grafik.facade';

@Component({
  selector: 'euys-tee-hedef-fiili-grafik',
  templateUrl: './tee-hedef-fiili-grafik.component.html',
  styleUrls: ['./tee-hedef-fiili-grafik.component.scss'],
})
export class TeeHedefFiiliGrafikComponent implements OnInit {
  @Input() productLineGroup: string;

  filterForm = new FormGroup<FilterFormSchema>({
    year: new FormControl<Date>(null),
    line: new FormControl<string>(null),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterFormResult: any;

  loaded$ = this.facade.loaded$;
  productLines$: Observable<Array<Line>>;

  chartTee$: Observable<ChartsGecikme>;
  chartNetCalisma$: Observable<ChartsGecikme>;
  chartPerformans$: Observable<ChartsGecikme>;
  chartKalite$: Observable<ChartsGecikme>;

  /* TEST FILTERBAR */
  filterFormFields: FormFieldSchema[];
  /* END */

  constructor(private facade: HedefFiiliGrafikFacade) {}

  ngOnInit() {
    this.facade.init();
    this.initGrafik();
  }

  initGrafik() {
    this.productLines$ = this.facade.lines$.pipe(
      map((data: any) =>
        (data ?? [])
          .filter(
            (i: any) =>
              !this.productLineGroup ||
              `${i?.grup}` === `${this.productLineGroup}`
          )
          .sort((a: any, b: any) => a.hatUzunAdi?.localeCompare(b.hatUzunAdi))
      )
    );

    this.filterFormFields = [
      {
        formControl: new FormControl<Date>(),
        inputId: 'year',
        label: 'Yıl Seçin',
        dateFormat: 'yy',
        horizontal: true,
        type: 'year',
        view: 'month',
        yearNavigator: true,
        yearRange: '2000:2030',
      },
      {
        formControl: new FormControl<any>(),
        inputId: 'hatlar',
        label: 'Hatlar',
        placeholder: 'Bir Hat Seçin...',
        horizontal: true,
        type: 'array',
        options: this.productLines$,
        optionLabel: 'hatUzunAdi',
        showClear: true,
      },
    ];

    this.chartTee$ = this.facade.hedefFiiliGrafik$.pipe(
      map(data => {
        return {
          baslik: 'TEE (%)',
          yil: this.filterFormResult.year,
          oncekiYilHedef: data.gecenYilaAitFiiliOranlar?.tee,
          simdikiYilHedef: data.buYilaAitHedefDegerleri?.tee,
          simdikiYilFiili: data.buYilaAitFiiliOranlar?.tee,
          aylikVeri: data.aylikFiiliOranlar?.map(i => i.tee),
        } as ChartsGecikme;
      })
    );

    this.chartNetCalisma$ = this.facade.hedefFiiliGrafik$.pipe(
      map(data => {
        return {
          baslik: 'Net Çalışma Oranı (%)',
          yil: this.filterFormResult.year,
          oncekiYilHedef: data.gecenYilaAitFiiliOranlar?.nco,
          simdikiYilHedef: data.buYilaAitHedefDegerleri?.nco,
          simdikiYilFiili: data.buYilaAitFiiliOranlar?.nco,
          aylikVeri: data.aylikFiiliOranlar?.map(i => i.nco),
        } as ChartsGecikme;
      })
    );

    this.chartPerformans$ = this.facade.hedefFiiliGrafik$.pipe(
      map(data => {
        return {
          baslik: 'Performans Oranı (%)',
          yil: this.filterFormResult.year,
          oncekiYilHedef: data.gecenYilaAitFiiliOranlar?.po,
          simdikiYilHedef: data.buYilaAitHedefDegerleri?.po,
          simdikiYilFiili: data.buYilaAitFiiliOranlar?.po,
          aylikVeri: data.aylikFiiliOranlar?.map(i => i.po),
        } as ChartsGecikme;
      })
    );

    this.chartKalite$ = this.facade.hedefFiiliGrafik$.pipe(
      map(data => {
        return {
          baslik: 'Kalite Oranı (%)',
          yil: this.filterFormResult.year,
          oncekiYilHedef: data.gecenYilaAitFiiliOranlar?.ko,
          simdikiYilHedef: data.buYilaAitHedefDegerleri?.ko,
          simdikiYilFiili: data.buYilaAitFiiliOranlar?.ko,
          aylikVeri: data.aylikFiiliOranlar?.map(i => i.ko),
        } as ChartsGecikme;
      })
    );
  }

  submit($event: any) {
    if ($event) {
      const { hatlar } = $event;
      this.filterFormResult = $event;
      console.log('HATLAR: ', $event);
      this.facade.load($event.year, hatlar?.hatKodu);
    }
  }
}
