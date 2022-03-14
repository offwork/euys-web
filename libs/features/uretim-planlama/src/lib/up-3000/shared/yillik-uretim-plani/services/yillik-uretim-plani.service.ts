import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UpYupBazHatPlanliDuruslarDonusModel,
  YupProjeksiyonHatUretimHedeflerGenelModel,
  YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel,
  YupProjeksiyonOzetModel,
  YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel,
  YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class YillikUretimPlaniService {
  readonly _ozetEndpoint =
    '/yup/yup-projeksiyon-islemleri-goruntuleme/get-yup-projeksiyon-ozet';
  readonly _uretimHedefEndpoint =
    '/yup/yup-projeksiyon-islemleri-goruntuleme/uretim-hedefler';
  readonly _kapasiteEndpoint =
    '/yup/yup-projeksiyon-islemleri-goruntuleme/rapor-grubu-bazinda-hedefler';
  readonly _urunEndpoint =
    '/yup/yup-projeksiyon-islemleri-goruntuleme/urun-grubu-bazinda-hedefler';
  readonly _rumuzEndpoint =
    '/yup/yup-projeksiyon-islemleri-goruntuleme/yup-urun-rumuzu-bazinda-hedefler';
  readonly _planliDuruslarEndpoint =
    '/yup/yup-baz-hat-planli-duruslar/planli-duruslar-list';

  constructor(private http: HttpProviderService) {}

  private _params(year: string, id: string) {
    return new HttpParams({
      fromObject: {
        yil: year,
        id: id,
        idYupPlanAna: id,
      },
    });
  }

  private _params2(year: string, id: string) {
    return new HttpParams({
      fromObject: {
        yil: year,
        idDokuman: 'YUP_BAZ_ANA_001_DOKUMAN_ID',
      },
    });
  }

  getOzet(year: string, id: string): Observable<YupProjeksiyonOzetModel> {
    const params = this._params(year, id);

    return this.http
      .request('GET', this._ozetEndpoint, {}, { params })
      .pipe(map(response => response.body));
  }

  getProjeksiyonUretimHedef(
    year: string,
    id: string
  ): Observable<YupProjeksiyonHatUretimHedeflerGenelModel[]> {
    const params = this._params(year, id);

    return this.http
      .request('GET', this._uretimHedefEndpoint, {}, { params })
      .pipe(map(response => response.body));
  }

  getProjeksiyonKapasiteGrup(
    year: string,
    id: string
  ): Observable<YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel[]> {
    const params = this._params(year, id);

    return this.http
      .request('GET', this._kapasiteEndpoint, {}, { params })
      .pipe(map(response => response.body));
  }

  getProjeksiyonUrunBazinda(
    year: string,
    id: string
  ): Observable<YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel[]> {
    const params = this._params(year, id);

    return this.http
      .request('GET', this._urunEndpoint, {}, { params })
      .pipe(map(response => response.body));
  }

  getProjeksiyonRumuzBazinda(
    year: string,
    id: string
  ): Observable<YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel[]> {
    const params = this._params2(year, id);

    return this.http
      .request('GET', this._rumuzEndpoint, {}, { params })
      .pipe(map(response => response.body));
  }

  getPlanliDuruslar(
    idYupBazAna: string
  ): Observable<UpYupBazHatPlanliDuruslarDonusModel[]> {
    const params = new HttpParams().set('idYupBazAna', idYupBazAna);

    return this.http
      .request('GET', this._planliDuruslarEndpoint, null, { params })
      .pipe(map(respose => respose.body.data));
  }
}
