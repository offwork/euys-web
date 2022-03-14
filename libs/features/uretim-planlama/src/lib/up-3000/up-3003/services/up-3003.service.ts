import { Injectable } from '@angular/core';
import {
  KayitIslemTipiEnum,
  YupBazAnaBilgileri,
  YupBazAnaBilgileriGenel,
  YupTaslakAnaModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3003Service {
  readonly _endpoint = '/yup/yup-taslak/save';

  constructor(private http: HttpProviderService) {}

  save(yupTaslakAnaModel: YupTaslakAnaModel, file: File): Observable<unknown> {
    const formData = new FormData();
    formData.append('upload', file);
    formData.append('yil', yupTaslakAnaModel.yil);
    formData.append(
      'yupBazAnaId',
      yupTaslakAnaModel.yupBazAnaBilgileriModel.id
    );
    formData.append('yupTaslakAciklama', yupTaslakAnaModel.yupTaslakAciklama);
    formData.append('yupTaslakIsmi', yupTaslakAnaModel.yupTaslakIsmi);
    return this.http
      .request('POST', this._endpoint, formData)
      .pipe(map(response => response.body));
  }
}
