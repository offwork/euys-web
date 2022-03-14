import { ErrorModel, KtAtYuzeyGorunumu, KtAtYuzeyGorunumuViewModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1258 Page] Init');

export const loadKt1258Success = createAction(
  '[Kt1258/API] Load Kt1258 Success',
  props<{ data: KtAtYuzeyGorunumuViewModel }>()
);

export const loadKt1258Failure = createAction('[Kt1258/API] Load Kt1258 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1258 Page] Save', props<{ ktAtYuzeyGorunumu: KtAtYuzeyGorunumu }>());

export const saveKt1258Success = createAction(
  '[Kt1258/API] Save Kt1258 Success',
  props<{ record: KtAtYuzeyGorunumu }>()
);

export const saveKt1258Failure = createAction('[Kt1258/API] Save Kt1258 Failure', props<{ error: ErrorModel }>());
