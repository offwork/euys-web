import { Injectable } from '@angular/core';
import {
  KtAtTemperMerdaneTipi,
  KtAtTemperMerdaneTipiViewModel,
  ResponseModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1260Service {
  readonly _endpoint = '/ana-tablolar/temper-merdane-tipler';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtTemperMerdaneTipiViewModel>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtAtTemperMerdaneTipi
  ): Observable<ResponseModel<KtAtTemperMerdaneTipi>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', this._endpoint, spesifikasyon)
      .pipe(map(response => response.body));
  }
}
