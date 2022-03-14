import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YupKapasiteRaporGrubuDonusModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3017Service {
  constructor(private http: HttpProviderService) {}

  getKapasiteRaporGrubuList(
    kapasiteRapor: string,
    urunGrubu: string
  ): Observable<YupKapasiteRaporGrubuDonusModel[]> {
    const params = new HttpParams({ fromObject: { kapasiteRapor, urunGrubu } });

    return this.http
      .request('GET', '/yup/kapasite-rapor-gruplari/goruntuleme', null, {
        params,
      })
      .pipe(map(respose => respose.body));
  }
}
