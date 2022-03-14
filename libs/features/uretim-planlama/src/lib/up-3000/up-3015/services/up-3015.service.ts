import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  YupKapasiteRaporGrubuDonusModel,
  YupKapasiteRaporGrubuTanimlamaModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3015Service {
  constructor(private http: HttpProviderService) {}

  saveKapasiteGrubuTanim(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ): Observable<YupKapasiteRaporGrubuTanimlamaModel> {
    return this.http
      .request(
        'POST',
        '/yup/kapasite-rapor-gruplari/kapasiteTanimlama/kayit',
        yupKapasiteRaporGrubuTanimlamaModel
      )
      .pipe(map(respose => respose.body));
  }

  saveRaporGrubuTanim(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ): Observable<YupKapasiteRaporGrubuTanimlamaModel> {
    return this.http
      .request(
        'POST',
        '/yup/kapasite-rapor-gruplari/raporTanimlama/kayit',
        yupKapasiteRaporGrubuTanimlamaModel
      )
      .pipe(map(respose => respose.body));
  }

  loadKapasiteTanimRumuzList(
    urunGrubu: string
  ): Observable<YupKapasiteRaporGrubuDonusModel[]> {
    return this.http
      .request(
        'GET',
        '/yup/kapasite-rapor-gruplari/kapasiteTanimlama/listeleme',
        null,
        {
          params: new HttpParams({ fromObject: { urunGrubu } }),
        }
      )

      .pipe(map(respose => respose.body));
  }

  loadRaporTanimRumuzList(
    urunGrubu: string
  ): Observable<YupKapasiteRaporGrubuDonusModel[]> {
    return this.http
      .request(
        'GET',
        '/yup/kapasite-rapor-gruplari/raporTanimlama/listeleme',
        null,
        {
          params: new HttpParams({ fromObject: { urunGrubu } }),
        }
      )

      .pipe(map(respose => respose.body));
  }
}
