import { KtAtAmbalajPaket } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1207 Page] Init');

export const loadKt1207Success = createAction(
  '[Kt1207/API] Load Kt1207 Success',
  props<{ data: KtAtAmbalajPaket[] }>()
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadKt1207Failure = createAction('[Kt1207/API] Load Kt1207 Failure', props<{ error: any }>());

export const save = createAction('[Kt1207 Page] Save', props<{ ktAtAmbalajPaket: KtAtAmbalajPaket }>());

export const saveKt1207Success = createAction(
  '[Kt1207/API] Save Kt1207 Success',
  props<{ record: KtAtAmbalajPaket }>()
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveKt1207Failure = createAction('[Kt1207/API] Save Kt1207 Failure', props<{ error: any }>());
