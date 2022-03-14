import { Injectable } from '@angular/core';
import {
  Hat,
  KtSpMarkalama,
  KtSpMarkalamaViewModel,
  ResponseModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kt1344ResourceURL } from '../enums/kt-1344-resource-url';

@Injectable()
export class Kt1344Service {
  private readonly _endpoint_ut_hatlar = '/kusur-ana-veri/hatlar'; // TODO: ut'den gelecek
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpMarkalamaViewModel>> {
    return this.http
      .request('GET', Kt1344ResourceURL.SPEC_MARKALAMALAR)
      .pipe(map(response => response.body));
  }

  getUtHatList(): Observable<Hat[]> {
    return this.http
      .request('GET', Kt1344ResourceURL.SPEC_MARKALAMALAR_HATLAR)
      .pipe(map(response => response.body));
  }
  saveOrUpdate(
    spesifikasyon: KtSpMarkalama
  ): Observable<ResponseModel<KtSpMarkalama>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1344ResourceURL.SAVE_UPDATE}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1344ResourceURL.SAVE_UPDATE, spesifikasyon)
      .pipe(map(response => response.body));
  }
}
