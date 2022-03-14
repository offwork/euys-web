import { ErrorModel, KtAtAlkaliTemizleme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1206 Page] Init');

export const loadKt1206Success = createAction(
  '[Kt1206/API] Load Kt1206 Success',
  props<{ data: KtAtAlkaliTemizleme[] }>()
);

export const loadKt1206Failure = createAction('[Kt1206/API] Load Kt1206 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1206 Page] Save', props<{ ktAtAlkaliTemizleme: KtAtAlkaliTemizleme }>());

export const saveKt1206Success = createAction(
  '[Kt1206/API] Save Kt1206 Success',
  props<{ record: KtAtAlkaliTemizleme }>()
);

export const saveKt1206Failure = createAction('[Kt1206/API] Save Kt1206 Failure', props<{ error: ErrorModel }>());
