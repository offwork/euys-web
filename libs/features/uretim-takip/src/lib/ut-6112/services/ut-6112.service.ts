import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { ResponseModel, UtDurdurmaStatuModel } from '@euys/api-interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Ut6112Service {
  readonly _endpoint = '/nihai-urun-durdurma-islemleri/durdurma-statuleri';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtDurdurmaStatuModel[]>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  save(
    model: UtDurdurmaStatuModel
  ): Observable<ResponseModel<UtDurdurmaStatuModel>> {
    return this.http
      .request(model?.id ? 'PUT' : 'POST', this._endpoint, model)
      .pipe(map(response => response.body));
  }

  delete(
    model: UtDurdurmaStatuModel
  ): Observable<ResponseModel<UtDurdurmaStatuModel>> {
    return this.http
      .request('PUT', this._endpoint + '/delete', model)
      .pipe(map(response => response.body));
  }
}
