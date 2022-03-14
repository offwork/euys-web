import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YupAylikAnaModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AylikUretimPlaniService {
  constructor(private http: HttpProviderService) {}

  load(ay: string, yil: string): Observable<YupAylikAnaModel> {
    const params = new HttpParams().set('yil', yil).set('ay', ay);
    return this.http
      .request('GET', '/yup/yup-aylik/get', null, {
        params,
      })
      .pipe(map(response => response.body));
  }
}
