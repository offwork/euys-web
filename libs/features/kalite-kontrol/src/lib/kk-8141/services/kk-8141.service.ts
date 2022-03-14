import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Kk8141Service {
  private readonly _endpoint_tesisler_hsm = '/tesisler/hsm/';
  private readonly _endpoint_yuzey_kusur_kaydi = `/yuzey-kusur-kaydi`;

  constructor(private http: HttpProviderService) {}

  getYuzeyKusurKaydiList(
    hatNo: string,
    bobinNo: string
  ): Observable<KkUretimYuzeyKusuru[]> {
    return this.http
      .request(
        'GET',
        `${this._endpoint_tesisler_hsm}${this._endpoint_yuzey_kusur_kaydi}`,
        null,
        {
          params: new HttpParams({
            fromObject: {
              hatNo: hatNo,
              bobinNo: bobinNo,
            },
          }),
        }
      )
      .pipe(map(response => response.body));
  }
}
