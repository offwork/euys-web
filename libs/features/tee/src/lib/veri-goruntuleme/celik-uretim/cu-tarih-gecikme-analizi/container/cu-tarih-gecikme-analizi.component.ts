import { Component, OnInit } from '@angular/core';
import { DataTableGecikme, FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CuTarihGecikmeAnaliziFacade } from '../+state/cu-tarih-gecikme-analizi.facade';

@Component({
  selector: 'euys-cu-tarih-gecikme-analizi',
  templateUrl: './cu-tarih-gecikme-analizi.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class CuTarihGecikmeAnaliziComponent implements OnInit {
  gecikme$: Observable<DataTableGecikme[]>;
  loaded$: Observable<boolean>;
  baslangic: Date;
  bitis: Date;
  dateRangeDescription!: string;

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

  constructor(private facade: CuTarihGecikmeAnaliziFacade) {
    this.loaded$ = this.facade.loaded$;
    this.gecikme$ = this.facade.allTarihGecikmeAnalizi$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(({ tesisAd, detay }) => ({
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
    this.baslangic = event.range[0];
    this.bitis = event.range[1];
    this.dateRangeDescription = `${this.baslangic.toLocaleDateString(
      'tr-TR'
    )} – ${this.bitis.toLocaleDateString(
      'tr-TR'
    )} Çelik Üretim Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.facade.load(this.baslangic, this.bitis);
  }
}
