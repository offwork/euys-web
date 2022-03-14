import { createAction, props } from '@ngrx/store';
import { ErrorModel, KtAtCalHattiTavlama } from '@euys/api-interfaces';

export const init = createAction('[Kt1216 Page] Init');

export const loadKt1216Success = createAction(
  '[Kt1216/API] Load Kt1216 Success',
  props<{ data: KtAtCalHattiTavlama[] }>()
);

export const loadKt1216Failure = createAction('[Kt1216/API] Load Kt1216 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1216 Page] Save', props<{ ktAtCalHattiTavlama: KtAtCalHattiTavlama }>());

export const saveKt1216Success = createAction(
  '[Kt1216/API] Save Kt1216 Success',
  props<{ record: KtAtCalHattiTavlama }>()
);

export const saveKt1216Failure = createAction('[Kt1216/API] Save Kt1216 Failure', props<{ error: ErrorModel }>());
