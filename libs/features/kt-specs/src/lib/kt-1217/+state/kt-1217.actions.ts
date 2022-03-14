import { ErrorModel, KtCalHattiYuzdeUzama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1217 Page] Init');

/* <====================> LOAD <====================> */
export const loadKt1217Success = createAction(
  '[Kt1217/API] Load Kt1217 Success',
  props<{ calYuzdeUzama: KtCalHattiYuzdeUzama[] }>()
);
export const loadKt1217Failure = createAction('[Kt1217/API] Load Kt1217 Failure', props<{ error: ErrorModel }>());

/* <====================> SAVE <====================> */
export const saveKt1217 = createAction('[Kt1217/API] Save Kt1217', props<{ calYuzdeUzama: KtCalHattiYuzdeUzama }>());
export const saveKt1217Success = createAction('[Kt1217/API] Save Kt1217 Success', props<{ message: string }>());
export const saveKt1217Failure = createAction('[Kt1217/API] Save Kt1217 Failure', props<{ error: ErrorModel }>());

/* <====================> UPDATE <====================> */
export const updateKt1217 = createAction(
  '[Kt1217/API] Update Kt1217',
  props<{ calYuzdeUzama: KtCalHattiYuzdeUzama }>()
);
export const updateKt1217Success = createAction('[Kt1217/API] Update Kt1217 Success', props<{ message: string }>());
export const updateKt1217Failure = createAction('[Kt1217/API] Update Kt1217 Failure', props<{ error: ErrorModel }>());
