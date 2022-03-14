import {
  ErrorModel,
  KtAtTemperMerdaneTipi,
  KtAtTemperMerdaneTipiViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1260 Page] Init');

export const loadKt1260Success = createAction(
  '[Kt1260/API] Load Kt1260 Success',
  props<{ data: KtAtTemperMerdaneTipiViewModel }>()
);

export const loadKt1260Failure = createAction(
  '[Kt1260/API] Load Kt1260 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1260 Page] Save',
  props<{ ktAtTemperMerdaneTipi: KtAtTemperMerdaneTipi }>()
);

export const saveKt1260Success = createAction(
  '[Kt1260/API] Save Kt1260 Success',
  props<{ record: KtAtTemperMerdaneTipi }>()
);

export const saveKt1260Failure = createAction(
  '[Kt1260/API] Save Kt1260 Failure',
  props<{ error: ErrorModel }>()
);
