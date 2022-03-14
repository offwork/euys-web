import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';

@Injectable()
export class SogukAylikGecikmeAnaliziService {
  constructor(private http: HttpProviderService) {}

  getAllDelaysByMonth(yil: number, ay: number) {
    return this.http.request('GET', '/goruntulemeler/analizler/gecikmeler', null, {
      params: new HttpParams({ fromObject: { yil: `${yil}`, ay: `${ay}`, haddehaneTipi: 'SOGUK' } }),
    });
  }
}
