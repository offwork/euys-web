import { ErrorModel, KtAtKromKaplamaTfsDragout } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1240 Page] Init');

export const loadKt1240Success = createAction(
  '[Kt1240/API] Load Kt1240 Success',
  props<{ data: KtAtKromKaplamaTfsDragout[] }>()
);

export const loadKt1240Failure = createAction('[Kt1240/API] Load Kt1240 Failure', props<{ error: ErrorModel }>());
export const save = createAction(
  '[Kt1240 Page] Save',
  props<{ ktAtKromKaplamaTfsDragout: KtAtKromKaplamaTfsDragout }>()
);

export const saveKt1240Success = createAction(
  '[Kt1240/API] Save Kt1240 Success',
  props<{ record: KtAtKromKaplamaTfsDragout }>()
);

export const saveKt1240Failure = createAction('[Kt1240/API] Save Kt1240 Failure', props<{ error: ErrorModel }>());
