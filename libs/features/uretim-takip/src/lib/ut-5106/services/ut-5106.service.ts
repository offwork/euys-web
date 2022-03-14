import { Injectable } from '@angular/core';
import {
  ResponseModel,
  UtAsitlemeRejenerasyon,
  UtAsitlemeRejenerasyonModel,
  UtAsitlemeRejenerasyonViewModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Ut5106Service {
  readonly _endpoint = '/isletme-genel-islemler/asitleme-rejenerasyon';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtAsitlemeRejenerasyonViewModel>> {
    return this.http
      .request('GET', `${this._endpoint}/listeler`)
      .pipe(map(response => response.body));
  }

  getDataPasif(
    spesifikasyon: UtAsitlemeRejenerasyon
  ): Observable<ResponseModel<UtAsitlemeRejenerasyon[]>> {
    return this.http
      .request(
        'GET',
        `${this._endpoint}/loglar?idAsitlemeRejenerasyonEski=${spesifikasyon.id}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: UtAsitlemeRejenerasyonModel
  ): Observable<ResponseModel<UtAsitlemeRejenerasyonModel>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${this._endpoint}?id=${spesifikasyon.id}&etag=${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', this._endpoint, spesifikasyon)
      .pipe(map(response => response.body));
  }
}
