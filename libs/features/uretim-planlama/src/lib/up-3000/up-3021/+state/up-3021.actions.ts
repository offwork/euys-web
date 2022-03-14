import {
  ErrorModel,
  YupGunlukPlanBilgileriModel,
  YupGunlukPlanDetayBilgileriDonusModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3021 Page] Init');

export const load = createAction(
  '[Up3021 Page] Load',
  props<{
    yupGunlukPlanBilgileriModel: YupGunlukPlanBilgileriModel;
  }>()
);

export const loadSuccess = createAction(
  '[Up3021/API] Load Up3021 Success',
  props<{
    data: YupGunlukPlanDetayBilgileriDonusModel[];
  }>()
);

export const loadFailure = createAction(
  '[Up3021/API] Load Up3021 Failure',
  props<{ error: ErrorModel }>()
);
