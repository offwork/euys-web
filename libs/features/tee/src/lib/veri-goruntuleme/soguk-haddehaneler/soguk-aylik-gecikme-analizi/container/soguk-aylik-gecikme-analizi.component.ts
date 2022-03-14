/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { DataTableGecikme, FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SogukAylikGecikmeAnaliziFacade } from '../+state/soguk-aylik-gecikme-analizi.facade';

@Component({
  selector: 'euys-soguk-aylik-gecikme-analizi',
  templateUrl: './soguk-aylik-gecikme-analizi.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class SogukAylikGecikmeAnaliziComponent implements OnInit {
  loaded$: Observable<boolean>;
  aylikSoguk1Gecikme$: Observable<DataTableGecikme[]>;
  aylikIkmalGecikme$: Observable<DataTableGecikme[]>;
  aylikSoguk2Gecikme$: Observable<DataTableGecikme[]>;
  yillikSoguk1Gecikme$: Observable<DataTableGecikme[]>;
  yillikIkmalGecikme$: Observable<DataTableGecikme[]>;
  yillikSoguk2Gecikme$: Observable<DataTableGecikme[]>;

  months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  year = new Date().getFullYear();
  month = this.months[new Date().getMonth()];
  monthDescriptionSoguk1!: string;
  yearDescriptionSoguk1!: string;
  monthDescriptionIkmal!: string;
  yearDescriptionIkmal!: string;
  monthDescriptionSoguk2!: string;
  yearDescriptionSoguk2!: string;

  // New form schema
  filterFormFields: FormFieldSchema[] = [
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
      formControl: new FormControl<Date>(),
      inputId: 'month',
      label: 'Ay Seçin',
      dateFormat: 'mm',
      horizontal: true,
      type: 'month',
      view: 'month',
      yearNavigator: true,
      yearRange: '2000:2030',
    },
  ];

  constructor(private facade: SogukAylikGecikmeAnaliziFacade) {
    this.loaded$ = this.facade.loaded$;
    this.aylikSoguk1Gecikme$ = this.facade.aylikSoguk1$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }: any) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );

    this.aylikIkmalGecikme$ = this.facade.aylikIkmal$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }: any) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );

    this.aylikSoguk2Gecikme$ = this.facade.aylikSoguk2$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }: any) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );

    this.yillikSoguk1Gecikme$ = this.facade.yillikSoguk1$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }: any) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );

    this.yillikIkmalGecikme$ = this.facade.yillikIkmal$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }: any) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );

    this.yillikSoguk2Gecikme$ = this.facade.yillikSoguk2$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }: any) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );
  }

  ngOnInit() {
    this.facade.init();
  }

  clickOnContinue(event: any) {
    const { year, month } = event;
    this.year = year;
    this.month = this.months[month - 1];
    this.monthDescriptionSoguk1 = `${this.year} ${this.month} Ayı 1. Soğuk Haddehane Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.yearDescriptionSoguk1 = `${this.year} Yılı Birikimli 1. Soğuk Haddehane Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.monthDescriptionIkmal = `${this.year} ${this.month} Ayı İkmal Tesisleri Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.yearDescriptionIkmal = `${this.year} Yılı Birikimli İkmal Tesisleri Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.monthDescriptionSoguk2 = `${this.year} ${this.month} Ayı 2. Soğuk Haddehane Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.yearDescriptionSoguk2 = `${this.year} Yılı Birikimli 2. Soğuk Haddehane Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.facade.getAylikGecikmeAnalizi(year, month);
  }
}
