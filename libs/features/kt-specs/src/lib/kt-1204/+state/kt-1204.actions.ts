import { ErrorModel, KtAt2SckHadSarilmaSicakl } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1204 Page] Init');

export const loadKt1204Success = createAction(
  '[Kt1204/API] Load Kt1204 Success',
  props<{ data: KtAt2SckHadSarilmaSicakl[] }>()
);

export const loadKt1204Failure = createAction('[Kt1204/API] Load Kt1204 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1204 Page] Save', props<{ ktAt2SckHadSarilmaSicakl: KtAt2SckHadSarilmaSicakl }>());

export const saveKt1204Success = createAction(
  '[Kt1204/API] Save Kt1204 Success',
  props<{ record: KtAt2SckHadSarilmaSicakl }>()
);

export const saveKt1204Failure = createAction('[Kt1204/API] Save Kt1204 Failure', props<{ error: ErrorModel }>());
