import { Component, Input, OnInit } from '@angular/core';
import { CMSMPratigiBilgileri } from '@euys/api-interfaces';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
@Component({
  selector: 'euys-sm-pratigi-list',
  templateUrl: './sm-pratigi-list.component.html',
})
export class SmPratigiListComponent implements OnInit {
  @Input() smPratigiList$: Observable<CMSMPratigiBilgileri[]>;
  @Input() smPratigiListLoaded$: Observable<boolean>;

  dummyList: CMSMPratigiBilgileri[] = new Array(11);

  smPratigiList: CMSMPratigiBilgileri[];

  pasoNoList: string[];

  constructor() {
    this.pasoNoList = [
      'deger1',
      'deger2',
      'deger3',
      'deger4',
      'deger5',
      'deger6',
      'deger7',
      'deger8',
      'deger9',
    ];
  }

  ngOnInit(): void {
    if (this.smPratigiList$) {
      this.smPratigiList$
        .pipe(
          map(list => {
            if (list)
              return list.map(listEl => {
                const parsedModel: any = { ...listEl };
                for (const [key, value] of Object.entries(parsedModel)) {
                  if (
                    this.pasoNoList.findIndex(paso => {
                      if (paso === key) return true;
                    }) > -1 &&
                    listEl.pratikAdi === 'Has'
                  )
                    parsedModel[key] = {
                      badge: true,
                      cssIndicator: value === 'H' ? 'var' : 'yok',
                      text: value === 'H' ? 'VAR' : 'YOK',
                    };
                  else {
                    parsedModel[key] = {
                      badge: false,
                      cssIndicator: null,
                      text: value,
                    };
                  }
                  parsedModel.spanKey = 1;
                }
                if (listEl.pratikAdi === 'Kalınlık') parsedModel.spanKey = 2;
                else if (listEl.pratikAdi === 'Sıcaklık')
                  parsedModel.spanKey = 3;
                else if (listEl.pratikAdi === 'Süre') parsedModel.spanKey = 4;
                return parsedModel;
              });
          })
        )
        .subscribe(list => {
          this.smPratigiList = list;
        });
    }
  }
}
