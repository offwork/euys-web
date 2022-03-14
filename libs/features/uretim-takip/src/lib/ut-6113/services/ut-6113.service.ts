import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import {
  ResponseModel,
  UtDurdurmaKodAdlariModel,
  UtDurdurmaKodAdlariView,
  UtDurdurmaKodlariComboValueModel,
} from '@euys/api-interfaces';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Ut6113Service {
  readonly _endpoint = '/nihai-urun-durdurma-islemleri/durdurma-kod-adlari';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtDurdurmaKodAdlariModel[]>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  save(
    model: UtDurdurmaKodAdlariModel
  ): Observable<ResponseModel<UtDurdurmaKodAdlariModel>> {
    return this.http
      .request(model?.id ? 'PUT' : 'POST', this._endpoint, model)
      .pipe(map(response => response.body));
  }

  delete(
    model: UtDurdurmaKodAdlariModel
  ): Observable<ResponseModel<UtDurdurmaKodAdlariModel>> {
    return this.http
      .request('PUT', this._endpoint + '/delete', model)
      .pipe(map(response => response.body));
  }

  findByDurdurmaAnaKod(
    durdurmaAnaKod: string
  ): Observable<ResponseModel<UtDurdurmaKodAdlariView>> {
    return this.http
      .request('GET', this._endpoint + '/find-by-durdurma-ana-kod', null, {
        params: new HttpParams({
          fromObject: { durdurmaAnaKod: durdurmaAnaKod },
        }),
      })
      .pipe(map(response => response.body));
  }

  getListeler(): Observable<ResponseModel<UtDurdurmaKodlariComboValueModel>> {
    return this.http
      .request('GET', this._endpoint + '/listeler')
      .pipe(map(response => response.body));
  }
}
