import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ResponseModel,
  UtDurdurmaKodAdlariModel,
  UtDurdurmaKodlariComboValueModel,
} from '@euys/api-interfaces';
import { map } from 'rxjs/operators';
import { HttpProviderService } from '@euys/core';

@Injectable({
  providedIn: 'root',
})
export class Ut6114Service {
  readonly _endpoint = '/nihai-urun-durdurma-islemleri/durdurma-kod-adlari';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtDurdurmaKodAdlariModel[]>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  getListeler(): Observable<ResponseModel<UtDurdurmaKodlariComboValueModel>> {
    return this.http
      .request('GET', this._endpoint + '/listeler')
      .pipe(map(response => response.body));
  }
}
