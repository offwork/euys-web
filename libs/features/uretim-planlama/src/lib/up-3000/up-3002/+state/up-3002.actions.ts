import {
  ErrorModel,
  UpYupBazHatPlanliDuruslarDonusModel,
  UpYupBazHatUretimHedefDonusModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3002 Page] Init');

export const loadPlanliDuruslar = createAction(
  '[Up3002 Page] Load Planli Duruslar',
  props<{ id: string }>()
);
export const loadPlanliDuruslarSuccess = createAction(
  '[Up3002/API] Load Planli Duruslar Success',
  props<{ planliDuruslar: UpYupBazHatPlanliDuruslarDonusModel[] }>()
);
export const loadPlanliDuruslarFailure = createAction(
  '[Up3002/API] Load Planli Duruslar Failure',
  props<{ error: ErrorModel }>()
);

export const loadUretimHedefleri = createAction(
  '[Up3002 Page] Load Üretim Hedefleri',
  props<{ id: string }>()
);
export const loadUretimHedefleriSuccess = createAction(
  '[Up3002/API] Load Üretim Hedefleri Success',
  props<{ uretimHedefleri: UpYupBazHatUretimHedefDonusModel[] }>()
);
export const loadUretimHedefleriFailure = createAction(
  '[Up3002/API] Load Üretim Hedefleri Failure',
  props<{ error: ErrorModel }>()
);
