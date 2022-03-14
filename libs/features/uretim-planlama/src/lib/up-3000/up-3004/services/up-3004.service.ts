import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IslemSonucModel, YupTaslakAnaModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3004Service {
  readonly _listEndpoint = '/yup/yup-projeksiyon-islemleri-kriter/get';
  readonly _updateEndpoint =
    '/yup/yup-projeksiyon-islemleri-kriter/dosya/update';
  readonly _deleteEndpoint = '/yup/yup-projeksiyon-islemleri-kriter/delete';
  readonly _approveEndpoint =
    '/yup/yup-projeksiyon-islemleri-kriter/onay/update';
  readonly _disapproveEndpoint =
    '/yup/yup-projeksiyon-islemleri-kriter/onay-iptal/update';

  constructor(private http: HttpProviderService) {}

  load(year: number): Observable<YupTaslakAnaModel[]> {
    const params = new HttpParams({ fromObject: { yil: year } });
    return this.http
      .request('GET', this._listEndpoint, null, { params })
      .pipe(map(response => response.body));
  }

  update(yupTaslak: YupTaslakAnaModel): Observable<IslemSonucModel> {
    return this.http
      .request('PUT', this._updateEndpoint, yupTaslak)
      .pipe(map(response => response.body));
  }

  del({ id }: YupTaslakAnaModel): Observable<IslemSonucModel> {
    const params = new HttpParams({ fromObject: { taslakId: id } });
    return this.http
      .request('DELETE', this._deleteEndpoint, params)
      .pipe(map(response => response.body));
  }

  approve({ id }: YupTaslakAnaModel): Observable<IslemSonucModel> {
    const params = new HttpParams({ fromObject: { taslakId: id } });
    return this.http
      .request('PUT', this._approveEndpoint, params)
      .pipe(map(response => response.body));
  }

  disapprove({ id }: YupTaslakAnaModel): Observable<IslemSonucModel> {
    const params = new HttpParams({ fromObject: { taslakId: id } });
    return this.http
      .request('PUT', this._disapproveEndpoint, params)
      .pipe(map(response => response.body));
  }
}
