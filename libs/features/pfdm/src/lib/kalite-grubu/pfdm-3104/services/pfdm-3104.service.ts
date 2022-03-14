import { Injectable } from '@angular/core';
import { PfdmKaliteGrup, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Pfdm3104Service {
  readonly _endpoint = '/pfdm-kalite-gruplar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<PfdmKaliteGrup[]>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: PfdmKaliteGrup
  ): Observable<ResponseModel<PfdmKaliteGrup>> {
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
    spesifikasyon: PfdmKaliteGrup
  ): Observable<ResponseModel<PfdmKaliteGrup>> {
    return this.http
      .request(
        'DELETE',
        `${this._endpoint}/${spesifikasyon.etag}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }
}
