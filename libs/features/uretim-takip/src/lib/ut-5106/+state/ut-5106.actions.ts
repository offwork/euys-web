import {
  ErrorModel,
  UtAsitlemeRejenerasyon,
  UtAsitlemeRejenerasyonModel,
  UtAsitlemeRejenerasyonViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5106 Page] Init');

export const loadUt5106Success = createAction(
  '[Ut5106/API] Load Ut5106 Success',
  props<{ data: UtAsitlemeRejenerasyonViewModel}>()
);

export const loadUt5106LogSuccess = createAction(
  '[Ut5106/API] Load Ut5106Log Success',
  props<{ data: UtAsitlemeRejenerasyon[] }>()
);
export const loadUt5106Log = createAction(
  '[Ut5106 Page] Load Ut5106Log ',
  props<{ utAsitlemeRejenerasyon: UtAsitlemeRejenerasyon }>()
);

export const loadUt5106Failure = createAction(
  '[Ut5106/API] Load Ut5106 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Ut5106 Page] Save',
  props<{ utAsitlemeRejenerasyon: UtAsitlemeRejenerasyonModel }>()
);
export const saveUt5106Success = createAction(
  '[Ut5106/API] Save Ut5106 Success',
  props<{ utAsitlemeRejenerasyon: UtAsitlemeRejenerasyonModel; code: string }>()
);

export const saveUt5106Failure = createAction(
  '[Ut5106/API] Save Ut5106 Failure',
  props<{ error: ErrorModel }>()
);
