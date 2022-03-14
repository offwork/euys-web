import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  KusurluIstifSorguModel,
  ResponseModel,
  UtKusurluIstifPaketiComboValueModel,
  UtKusurluIstifPaketModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ut6002ResourceURL } from '../enums/ut-6002-resource-url';

@Injectable()
export class Ut6002Service {
  constructor(private http: HttpProviderService) {}

  kusurIstifPaketiListesiGetir(): Observable<
    ResponseModel<UtKusurluIstifPaketModel[]>
  > {
    return this.http
      .request(
        'GET',
        Ut6002ResourceURL.NIHAI_URUN_ISLEMLERI +
          Ut6002ResourceURL.KUSUR_ISTIF_PAKETI +
          '?aktifPasif=A'
      )
      .pipe(map(response => response.body));
  }

  configGetir(): Observable<
    ResponseModel<UtKusurluIstifPaketiComboValueModel>
  > {
    return this.http
      .request(
        'GET',
        Ut6002ResourceURL.NIHAI_URUN_ISLEMLERI +
          Ut6002ResourceURL.KUSUR_ISTIF_PAKETI +
          Ut6002ResourceURL.LISTELER
      )
      .pipe(map(response => response.body));
  }

  sorgula(
    kusurluIstifSorguModel: KusurluIstifSorguModel
  ): Observable<ResponseModel<UtKusurluIstifPaketModel[]>> {
    return this.http
      .request(
        'GET',
        Ut6002ResourceURL.NIHAI_URUN_ISLEMLERI +
          Ut6002ResourceURL.KUSUR_ISTIF_PAKETI,
        null,
        {
          params: new HttpParams({
            fromObject: { ...kusurluIstifSorguModel },
          }),
        }
      )
      .pipe(map(response => response.body));
  }
}
