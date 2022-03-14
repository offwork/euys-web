/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtCgl12Tavlama2 } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1220 Page] Init');

export const loadKt1220Success = createAction('[Kt1220/API] Load Kt1220 Success', props<{ data: KtCgl12Tavlama2[] }>());

export const loadKt1220Failure = createAction('[Kt1220/API] Load Kt1220 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1220 Page] Save', props<{ ktCgl12Tavlama2: KtCgl12Tavlama2 }>());

export const saveKt1220Success = createAction('[Kt1220/API] Save Kt1220 Success', props<{ record: KtCgl12Tavlama2 }>());

export const saveKt1220Failure = createAction('[Kt1220/API] Save Kt1220 Failure', props<{ error: ErrorModel }>());
