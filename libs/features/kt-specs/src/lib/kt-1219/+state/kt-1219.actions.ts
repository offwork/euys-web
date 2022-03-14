/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtCgl12Tavlama1 } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1219 Page] Init');

export const loadKt1219Success = createAction('[Kt1219/API] Load Kt1219 Success', props<{ data: KtCgl12Tavlama1[] }>());

export const loadKt1219Failure = createAction('[Kt1219/API] Load Kt1219 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1219 Page] Save', props<{ ktCgl12Tavlama1: KtCgl12Tavlama1 }>());

export const saveKt1219Success = createAction('[Kt1219/API] Save Kt1219 Success', props<{ record: KtCgl12Tavlama1 }>());

export const saveKt1219Failure = createAction('[Kt1219/API] Save Kt1219 Failure', props<{ error: ErrorModel }>());
