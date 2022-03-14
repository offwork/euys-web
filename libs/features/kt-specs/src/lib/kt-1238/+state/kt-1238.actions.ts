/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtKoseDikligi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1238 Page] Init');

export const loadKt1238Success = createAction('[Kt1238/API] Load Kt1238 Success', props<{ data: KtAtKoseDikligi[] }>());

export const loadKt1238Failure = createAction('[Kt1238/API] Load Kt1238 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1238 Page] Save', props<{ ktAtKoseDikligi: KtAtKoseDikligi }>());

export const saveKt1238Success = createAction('[Kt1238/API] Save Kt1238 Success', props<{ record: KtAtKoseDikligi }>());

export const saveKt1238Failure = createAction('[Kt1238/API] Save Kt1238 Failure', props<{ error: ErrorModel }>());
