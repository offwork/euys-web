import {
  ErrorModel,
  KtSpAmbalajPaket,
  KtSpAmbalajPaketViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1307 Page] Init');

export const loadKt1307Success = createAction(
  '[Kt1307/API] Load Kt1307 Success',
  props<{ data: KtSpAmbalajPaketViewModel }>()
);

export const loadKt1307Failure = createAction(
  '[Kt1307/API] Load Kt1307 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1307 Page] Save',
  props<{ ktSpAmbalajPaket: KtSpAmbalajPaket }>()
);

export const saveKt1307Success = createAction(
  '[Kt1307/API] Save Kt1307 Success',
  props<{ record: KtSpAmbalajPaket }>()
);

export const saveKt1307Failure = createAction(
  '[Kt1307/API] Save Kt1307 Failure',
  props<{ error: ErrorModel }>()
);
