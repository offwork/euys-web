import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class RaporIndirmeService {
  constructor(private http: HttpProviderService) {}

  getAllDelaysByMonth(yil: number, ay: number) {
    return this.http.request('GET', '/cuks/delays/monthly', null, {
      params: new HttpParams({ fromObject: { yil: `${yil}`, ay: `${ay}` } }),
    });
  }
}
