import { Component, OnInit } from '@angular/core';
import { DataTableGecikme, FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SogukTarihGecikmeAnaliziFacade } from '../+state/soguk-tarih-gecikme-analizi.facade';

@Component({
  selector: 'euys-soguk-tarih-gecikme-analizi',
  templateUrl: './soguk-tarih-gecikme-analizi.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class SogukTarihGecikmeAnaliziComponent implements OnInit {
  loaded$: Observable<boolean>;
  gecikmeSoguk1$: Observable<DataTableGecikme[]>;
  gecikmeIkmal$: Observable<DataTableGecikme[]>;
  gecikmeSoguk2$: Observable<DataTableGecikme[]>;
  baslangic: Date;
  bitis: Date;
  dateRangeDescriptionSoguk1!: string;
  dateRangeDescriptionIkmal!: string;
  dateRangeDescriptionSoguk2!: string;

  // New form schema
  filterFormFields: FormFieldSchema[] = [
    {
      formControl: new FormControl<Date[]>(),
      inputId: 'range',
      label: 'Tarih Aralığı Seçin',
      horizontal: true,
      type: 'range',
      view: 'date',
      selectionMode: 'range',
      yearNavigator: true,
      yearRange: '2000:2030',
    },
  ];

  constructor(private facade: SogukTarihGecikmeAnaliziFacade) {
    this.loaded$ = this.facade.loaded$;
    this.gecikmeSoguk1$ = this.facade.allSoguk1TarihGecikmeAnalizi$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );
    this.gecikmeIkmal$ = this.facade.allIkmalTarihGecikmeAnalizi$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );
    this.gecikmeSoguk2$ = this.facade.allSoguk2TarihGecikmeAnalizi$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }) => ({
          baslik: tesisAd,
          gecikmeler: detay,
        })) as DataTableGecikme[];
      })
    );
  }

  ngOnInit() {
    this.facade.init();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickOnContinue(event: any) {
    this.baslangic = event.range[0];
    this.bitis = event.range[1];
    this.dateRangeDescriptionSoguk1 = `${this.baslangic.toLocaleDateString(
      'tr-TR'
    )} – ${this.bitis.toLocaleDateString(
      'tr-TR'
    )} 1. Soğuk Haddehane Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.dateRangeDescriptionIkmal = `${this.baslangic.toLocaleDateString(
      'tr-TR'
    )} – ${this.bitis.toLocaleDateString(
      'tr-TR'
    )} İkmal Tesisleri Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.dateRangeDescriptionSoguk2 = `${this.baslangic.toLocaleDateString(
      'tr-TR'
    )} – ${this.bitis.toLocaleDateString(
      'tr-TR'
    )} 2. Soğuk Haddehane Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.facade.load(this.baslangic, this.bitis);
  }
}
