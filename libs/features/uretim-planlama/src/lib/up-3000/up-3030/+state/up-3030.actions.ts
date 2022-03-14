import {
  ErrorModel,
  IslemSonucModel,
  YupBackUpPlanGenelModel,
  YupBackUpPlanMamulDonusModel,
  YupGunlukPlanDetayBilgileriDonusModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3030 Page] Init');

export const save = createAction(
  '[Up3030 Page] Save',
  props<{
    yupBackUpPlanGenelModel: YupBackUpPlanGenelModel;
  }>()
);

export const saveSuccess = createAction(
  '[Up3030/API] Save Up3030 Success',
  props<{
    yupBackUpPlanGenelModel: YupBackUpPlanGenelModel[];
  }>()
);

export const load = createAction(
  '[Up3030 Page] Load',
  props<{
    yil: string;
    donem: string;
    urunGrubu: string;
  }>()
);

export const loadSuccess = createAction(
  '[Up3030/API] Load Up3030 Success',
  props<{
    data: YupBackUpPlanMamulDonusModel[];
    islemSonucModel: IslemSonucModel;
  }>()
);

export const loadFailure = createAction(
  '[Up3030/API] Load Up3030 Failure',
  props<{ error: ErrorModel }>()
);
