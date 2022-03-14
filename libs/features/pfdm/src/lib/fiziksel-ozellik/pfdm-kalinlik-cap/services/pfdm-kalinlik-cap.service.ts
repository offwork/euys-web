import { Injectable } from '@angular/core';
import {
  KtAtAgirlik,
  PfdmKalinlikCap,
  ResponseModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PfdmKalinlikCapService {
  readonly _endpoint = '/pfdm-kalinlik-caplar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<PfdmKalinlikCap[]>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: PfdmKalinlikCap
  ): Observable<ResponseModel<PfdmKalinlikCap>> {
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
    spesifikasyon: PfdmKalinlikCap
  ): Observable<ResponseModel<PfdmKalinlikCap>> {
    return this.http
      .request(
        'DELETE',
        `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }
}
