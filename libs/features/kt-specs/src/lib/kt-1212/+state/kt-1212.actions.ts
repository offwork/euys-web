import { KtAtBafHattiTavlama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1212 Page] Init');

export const loadKt1212Success = createAction(
  '[Kt1212/API] Load Kt1212 Success',
  props<{ data: KtAtBafHattiTavlama[] }>()
);

export const loadKt1212Failure = createAction('[Kt1212/API] Load Kt1212 Failure', props<{ error: any }>());

export const save = createAction('[Kt1212 Page] Save', props<{ ktAtBafHattiTavlama: KtAtBafHattiTavlama }>());

export const saveKt1212Success = createAction(
  '[Kt1212/API] Save Kt1212 Success',
  props<{ record: KtAtBafHattiTavlama }>()
);

export const saveKt1212Failure = createAction('[Kt1212/API] Save Kt1212 Failure', props<{ error: any }>());
