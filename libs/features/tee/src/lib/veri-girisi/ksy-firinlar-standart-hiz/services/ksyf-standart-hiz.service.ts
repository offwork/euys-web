import { Injectable } from '@angular/core';
import { Line, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StandarHizlar } from '../+state/ksyf-standart-hat-hizi.models';

@Injectable()
export class KsyfStandartHizService {
  constructor(private http: HttpProviderService) {}

  getAllKsyfStandartHizlar(
    yil: number
  ): Observable<ResponseModel<StandarHizlar>> {
    return this.http
      .request('GET', `/veri-girisi/standart-hizlar?yil=${yil}`)
      .pipe(map(response => response.body));
  }

  updateAllKsyfStandartHizlar(standarHizlar: StandarHizlar) {
    return this.http
      .request('POST', `/veri-girisi/standart-hizlar`, standarHizlar)
      .pipe(map(response => response));
  }

  getAllProductLines(): Observable<Line[]> {
    return this.http
      .request('GET', '/hatlar')
      .pipe(map(response => response.body['data']));
  }
}
