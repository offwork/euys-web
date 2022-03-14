import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import * as moment from 'moment';

@Injectable()
export class SicakTarihGecikmeAnaliziService {
  constructor(private http: HttpProviderService) {}

  getGecikmeAnaliziByDateRange(startDate: Date, endDate: Date) {
    const format = 'YYYYMMDD';
    return this.http.request('GET', '/goruntulemeler/analizler/gecikmeler', null, {
      params: new HttpParams({
        fromObject: {
          tarih1: moment(startDate).format(format),
          tarih2: moment(endDate).format(format),
          haddehaneTipi: 'SICAK',
        },
      }),
    });
  }
}
