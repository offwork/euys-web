import { Injectable } from '@angular/core';
import {
  ResponseModel,
  UtTankDurulamaLimit,
  UtTankDurulamaLimitViewModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ut5104ResourceURL } from '../enums/ut-5104-resource-url';

@Injectable({
  providedIn: 'root',
})
export class Ut5104Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtTankDurulamaLimitViewModel>> {
    return this.http
      .request('GET', Ut5104ResourceURL.ENDPOINT)
      .pipe(map(response => response.body));
  }

  save(
    utTankDurulamaLimit: UtTankDurulamaLimit
  ): Observable<ResponseModel<UtTankDurulamaLimit>> {
    if (utTankDurulamaLimit.id) {
      return this.http
        .request(
          'PUT',
          `${Ut5104ResourceURL.ENDPOINT}/${utTankDurulamaLimit.id}/${utTankDurulamaLimit.etag}`,
          utTankDurulamaLimit
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Ut5104ResourceURL.ENDPOINT, utTankDurulamaLimit)
      .pipe(map(response => response.body));
  }
}
