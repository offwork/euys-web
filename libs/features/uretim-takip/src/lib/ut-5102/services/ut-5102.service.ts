import { Injectable } from '@angular/core';
import {
  ResponseModel,
  UtTankAsitlemeLimit,
  UtTankAsitlemeLimitViewModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Ut5102Service {
  readonly _endpoint =
    '/isletme-genel-islemler/asitleme-tanklari-analiz-limitler';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtTankAsitlemeLimitViewModel>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  save(
    utTankAsitlemeLimit: UtTankAsitlemeLimit
  ): Observable<ResponseModel<UtTankAsitlemeLimit>> {
    if (utTankAsitlemeLimit.id) {
      return this.http
        .request(
          'PUT',
          `${this._endpoint}/${utTankAsitlemeLimit.id}/${utTankAsitlemeLimit.etag}`,
          utTankAsitlemeLimit
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', this._endpoint, utTankAsitlemeLimit)
      .pipe(map(response => response.body));
  }
}
