import { Isgucu } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';
import { ManpowerInputEvent } from '../container/models/manpower-input.model';

export const init = createAction('[Isgucleri Page] Init');

export const loadIsgucleri = createAction(
  '[Isgucleri Page] Load Isgucleri',
  props<{ yil: string }>()
);

export const validateIsgucleri = createAction(
  '[Isgucleri Page] Validate Isgucleri'
);

export const updateIsgucu = createAction(
  '[Isgucleri Page] Update Isgucu',
  props<{ event: ManpowerInputEvent }>()
);

export const saveIsgucleri = createAction(
  '[Isgucleri Page] Save Isgucleri',
  props<{ data: Isgucu[] }>()
);

export const saveIsgucleriSuccess = createAction(
  '[Isgucleri/API] Save Isgucleri Success',
  props<{ data: Isgucu[] }>()
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveIsgucleriFailure = createAction(
  '[Isgucleri/API] Save Isgucleri Failure',
  props<{ error: any }>()
);

export const loadIsgucleriSuccess = createAction(
  '[Isgucleri/API] Load Isgucleri Success',
  props<{ isgucleri: Isgucu[] }>()
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadIsgucleriFailure = createAction(
  '[Isgucleri/API] Load Isgucleri Failure',
  props<{ error: any }>()
);
