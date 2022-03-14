import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YillikUretimPlaniItem } from '../+state/yillik-uretim-plani.models';

@Injectable()
export class YillikUretimPlaniService {
  constructor(private http: HttpProviderService) {}

  getPlanlar(yil: number): Observable<ResponseModel<YillikUretimPlaniItem[]>> {
    return this.http
      .request('GET', '/goruntulemeler/planlar', null, {
        params: new HttpParams({ fromObject: { yil: `${yil}` } }),
      })
      .pipe(map((response) => response.body));
  }
}
