import { ErrorModel, KtAtNumune, KtAtNumuneViewModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1211 Page] Init');

export const loadKt1211Success = createAction(
  '[Kt1211/API] Load Kt1211 Success',
  props<{ data: KtAtNumuneViewModel }>()
);

export const loadKt1211Failure = createAction('[Kt1211/API] Load Kt1211 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1211 Page] Save', props<{ ktAtNumune: KtAtNumune }>());

export const saveKt1211Success = createAction(
  '[Kt1211/API] Save Kt1211 Success',
  props<{ record: KtAtNumune }>()
);

export const saveKt1211Failure = createAction('[Kt1211/API] Save Kt1211 Failure', props<{ error: ErrorModel }>());
