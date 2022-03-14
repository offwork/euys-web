import { Injectable } from '@angular/core';
import { ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kapasite } from '../+state/kapasiteler.models';

@Injectable()
export class KapasitelerService {
  constructor(private http: HttpProviderService) {}

  getKapasitler(yil: number, oncekiYil: boolean): Observable<ResponseModel<Kapasite>> {
    return this.http
      .request('GET', `/veri-girisi/kapasiteler?yil=${yil}&oncekiYil=${oncekiYil ? 1 : 0}`)
      .pipe(map((response) => response.body));
  }

  updateKapasiteler(kapasite: Kapasite) {
    return this.http.request('POST', `/veri-girisi/kapasiteler`, kapasite).pipe(map((response) => response));
  }
}
