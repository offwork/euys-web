import { ErrorModel, KtAtEnineKalinlikVeIkiKenarFarklari } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1226 Page] Init');

export const loadKt1226Success = createAction(
  '[Kt1226/API] Load Kt1226 Success',
  props<{ data: KtAtEnineKalinlikVeIkiKenarFarklari[] }>()
);

export const loadKt1226Failure = createAction('[Kt1226/API] Load Kt1226 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1226 Page] Save', props<{ KtAtEnineKalinlikVeIkiKenarFarklari: KtAtEnineKalinlikVeIkiKenarFarklari }>());

export const saveKt1226Success = createAction(
  '[Kt1226/API] Save Kt1226 Success',
  props<{ record: KtAtEnineKalinlikVeIkiKenarFarklari }>()
);

export const saveKt1226Failure = createAction('[Kt1226/API] Save Kt1226 Failure', props<{ error: ErrorModel }>());