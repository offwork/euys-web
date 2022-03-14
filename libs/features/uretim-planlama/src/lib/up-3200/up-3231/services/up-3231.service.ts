import { Injectable } from '@angular/core';
import {
  ImalatLotResponseHataModel,
  ImalatLotResponseModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3231Service {
  constructor(private http: HttpProviderService) {}

  updateTedarikTipi(
    imalatLotList: ImalatLotResponseModel[]
  ): Observable<ImalatLotResponseHataModel[]> {
    return this.http
      .request('PUT', '/ili/ili-imalat-lot-tedarik-tipi/update', imalatLotList)
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }
}
