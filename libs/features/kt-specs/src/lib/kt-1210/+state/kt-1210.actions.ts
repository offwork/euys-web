import { ErrorModel, KtAtDurulama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1210 Page] Init');

export const loadKt1210Success = createAction(
  '[Kt1210/API] Load Kt1210 Success',
  props<{ data: KtAtDurulama[] }>()
);

export const loadKt1210Failure = createAction('[Kt1210/API] Load Kt1210 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1210 Page] Save', props<{ ktAtDurulama: KtAtDurulama }>());

export const saveKt1210Success = createAction(
  '[Kt1210/API] Save Kt1210 Success',
  props<{ record: KtAtDurulama }>()
);

export const saveKt1210Failure = createAction('[Kt1210/API] Save Kt1210 Failure', props<{ error: ErrorModel }>());
