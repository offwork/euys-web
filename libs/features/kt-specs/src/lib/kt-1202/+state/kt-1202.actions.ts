import { ErrorModel, KtAt1SckHadSarilmaSicakl } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1202 Page] Init');

export const loadKt1202Success = createAction(
  '[Kt1202/API] Load Kt1202 Success',
  props<{ data: KtAt1SckHadSarilmaSicakl[] }>()
);

export const loadKt1202Failure = createAction('[Kt1202/API] Load Kt1202 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1202 Page] Save', props<{ ktAt1SckHadSarilmaSicakl: KtAt1SckHadSarilmaSicakl }>());

export const saveKt1202Success = createAction(
  '[Kt1202/API] Save Kt1202 Success',
  props<{ record: KtAt1SckHadSarilmaSicakl }>()
);

export const saveKt1202Failure = createAction('[Kt1202/API] Save Kt1202 Failure', props<{ error: ErrorModel }>());
