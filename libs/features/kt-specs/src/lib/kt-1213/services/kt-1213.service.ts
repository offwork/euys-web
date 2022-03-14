import { Injectable } from '@angular/core';
import { KtAtBobinBalikKuyrugu, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class Kt1213Service {
   
  readonly _endpoint = '/ana-tablolar/bobin-balik-kuyruklar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtBobinBalikKuyrugu[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtBobinBalikKuyrugu): Observable<ResponseModel<KtAtBobinBalikKuyrugu>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

