import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ImalatLotResponseModel,
  ImalatLotSorguModel,
  UpStMlnStatuModel,
  UpStMlnTedarikTipiModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImalatLotService {
  constructor(private http: HttpProviderService) {}

  getImalatLotListWithTedarikTipi(
    imalatLotSorguModel: ImalatLotSorguModel
  ): Observable<ImalatLotResponseModel[]> {
    const params = new HttpParams({ fromObject: { ...imalatLotSorguModel } });

    return this.http
      .request('GET', '/ili/ili-imalat-lot-tedarik-tipi/get', null, { params })
      .pipe(map(respose => respose.body));
  }

  getImalatLotListWithStatu(
    imalatLotSorguModel: ImalatLotSorguModel
  ): Observable<ImalatLotResponseModel[]> {
    const params = new HttpParams({ fromObject: { ...imalatLotSorguModel } });

    return this.http
      .request('GET', '/ili/ili-imalat-lot-statu/get', null, { params })
      .pipe(map(respose => respose.body));
  }

  getTedarikTipiList(): Observable<UpStMlnTedarikTipiModel[]> {
    return this.http
      .request('GET', '/ili/ili-imalat-lot-tedarik-tipi/get-tedarik-tipi-list')
      .pipe(map(respose => respose.body));
  }

  getStatuList(): Observable<UpStMlnStatuModel[]> {
    return this.http
      .request('GET', '/ili/ili-imalat-lot-statu/get-statu-list')
      .pipe(map(respose => respose.body));
  }
}
