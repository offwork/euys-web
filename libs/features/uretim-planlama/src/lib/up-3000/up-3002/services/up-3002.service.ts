import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ResponseModel,
  UpYupBazHatPlanliDuruslarDonusModel,
  UpYupBazHatUretimHedefDonusModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3002Service {
  constructor(private http: HttpProviderService) {}

  getUretimHedefleri(
    id: string
  ): Observable<ResponseModel<UpYupBazHatUretimHedefDonusModel[]>> {
    const params = new HttpParams().set('idYupBazAna', id);

    return this.http
      .request(
        'GET',
        '/yup/yup-baz-hat-uretim-hedefler/uretim-hedef-list',
        null,
        { params }
      )
      .pipe(map(respose => respose.body));
  }

  getPlanliDuruslar(
    id: string
  ): Observable<ResponseModel<UpYupBazHatPlanliDuruslarDonusModel[]>> {
    const params = new HttpParams().set('idYupBazAna', id);

    return this.http
      .request(
        'GET',
        '/yup/yup-baz-hat-planli-duruslar/planli-duruslar-list',
        null,
        { params }
      )
      .pipe(map(respose => respose.body));
  }
}
