import { Injectable } from '@angular/core';
import {
  ResponseModel,
  UtIsletmeHaddeYagEmulsiyon,
  UtIsletmeHaddeYagEmulsiyonModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Ut5107Service {
  readonly _endpoint = '/isletme-genel-islemler/isletme-hadde-yag-emulsiyon';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtIsletmeHaddeYagEmulsiyonModel[]>> {
    return this.http
      .request('GET', `${this._endpoint}/listeler`)
      .pipe(map(response => response.body));
  }

  getDataPasif(
    spesifikasyon: UtIsletmeHaddeYagEmulsiyon
  ): Observable<ResponseModel<UtIsletmeHaddeYagEmulsiyon[]>> {
    return this.http
      .request(
        'GET',
        `${this._endpoint}/loglar?idIsletmeHaddeYagEmulEski=${spesifikasyon.id}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: UtIsletmeHaddeYagEmulsiyonModel
  ): Observable<ResponseModel<UtIsletmeHaddeYagEmulsiyonModel>> {
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
