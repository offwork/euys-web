import { Injectable } from '@angular/core';
import {
  ResponseModel,
  UtCinkoLapa,
  UtCinkoLapaViewModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Ut5101Service {
  readonly _endpoint =
    '/isletme-genel-islemler/galvaniz-hatti-cinko-lapa-uretimler';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtCinkoLapaViewModel>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  getDataPasif(
    spesifikasyon: UtCinkoLapa
  ): Observable<ResponseModel<UtCinkoLapa[]>> {
    return this.http
      .request(
        'GET',
        `${this._endpoint}/${spesifikasyon.vardiyaTarihi}/${spesifikasyon.vardiyaNo}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: UtCinkoLapa
  ): Observable<ResponseModel<UtCinkoLapa>> {
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
