import { Injectable } from '@angular/core';
import {
  ResponseModel,
  UtTankDurulama,
  UtTankDurulamaViewModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Ut5105Service {
  readonly _endpoint =
    '/isletme-genel-islemler/durulama-tanklari-laboratuvar-sonuclar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<UtTankDurulamaViewModel>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  getDataPasif(
    spesifikasyon: UtTankDurulama
  ): Observable<ResponseModel<UtTankDurulama[]>> {
    const olcumTarihi = moment(spesifikasyon.olcumTarihi)
      .format('YYYYMMDDHHmm')
      .toUpperCase();
    return this.http
      .request(
        'GET',
        `${this._endpoint}/${spesifikasyon.hatKodu}/${spesifikasyon.tankNo}/${olcumTarihi}`,
        spesifikasyon
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: UtTankDurulama
  ): Observable<ResponseModel<UtTankDurulama>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', this._endpoint, spesifikasyon)
      .pipe(map(response => response.body));
  }
}
