import { ErrorModel, KtAtSleeveKalinlik } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1248 Page] Init');

export const loadKt1248Success = createAction(
  '[Kt1248/API] Load Kt1248 Success',
  props<{ data: KtAtSleeveKalinlik[] }>()
);

export const loadKt1248Failure = createAction('[Kt1248/API] Load Kt1248 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1248 Page] Save', props<{ ktAtSleeveKalinlik: KtAtSleeveKalinlik }>());

export const saveKt1248Success = createAction(
  '[Kt1248/API] Save Kt1248 Success',
  props<{ record: KtAtSleeveKalinlik }>()
);

export const saveKt1248Failure = createAction('[Kt1248/API] Save Kt1248 Failure', props<{ error: ErrorModel }>());
