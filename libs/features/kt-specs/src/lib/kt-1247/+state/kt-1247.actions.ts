/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtSlabYuzeyTemizleme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1247 Page] Init');

export const loadKt1247Success = createAction(
  '[Kt1247/API] Load Kt1247 Success',
  props<{ data: KtAtSlabYuzeyTemizleme[] }>()
);

export const loadKt1247Failure = createAction('[Kt1247/API] Load Kt1247 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1247 Page] Save', props<{ ktAtSlabYuzeyTemizleme: KtAtSlabYuzeyTemizleme }>());

export const saveKt1247Success = createAction(
  '[Kt1247/API] Save Kt1247 Success',
  props<{ record: KtAtSlabYuzeyTemizleme }>()
);

export const saveKt1247Failure = createAction('[Kt1247/API] Save Kt1247 Failure', props<{ error: ErrorModel }>());
