import {
  ErrorModel,
  UtTankAsitleme,
  UtTankAsitlemeViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5103 Page] Init');

export const loadUt5103Success = createAction(
  '[Ut5103/API] Load Ut5103 Success',
  props<{ data: UtTankAsitlemeViewModel }>()
);

export const loadUt5103LogSuccess = createAction(
  '[Ut5103/API] Load Ut5103Log Success',
  props<{ data: UtTankAsitleme[] }>()
);
export const loadUt5103Log = createAction(
  '[Ut5103 Page] Load Ut5103Log ',
  props<{ utTankAsitleme: UtTankAsitleme }>()
);

export const loadUt5103Failure = createAction(
  '[Ut5103/API] Load Ut5103 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Ut5103 Page] Save',
  props<{ utTankAsitleme: UtTankAsitleme }>()
);
export const saveUt5103Success = createAction(
  '[Ut5103/API] Save Ut5103 Success',
  props<{ utTankAsitleme: UtTankAsitleme; code: string }>()
);

export const saveUt5103Failure = createAction(
  '[Ut5103/API] Save Ut5103 Failure',
  props<{ error: ErrorModel }>()
);
