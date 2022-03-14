/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAt2SckHadIkmalSicakl } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1203 Page] Init');

export const loadKt1203Success = createAction(
  '[Kt1203/API] Load Kt1203 Success',
  props<{ data: KtAt2SckHadIkmalSicakl[] }>()
);

export const loadKt1203Failure = createAction('[Kt1203/API] Load Kt1203 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1203 Page] Save', props<{ KtAt2SckHadIkmalSicakl: KtAt2SckHadIkmalSicakl }>());

export const saveKt1203Success = createAction(
  '[Kt1203/API] Save Kt1203 Success',
  props<{ record: KtAt2SckHadIkmalSicakl }>()
);

export const saveKt1203Failure = createAction('[Kt1203/API] Save Kt1203 Failure', props<{ error: ErrorModel }>());
