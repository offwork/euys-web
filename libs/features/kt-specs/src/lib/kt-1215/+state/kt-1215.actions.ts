import { createAction, props } from '@ngrx/store';
import { ErrorModel, KtAtBobHazTempYuzdeUzama } from '@euys/api-interfaces';

export const init = createAction('[Kt1215 Page] Init');

export const loadKt1215Success = createAction(
  '[Kt1215/API] Load Kt1215 Success',
  props<{ data: KtAtBobHazTempYuzdeUzama[] }>()
);

export const loadKt1215Failure = createAction('[Kt1215/API] Load Kt1215 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1215 Page] Save', props<{ ktAtBobHazTempYuzdeUzama: KtAtBobHazTempYuzdeUzama }>());

export const saveKt1215Success = createAction(
  '[Kt1215/API] Save Kt1215 Success',
  props<{ record: KtAtBobHazTempYuzdeUzama }>()
);

export const saveKt1215Failure = createAction('[Kt1215/API] Save Kt1215 Failure', props<{ error: ErrorModel }>());
