import { ErrorModel, KtAtKromKaplamaTfsCro3 } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1239 Page] Init');

export const loadKt1239Success = createAction(
  '[Kt1239/API] Load Kt1239 Success',
  props<{ data: KtAtKromKaplamaTfsCro3[] }>()
);

export const loadKt1239Failure = createAction('[Kt1239/API] Load Kt1239 Failure', props<{ error: ErrorModel }>());
export const save = createAction('[Kt1239 Page] Save', props<{ ktAtKromKaplamaTfsCro3: KtAtKromKaplamaTfsCro3 }>());

export const saveKt1239Success = createAction(
  '[Kt1239/API] Save Kt1239 Success',
  props<{ record: KtAtKromKaplamaTfsCro3 }>()
);

export const saveKt1239Failure = createAction('[Kt1239/API] Save Kt1239 Failure', props<{ error: ErrorModel }>());
