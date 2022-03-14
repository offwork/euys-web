import { Injectable } from '@angular/core';
import { KtCalHattiYuzdeUzama, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1217Service {
  constructor(private http: HttpProviderService) {}

  getAllCalYuzdeUzama(): Observable<ResponseModel<KtCalHattiYuzdeUzama[]>> {
    return this.http
      .request('GET', '/ana-tablolar/cal-hatti-temp-yuzde-uzamalar')
      .pipe(map((response) => response.body));
  }

  updateCalYuzdeUzama(calYuzdeUzama: KtCalHattiYuzdeUzama): Observable<ResponseModel<Record<string, unknown>>> {
    return this.http
      .request(
        'PUT',
        `/ana-tablolar/cal-hatti-temp-yuzde-uzamalar/${calYuzdeUzama.id}/${calYuzdeUzama.etag}`,
        calYuzdeUzama
      )
      .pipe(map((response) => response.body));
  }

  saveCalYuzdeUzama(calYuzdeUzama: KtCalHattiYuzdeUzama): Observable<ResponseModel<Record<string, unknown>>> {
    return this.http
      .request('POST', '/ana-tablolar/cal-hatti-temp-yuzde-uzamalar', calYuzdeUzama)
      .pipe(map((response) => response.body));
  }
}
