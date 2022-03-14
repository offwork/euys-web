import { Injectable } from '@angular/core';
import { PfdmGenislikAraligi, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Pfdm3102Service {
  readonly _endpoint = '/pfdm-genislikler';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<PfdmGenislikAraligi[]>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: PfdmGenislikAraligi
  ): Observable<ResponseModel<PfdmGenislikAraligi>> {
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
  delete(
    spesifikasyon: PfdmGenislikAraligi
  ): Observable<ResponseModel<PfdmGenislikAraligi>> {
    return this.http
      .request(
        'DELETE',
        `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }
}
