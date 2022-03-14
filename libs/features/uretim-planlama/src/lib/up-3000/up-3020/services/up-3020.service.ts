import { Injectable } from '@angular/core';
import {
  KayitIslemTipiEnum,
  YupGunlukPlanBilgileriGenelModel,
  YupGunlukPlanBilgileriModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3020Service {
  constructor(private http: HttpProviderService) {}

  save(
    yupGunlukPlanBilgileriModel: YupGunlukPlanBilgileriModel
  ): Observable<YupGunlukPlanBilgileriGenelModel> {
    const yupGunlukPlanBilgileriGenelModel = {
      yupGunlukPlanBilgileriModel,
      kayitIslemTipiEnum: yupGunlukPlanBilgileriModel.id
        ? KayitIslemTipiEnum.KAYIT_GUNCELLE
        : KayitIslemTipiEnum.KAYIT_EKLEME,
    } as YupGunlukPlanBilgileriGenelModel;

    return this.http
      .request(
        'POST',
        `/yup/yup-gunluk-ana-bilgiler/yup-gunluk-plan-ana-bilgileri-Kaydet`,
        yupGunlukPlanBilgileriGenelModel
      )
      .pipe(map(response => response.body));
  }
}
