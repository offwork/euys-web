import { createAction, props } from '@ngrx/store';
import { ErrorModel, KtAtBobinBalikKuyrugu } from '@euys/api-interfaces';

export const init = createAction('[Kt1213 Page] Init');

export const loadKt1213Success = createAction(
  '[Kt1213/API] Load Kt1213 Success',
  props<{ data: KtAtBobinBalikKuyrugu[] }>()
);

export const loadKt1213Failure = createAction('[Kt1213/API] Load Kt1213 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1213 Page] Save', props<{ ktAtBobinBalikKuyrugu: KtAtBobinBalikKuyrugu }>());

export const saveKt1213Success = createAction(
  '[Kt1213/API] Save Kt1213 Success',
  props<{ record: KtAtBobinBalikKuyrugu }>()
);

export const saveKt1213Failure = createAction('[Kt1213/API] Save Kt1213 Failure', props<{ error: ErrorModel }>());
