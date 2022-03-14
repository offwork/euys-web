/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtBobinDilUcu } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1214 Page] Init');

export const loadKt1214Success = createAction('[Kt1214/API] Load Kt1214 Success', props<{ data: KtAtBobinDilUcu[] }>());

export const loadKt1214Failure = createAction('[Kt1214/API] Load Kt1214 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1214 Page] Save', props<{ ktAtBobinDilUcu: KtAtBobinDilUcu }>());

export const saveKt1214Success = createAction('[Kt1214/API] Save Kt1214 Success', props<{ record: KtAtBobinDilUcu }>());

export const saveKt1214Failure = createAction('[Kt1214/API] Save Kt1214 Failure', props<{ error: ErrorModel }>());
