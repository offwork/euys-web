import { Component, OnDestroy, OnInit } from '@angular/core';
import { Isgucu } from '@euys/api-interfaces';
import { FormFieldSchema } from '@euys/shared/ui';
import { FormControl } from '@ngneat/reactive-forms';
import { Observable, Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { IsgucleriFacade } from '../+state/isgucleri.facade';
import { ManpowerInputEvent } from './models/manpower-input.model';

@Component({
  selector: 'euys-isgucu-giris',
  templateUrl: './isgucu-giris.component.html',
  styleUrls: ['./isgucu-giris.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'page-container' },
})
export class IsgucuGirisComponent implements OnDestroy, OnInit {
  loaded$: Observable<boolean>;
  valid$: Observable<boolean>;
  isGucleri$: Observable<Isgucu[]>;
  data$: Observable<Isgucu[]>;

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

  yil$ = this.filterFormFields[0].formControl.value$.pipe(
    filter(date => date instanceof Date),
    map(value => `${value.getFullYear()}`)
  );

  aylar = Array.from(Array(12).keys()).map(i => {
    const monthFormat = new Intl.DateTimeFormat('tr', {
      month: 'long',
    });
    return {
      id: String(i + 1).padStart(2, '0'),
      value: monthFormat.format(new Date(2000, i, 1)),
    };
  });

  tesisler = [
    { field: 'celikhaneIsgucu', value: 'Çelikhane' },
    { field: 'surekliIsgucu', value: 'Sürekli Dökümler' },
    { field: 'sicak1Isgucu', value: '1. Sıcak Haddehane' },
    { field: 'sicak2Isgucu', value: '2. Sıcak Haddehane' },
    { field: 'soguk1Isgucu', value: '1. Soğuk Haddehane' },
    { field: 'soguk2Isgucu', value: '2. Soğuk Haddehane' },
    { field: 'sinterIsgucu', value: 'Sinter' },
    { field: 'kokIsgucu', value: 'Kok' },
    { field: 'yuksekfirinIsgucu', value: 'Yüksek Fırınlar' },
  ];

  _endSubscription$ = new Subject<boolean>();

  constructor(private facade: IsgucleriFacade) {
    this.loaded$ = this.facade.loaded$;
    this.isGucleri$ = this.facade.allIsgucleri$;
    this.valid$ = this.facade.isValid$;
    this.data$ = this.facade.data$;
  }

  ngOnInit() {
    this.facade.init();
  }

  ngOnDestroy() {
    this._endSubscription$.next();
    this._endSubscription$.complete();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendCriteria(event: any) {
    this.facade.load(event.year);
  }

  onInputValue(event: ManpowerInputEvent) {
    console.log(event);
    this.facade.updateIsgucuGrid(event);
    this.facade.updateValidity();
  }

  clickOnSave() {
    this.data$
      .pipe(take(1), takeUntil(this._endSubscription$))
      .subscribe(data => {
        const validRows = data.filter(isgucu => {
          const {
            yil,
            ay,
            celikhaneIsgucu,
            kokIsgucu,
            sicak1Isgucu,
            sicak2Isgucu,
            sinterIsgucu,
            soguk1Isgucu,
            soguk2Isgucu,
            surekliIsgucu,
            yuksekfirinIsgucu,
          } = isgucu;

          const fields = [
            celikhaneIsgucu,
            kokIsgucu,
            sicak1Isgucu,
            sicak2Isgucu,
            sinterIsgucu,
            soguk1Isgucu,
            soguk2Isgucu,
            surekliIsgucu,
            yuksekfirinIsgucu,
          ];

          // TODO: validCheck1 & validCheck2 are both poor naming, they also need to be moved to the utility folder
          const validCheck1 = (input: unknown) =>
            typeof input === 'number' && input > 0;
          const validCheck2 = (input: unknown) =>
            input === null || input === undefined;

          return (
            /[0-9]{4}/.test(yil) &&
            /[0-9]{2}/.test(ay) &&
            (fields.every(validCheck1) || fields.every(validCheck2))
          );
        });

        if (validRows.length) {
          this.facade.saveIsgucuData(validRows);
        }
      });
  }
}
