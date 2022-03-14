/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAt1SckHadIkmalSicakl } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1201 Page] Init');

export const loadKt1201Success = createAction(
  '[Kt1201/API] Load Kt1201 Success',
  props<{ data: KtAt1SckHadIkmalSicakl[] }>()
);

export const loadKt1201Failure = createAction('[Kt1201/API] Load Kt1201 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1201 Page] Save', props<{ ktAt1SckHadIkmalSicakl: KtAt1SckHadIkmalSicakl }>());

export const saveKt1201Success = createAction(
  '[Kt1201/API] Save Kt1201 Success',
  props<{ record: KtAt1SckHadIkmalSicakl }>()
);

export const saveKt1201Failure = createAction('[Kt1201/API] Save Kt1201 Failure', props<{ error: ErrorModel }>());
