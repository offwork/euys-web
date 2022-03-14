/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormFieldSchema } from '@euys/shared/ui';
import { range } from '@euys/shared/utility';
import { FormControl } from '@ngneat/reactive-forms';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YillikUretimPlaniFacade } from '../+state/yillik-uretim-plani.facade';
import { YillikUretimPlaniItem } from '../+state/yillik-uretim-plani.models';

/* TODO: any tipi kullanimi kisitlanmali... */
@Component({
  selector: 'euys-yillik-uretim-plani',
  templateUrl: './yillik-uretim-plani.component.html',
  styleUrls: ['./yillik-uretim-plani.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class YillikUretimPlaniComponent implements OnInit {
  filterFormResult: any;
  header!: string;
  loaded$ = this.facade.loaded$;
  hummanMassage: Message[] = [
    {
      severity: 'warn',
      summary: 'Dikkat',
      detail: 'Görüntülenecek her hangi bir sonuç bulunamadı!',
    },
  ];
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
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yillikUretimTable$: Observable<YillikUretimPlaniItem[]>;
  aylar = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayis',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasim',
    'Aralik',
  ];
  columns = [
    'hat',
    'aylikBilgi-0',
    'aylikBilgi-1',
    'aylikBilgi-2',
    'aylikBilgi-3',
    'aylikBilgi-4',
    'aylikBilgi-5',
    'aylikBilgi-6',
    'aylikBilgi-7',
    'aylikBilgi-8',
    'aylikBilgi-9',
    'aylikBilgi-10',
    'aylikBilgi-11',
  ];

  constructor(private facade: YillikUretimPlaniFacade) {}

  ngOnInit() {
    this.yillikUretimTable$ = this.facade.yillikUretimPlani$.pipe(
      map(responseModel => {
        // console.log('responseModel', responseModel);
        const data = responseModel;

        let result = {} as any;

        data.forEach((i: any) => {
          result[i.hatKodu] = result[i.hatKodu] || {
            hatKodu: i.hatKodu,
            unite: i.unite,
            aylikBilgiler: range(0, 12).map(() => 0),
          };
          result[i.hatKodu].aylikBilgiler[i.ay - 1] = i.planton;
        });

        result = Object.keys(result)
          .sort((a, b) => a.localeCompare(b))
          .map(i => result[i]);

        // console.log(result);

        return result;
      })
    );
  }

  clickOnContinue(event: any) {
    this.filterFormResult = event;
    // console.log('filterFormResul', this.filterFormResult);
    this.header = `${this.filterFormResult.year} ERDEMİR YILLIK ÜRETİM PLANI (TON)`;
    this.facade.load(event.year);
  }
}
