import {
  UtTankAsitlemeLimit,
  UtTankAsitlemeLimitViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5102 Page] Init');
export const getData = createAction('[Ut5102 Page] Get Data');

export const loadUt5102Success = createAction(
  '[Ut5104/API] Load Ut5102 Success',
  props<{ data: UtTankAsitlemeLimitViewModel }>()
);

export const loadUt5102Failure = createAction(
  '[Ut5102/API] Load Ut5102 Failure',
  props<{ error: any }>()
);

export const save = createAction(
  '[Ut5102 Page] Save Data',
  props<{ utTankAsitlemeLimit: UtTankAsitlemeLimit }>()
);

export const saveUt5102Success = createAction(
  '[Ut5104/API] Save Ut5102 Success',
  props<{ utTankAsitlemeLimit: UtTankAsitlemeLimit; code: string }>()
);

export const saveUt5102Failure = createAction(
  '[Ut5102/API] Save Ut5102 Failure',
  props<{ error: any }>()
);
