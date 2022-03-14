import { ErrorModel, KtAtKenarEgriligi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1237 Page] Init');

export const loadKt1237Success = createAction(
  '[Kt1237/API] Load Kt1237 Success',
  props<{ data: KtAtKenarEgriligi[] }>()
);

export const loadKt1237Failure = createAction('[Kt1237/API] Load Kt1237 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1237 Page] Save', props<{ ktAtKenarEgriligi: KtAtKenarEgriligi }>());

export const saveKt1237Success = createAction(
  '[Kt1237/API] Save Kt1237 Success',
  props<{ record: KtAtKenarEgriligi }>()
);

export const saveKt1237Failure = createAction('[Kt1237/API] Save Kt1237 Failure', props<{ error: ErrorModel }>());
