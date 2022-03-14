/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtLevhaHadIkmalSicaklik } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1243 Page] Init');

export const loadKt1243Success = createAction(
  '[Kt1243/API] Load Kt1243 Success',
  props<{ data: KtAtLevhaHadIkmalSicaklik[] }>()
);

export const loadKt1243Failure = createAction('[Kt1243/API] Load Kt1243 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1243 Page] Save', props<{ ktAtLevhaHadIkmalSicaklik: KtAtLevhaHadIkmalSicaklik }>());

export const saveKt1243Success = createAction(
  '[Kt1243/API] Save Kt1243 Success',
  props<{ record: KtAtLevhaHadIkmalSicaklik }>()
);

export const saveKt1243Failure = createAction('[Kt1243/API] Save Kt1243 Failure', props<{ error: ErrorModel }>());
