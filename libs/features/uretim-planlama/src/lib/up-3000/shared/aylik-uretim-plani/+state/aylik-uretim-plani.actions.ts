import { ErrorModel, YupAylikAnaModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[AylikUretimPlani Page] Init');

export const load = createAction(
  '[AylikUretimPlani Page] Load',
  props<{ ay: string; yil: string }>()
);

export const success = createAction(
  '[AylikUretimPlani/API] Load AylikUretimPlani Success',
  props<{ yupAylikAnaModel: YupAylikAnaModel }>()
);

export const fail = createAction(
  '[AylikUretimPlani/API] Load AylikUretimPlani Failure',
  props<{ error: ErrorModel }>()
);
