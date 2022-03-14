import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Combo, KkUretimYuzeyKusuru, QCOnayModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8116ResourceURL } from '../enums/kk-8116-resource-url';

@Injectable()
export class Kk8116Service {
  constructor(private http: HttpProviderService) {}

  getYuzeyKusurKaydiList(
    hatNo: string,
    bobinNo: string
  ): Observable<KkUretimYuzeyKusuru[]> {
    return this.http
      .request(
        'GET',
        `${Kk8116ResourceURL.TESISLER_HSM}/${Kk8116ResourceURL.YUZEY_KUSUR_KAYDI}`,
        null,
        {
          params: new HttpParams({
            fromObject: {
              hatNo: hatNo,
              bobinNo: bobinNo,
            },
          }),
        }
      )
      .pipe(map(response => response.body));
  }

  getButunAktifKusur(hatNo: string): Observable<Combo[]> {
    return this.http
      .request(
        'GET',
        `${Kk8116ResourceURL.KUSURLAR}${Kk8116ResourceURL.BUTUN_AKTIF_KUSUR}`,
        null,
        {
          params: new HttpParams({
            fromObject: { hatNo },
          }),
        }
      )
      .pipe(map(response => response.body));
  }

  putQcOnay(qcOnay: QCOnayModel): Observable<string> {
    return this.http
      .request(
        'PUT',
        `${Kk8116ResourceURL.TESISLER_HSM}${Kk8116ResourceURL.QC_ONAY} `,
        qcOnay
      )
      .pipe(map(response => response.body));
  }
}
