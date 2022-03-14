import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImalatLotunHikayesiDonusModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3244Service {
  constructor(private http: HttpProviderService) {}

  getImalatLotunHikayesiList(
    imalatLotNo: string,
    islemTipi: string
  ): Observable<ImalatLotunHikayesiDonusModel[]> {
    const params = new HttpParams({ fromObject: { imalatLotNo, islemTipi } });

    return this.http
      .request('GET', '/ili/mln-islem/log-hikaye', null, {
        params,
      })
      .pipe(map(respose => respose.body));
  }
}
