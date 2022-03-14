import { Injectable } from '@angular/core';
import { ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KatsayiModel } from '../+state/katsayi-giris.models';

@Injectable()
export class KatsayiGirisService {
  constructor(private http: HttpProviderService) {}

  getAllCoefficients(currentYear?: number, previousYear: boolean = false): Observable<ResponseModel<KatsayiModel[]>> {
    return this.http
      .request('GET', `/veri-girisi/katsayilar?yil=${currentYear}&oncekiYil=${previousYear ? 1 : 0}`)
      .pipe(map((response) => response.body));
  }

  saveAllDataGrid(coefficients?: KatsayiModel[]) {
    return this.http.request('POST', '/veri-girisi/katsayilar', coefficients);
  }
}
