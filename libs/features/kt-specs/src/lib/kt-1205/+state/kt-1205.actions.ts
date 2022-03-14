/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtAgirlik } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1205 Page] Init');

export const loadKt1205Success = createAction('[Kt1205/API] Load Kt1205 Success', props<{ data: KtAtAgirlik[] }>());

export const loadKt1205Failure = createAction('[Kt1205/API] Load Kt1205 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1205 Page] Save', props<{ ktAtAgirlik: KtAtAgirlik }>());

export const saveKt1205Success = createAction('[Kt1205/API] Save Kt1205 Success', props<{ record: KtAtAgirlik }>());

export const saveKt1205Failure = createAction('[Kt1205/API] Save Kt1205 Failure', props<{ error: ErrorModel }>());
