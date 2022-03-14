import {
  UpYupBazHatPlanliDuruslarDonusModel,
  YupProjeksiyonHatUretimHedeflerGenelModel,
  YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel,
  YupProjeksiyonOzetModel,
  YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel,
  YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const load = createAction(
  '[YillikUretimPlani Page] Load',
  props<{ year: string; id: string; idYupBazAna: string }>()
);

export const done = createAction(
  '[YillikUretimPlani/API] Load Success',
  props<{
    ozet: YupProjeksiyonOzetModel;
    uretimHedefleriList: YupProjeksiyonHatUretimHedeflerGenelModel[];
    kapasiteBazindaList: YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel[];
    urunBazindaList: YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel[];
    rumuzBazindaList: YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel[];
    planliDuruslar: UpYupBazHatPlanliDuruslarDonusModel[];
  }>()
);

export const fail = createAction('[YillikUretimPlani/API] Load Failure');
