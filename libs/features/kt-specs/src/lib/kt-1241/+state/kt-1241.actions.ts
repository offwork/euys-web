import { ErrorModel, KtAtKromKaplamaTfsFlor } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1241 Page] Init');

export const loadKt1241Success = createAction(
  '[Kt1241/API] Load Kt1241 Success',
  props<{ data: KtAtKromKaplamaTfsFlor[] }>()
);

export const loadKt1241Failure = createAction('[Kt1241/API] Load Kt1241 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1241 Page] Save', props<{ ktAtKromKaplamaTfsFlor: KtAtKromKaplamaTfsFlor }>());

export const saveKt1241Success = createAction(
  '[Kt1241/API] Save Kt1241 Success',
  props<{ record: KtAtKromKaplamaTfsFlor }>()
);

export const saveKt1241Failure = createAction('[Kt1241/API] Save Kt1241 Failure', props<{ error: ErrorModel }>());
