import { Injectable } from '@angular/core';
import { ResponseModel, UtMerkezHaddeYagEmulsiyonModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ut5109ResourceURL } from '../enums/ut-5109-resource-url';

@Injectable()
export class Ut5109Service {

  constructor(private http: HttpProviderService) { }

  merkezHaddeYagEmulListesiGetir(): Observable<ResponseModel<UtMerkezHaddeYagEmulsiyonModel[]>> {
    return this.http.request('GET', Ut5109ResourceURL.ISLETME_GENEL_ISLEMLER_PATH + Ut5109ResourceURL.MERKEZ_HADDE_YAG_EMULSIYON  + Ut5109ResourceURL.LISTELER )
    .pipe(map(response => response.body));
  }

  logListesiGetir(utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel): Observable<ResponseModel<UtMerkezHaddeYagEmulsiyonModel[]>> {
    return this.http.request('GET', Ut5109ResourceURL.ISLETME_GENEL_ISLEMLER_PATH + Ut5109ResourceURL.MERKEZ_HADDE_YAG_EMULSIYON + Ut5109ResourceURL.LOGLAR + '?idMerkezHaddeYagEmulEski=' + utMerkezHaddeYagEmulsiyonModel.idMerkezHaddeYagEmulEski)
    .pipe(map(response => response.body));
  }

  save(
    utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel
  ): Observable<ResponseModel<UtMerkezHaddeYagEmulsiyonModel>> {
    return this.http
      .request('POST', Ut5109ResourceURL.ISLETME_GENEL_ISLEMLER_PATH + Ut5109ResourceURL.MERKEZ_HADDE_YAG_EMULSIYON, utMerkezHaddeYagEmulsiyonModel)
      .pipe(map(response => response.body));
  }
  
  update(
    utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel
  ): Observable<ResponseModel<UtMerkezHaddeYagEmulsiyonModel>> {
      return this.http
        .request(
          'PUT',
          Ut5109ResourceURL.ISLETME_GENEL_ISLEMLER_PATH + Ut5109ResourceURL.MERKEZ_HADDE_YAG_EMULSIYON + '?id=' + utMerkezHaddeYagEmulsiyonModel.id + '&etag='+ utMerkezHaddeYagEmulsiyonModel.etag,
          utMerkezHaddeYagEmulsiyonModel
        )
        .pipe(map(response => response.body));
  }
}
