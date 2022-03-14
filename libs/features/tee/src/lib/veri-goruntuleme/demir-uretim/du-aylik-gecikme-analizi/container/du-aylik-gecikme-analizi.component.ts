import { Component, OnInit } from '@angular/core';
import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { DataTableGecikme, FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DuAylikGecikmeAnaliziFacade } from '../+state/du-aylik-gecikme-analizi.facade';

@Component({
  selector: 'euys-du-aylik-gecikme-analizi',
  templateUrl: './du-aylik-gecikme-analizi.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class DuAylikGecikmeAnaliziComponent implements OnInit {
  allAylikGecikmeAnalizi$: Observable<AylikGecikmeAnalizi>;
  aylikGecikme$: Observable<DataTableGecikme[]>;
  yillikGecikme$: Observable<DataTableGecikme[]>;
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
  loaded$: Observable<boolean>;

  monthDescription!: string;
  yearDescription!: string;

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

  constructor(private facade: DuAylikGecikmeAnaliziFacade) {
    this.loaded$ = this.facade.loaded$;
    this.allAylikGecikmeAnalizi$ = this.facade.allAylikGecikmeAnalizi$;
    this.aylikGecikme$ = this.allAylikGecikmeAnalizi$.pipe(
      map(data => {
        if (!data) return [];
        return data.aylik.map(({ tesisAd, detay }) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );

    this.yillikGecikme$ = this.allAylikGecikmeAnalizi$.pipe(
      map(data => {
        if (!data) return [];
        return data.yillik.map(({ tesisAd, detay }) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );
  }

  ngOnInit(): void {
    this.facade.init();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickOnContinue(event: any) {
    const { year, month } = event;
    this.year = year;
    this.month = this.months[month - 1];
    this.monthDescription = `${this.year} ${this.month} Ayı Demir Üretim Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.yearDescription = `${this.year} Yılı Birikimli Demir Üretim Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.facade.getAylikGecikmeAnalizi(year, month);
  }
}
