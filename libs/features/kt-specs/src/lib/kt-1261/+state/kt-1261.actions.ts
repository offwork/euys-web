import { ErrorModel, KtAtYuzeyDuzgunluguIUnit } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1261 Page] Init');

export const loadKt1261Success = createAction(
  '[Kt1261/API] Load Kt1261 Success',
  props<{ data: KtAtYuzeyDuzgunluguIUnit[] }>()
);

export const loadKt1261Failure = createAction(
  '[Kt1261/API] Load Kt1261 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1261 Page] Save',
  props<{ ktAtYuzeyDuzgunluguIUnit: KtAtYuzeyDuzgunluguIUnit }>()
);

export const saveKt1261Success = createAction(
  '[Kt1261/API] Save Kt1261 Success',
  props<{ record: KtAtYuzeyDuzgunluguIUnit }>()
);

export const saveKt1261Failure = createAction(
  '[Kt1261/API] Save Kt1261 Failure',
  props<{ error: ErrorModel }>()
);
