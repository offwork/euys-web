import {
  ErrorModel,
  UtTankDurulama,
  UtTankDurulamaViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5105 Page] Init');

export const loadUt5105Success = createAction(
  '[Ut5105/API] Load Ut5105 Success',
  props<{ data: UtTankDurulamaViewModel }>()
);

export const loadUt5105LogSuccess = createAction(
  '[Ut5105/API] Load Ut5105Log Success',
  props<{ data: UtTankDurulama[] }>()
);
export const loadUt5105Log = createAction(
  '[Ut5105 Page] Load Ut5105Log ',
  props<{ utTankDurulama: UtTankDurulama }>()
);

export const loadUt5105Failure = createAction(
  '[Ut5105/API] Load Ut5105 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Ut5105 Page] Save',
  props<{ utTankDurulama: UtTankDurulama }>()
);
export const saveUt5105Success = createAction(
  '[Ut5105/API] Save Ut5105 Success',
  props<{ utTankDurulama: UtTankDurulama; code: string }>()
);

export const saveUt5105Failure = createAction(
  '[Ut5105/API] Save Ut5105 Failure',
  props<{ error: ErrorModel }>()
);
