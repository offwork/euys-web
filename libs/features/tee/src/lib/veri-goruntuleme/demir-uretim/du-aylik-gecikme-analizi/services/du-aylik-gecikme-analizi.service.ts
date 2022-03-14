import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';

@Injectable()
export class DuAylikGecikmeAnaliziService {
  constructor(private http: HttpProviderService) {}

  // http://localhost:8080/tee-backend/api/v1/goruntulemeler/duks-aylik-gecikmeler
  getAllDelaysByMonth(yil: number, ay: number) {
    return this.http.request('GET', '/goruntulemeler/duks-aylik-gecikmeler', null, {
      params: new HttpParams({ fromObject: { yil: `${yil}`, ay: `${ay}` } }),
    });
  }
}
