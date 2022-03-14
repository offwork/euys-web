import { ErrorModel, KtAtYaglama, KtAtYaglamaViewModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1256 Page] Init');

export const loadKt1256Success = createAction(
  '[Kt1256/API] Load Kt1256 Success',
  props<{ data: KtAtYaglamaViewModel }>()
);

export const loadKt1256Failure = createAction('[Kt1256/API] Load Kt1256 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1256 Page] Save', props<{ ktAtYaglama: KtAtYaglama }>());

export const saveKt1256Success = createAction('[Kt1256/API] Save Kt1256 Success', props<{ record: KtAtYaglama }>());

export const saveKt1256Failure = createAction('[Kt1256/API] Save Kt1256 Failure', props<{ error: ErrorModel }>());
