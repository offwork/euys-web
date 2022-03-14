import { Injectable } from '@angular/core';
import { PfdmYuzeyKaplama, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Pfdm3103Service {
  readonly _endpoint = '/pfdm-yuzey-kaplamalar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<PfdmYuzeyKaplama[]>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: PfdmYuzeyKaplama
  ): Observable<ResponseModel<PfdmYuzeyKaplama>> {
    if (spesifikasyon.etag) {
      return this.http
        .request(
          'PUT',
          `${this._endpoint}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', this._endpoint, spesifikasyon)
      .pipe(map(response => response.body));
  }
  delete(
    spesifikasyon: PfdmYuzeyKaplama
  ): Observable<ResponseModel<PfdmYuzeyKaplama>> {
    return this.http
      .request(
        'DELETE',
        `${this._endpoint}/${spesifikasyon.etag}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }
}
