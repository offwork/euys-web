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
export class Up3016Service {
  constructor(private http: HttpProviderService) {}

  getKapasiteRaporGrubuList(
    kapasiteRapor: string,
    urunGrubu: string
  ): Observable<YupKapasiteRaporGrubuDonusModel[]> {
    return this.http
      .request('GET', '/yup/kapasite-rapor-gruplari/goruntuleme', null, {
        params: new HttpParams({ fromObject: { kapasiteRapor, urunGrubu } }),
      })
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

  updateKapasiteRaporGrubuTanim(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ): Observable<YupKapasiteRaporGrubuTanimlamaModel> {
    return this.http
      .request(
        'PUT',
        '/yup/kapasite-rapor-gruplari/guncelleme',
        yupKapasiteRaporGrubuTanimlamaModel
      )
      .pipe(map(respose => respose.body));
  }

  deleteKapasiteRaporGrubuTanim(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ): Observable<YupKapasiteRaporGrubuTanimlamaModel> {
    return this.http
      .request(
        'DELETE',
        '/yup/kapasite-rapor-gruplari/iptal',
        yupKapasiteRaporGrubuTanimlamaModel
      )
      .pipe(map(respose => respose.body));
  }
}
