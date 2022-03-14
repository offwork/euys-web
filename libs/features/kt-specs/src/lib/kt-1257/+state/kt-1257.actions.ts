/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtYuzeyDuzgunlugu,  } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1257 Page] Init');

export const loadKt1257Success = createAction(
  '[Kt1257/API] Load Kt1257 Success',
  props<{ data: KtAtYuzeyDuzgunlugu[] }>()
);

export const loadKt1257Failure = createAction('[Kt1257/API] Load Kt1257 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1257 Page] Save', props<{ ktAtYuzeyDuzgunlugu: KtAtYuzeyDuzgunlugu }>());

export const saveKt1257Success = createAction(
  '[Kt1257/API] Save Kt1257 Success',
  props<{ record: KtAtYuzeyDuzgunlugu }>()
);

export const saveKt1257Failure = createAction('[Kt1257/API] Save Kt1257 Failure', props<{ error: ErrorModel }>());
