import { ErrorModel, KtAtKalinlikSapmaAraligi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1236 Page] Init');

export const loadKt1236Success = createAction(
  '[Kt1236/API] Load Kt1236 Success',
  props<{ data: KtAtKalinlikSapmaAraligi[] }>()
);

export const loadKt1236Failure = createAction('[Kt1236/API] Load Kt1236 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1236 Page] Save', props<{ ktAtKalinlikSapmaAraligi: KtAtKalinlikSapmaAraligi }>());

export const saveKt1236Success = createAction(
  '[Kt1236/API] Save Kt1236 Success',
  props<{ record: KtAtKalinlikSapmaAraligi }>()
);

export const saveKt1236Failure = createAction('[Kt1236/API] Save Kt1236 Failure', props<{ error: ErrorModel }>());
