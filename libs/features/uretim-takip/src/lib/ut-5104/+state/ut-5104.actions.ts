import {
  UtTankDurulamaLimit,
  UtTankDurulamaLimitViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5104 Page] Init');
export const getData = createAction('[Ut5104 Page] Get Data');

export const loadUt5104Success = createAction(
  '[Ut5104/API] Load Ut5104 Success',
  props<{ data: UtTankDurulamaLimitViewModel }>()
);

export const loadUt5104Failure = createAction(
  '[Ut5104/API] Load Ut5104 Failure',
  props<{ error: any }>()
);

export const save = createAction(
  '[Ut5104 Page] Save Data',
  props<{ utTankDurulamaLimit: UtTankDurulamaLimit }>()
);

export const saveUt5104Success = createAction(
  '[Ut5104/API] Save Ut5104 Success',
  props<{ utTankDurulamaLimit: UtTankDurulamaLimit; code: string }>()
);

export const saveUt5104Failure = createAction(
  '[Ut5104/API] Save Ut5104 Failure',
  props<{ error: any }>()
);
