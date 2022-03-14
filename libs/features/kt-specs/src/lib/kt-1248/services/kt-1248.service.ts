import { Injectable } from '@angular/core';
import { KtAtSleeveKalinlik, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1248Service {
  readonly _endpoint = '/ana-tablolar/sleeve-kalinliklar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtSleeveKalinlik[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtSleeveKalinlik): Observable<ResponseModel<KtAtSleeveKalinlik>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}
