import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YupAylikAnaModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Up3010Service {
  constructor(private http: HttpProviderService) {}

  save(yupAylikAnaModel: YupAylikAnaModel): Observable<YupAylikAnaModel> {
    return this.http
      .request('POST', '/yup/yup-aylik/save', yupAylikAnaModel)
      .pipe(map(response => response.body));
  }
}
