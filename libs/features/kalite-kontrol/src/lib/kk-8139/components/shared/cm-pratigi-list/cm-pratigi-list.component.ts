import { Component, Input, OnInit } from '@angular/core';
import { CMSMPratigiBilgileri } from '@euys/api-interfaces';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
@Component({
  selector: 'euys-cm-pratigi-list',
  templateUrl: './cm-pratigi-list.component.html',
})
export class CmPratigiListComponent implements OnInit {
  @Input() cmPratigiList$: Observable<CMSMPratigiBilgileri[]>;
  @Input() cmPratigiListLoaded$: Observable<boolean>;

  dummyList: CMSMPratigiBilgileri[] = new Array(11);

  cmPratigiList: CMSMPratigiBilgileri[];

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
    if (this.cmPratigiList$) {
      this.cmPratigiList$
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
                    listEl.pratikAdi === 'Descale'
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
          this.cmPratigiList = list;
        });
    }
  }
}
