import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';

@Injectable()
export class DuTarihGecikmeAnaliziService {
  constructor(private http: HttpProviderService) {}

  getGecikmeAnaliziByDateRange(startDate: Date, endDate: Date) {
    const [start, end] = [`${startDate.getTime()}`, `${endDate.getTime()}`];
    return this.http.request('GET', '/goruntulemeler/duks-tarih-gecikmeler', null, {
      params: new HttpParams({ fromObject: { start, end } }),
    });
  }
}
