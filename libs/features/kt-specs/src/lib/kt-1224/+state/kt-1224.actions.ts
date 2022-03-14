import { ErrorModel, KtAtDokumCelikKalitesi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1224 Page] Init');

export const loadKt1224Success = createAction(
  '[Kt1224/API] Load Kt1224 Success',
  props<{ data: KtAtDokumCelikKalitesi[] }>()
);

export const loadKt1224Failure = createAction('[Kt1224/API] Load Kt1224 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1224 Page] Save', props<{ ktAtDokumCelikKalitesi: KtAtDokumCelikKalitesi }>());

export const saveKt1224Success = createAction(
  '[Kt1224/API] Save Kt1224 Success',
  props<{ record: KtAtDokumCelikKalitesi }>()
);

export const saveKt1224Failure = createAction('[Kt1224/API] Save Kt1224 Failure', props<{ error: ErrorModel }>());
