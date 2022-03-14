import { ErrorModel, KtCgl12HavaSogutma } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1218 Page] Init');

export const loadKt1218Success = createAction(
  '[Kt1218/API] Load Kt1218 Success',
  props<{ data: KtCgl12HavaSogutma[] }>()
);

export const loadKt1218Failure = createAction('[Kt1218/API] Load Kt1218 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1218 Page] Save', props<{ KtCgl12HavaSogutma: KtCgl12HavaSogutma }>());

export const saveKt1218Success = createAction(
  '[Kt1218/API] Save Kt1218 Success',
  props<{ record: KtCgl12HavaSogutma }>()
);

export const saveKt1218Failure = createAction('[Kt1218/API] Save Kt1218 Failure', props<{ error: ErrorModel }>());
