import { Component, OnInit } from '@angular/core';
import { DataTableGecikme, FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DuTarihGecikmeAnaliziFacade } from '../+state/du-tarih-gecikme-analizi.facade';

@Component({
  selector: 'euys-du-tarih-gecikme-analizi',
  templateUrl: './du-tarih-gecikme-analizi.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class DuTarihGecikmeAnaliziComponent implements OnInit {
  loaded$: Observable<boolean>;
  gecikme$: Observable<DataTableGecikme[]>;
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

  constructor(private facade: DuTarihGecikmeAnaliziFacade) {
    this.loaded$ = this.facade.loaded$;
    this.gecikme$ = this.facade.allTarihGecikmeAnalizi$.pipe(
      map(data => {
        if (!data) return [];
        return data.map(tesisGecikme => ({
          baslik: tesisGecikme.tesisAd,
          gecikmeler: tesisGecikme.detay,
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
    this.dateRangeDescription = `${this.baslangic.toLocaleDateString(
      'tr-TR'
    )} – ${this.bitis.toLocaleDateString(
      'tr-TR'
    )} Demir Üretim Detay Gecikme / Duruş Saatleri Tablosu (Duruş Saatine Göre İlk 10)`;
    this.facade.load(this.baslangic, this.bitis);
  }
}
