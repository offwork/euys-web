import { ErrorModel, KtAtIiTenekeAsitleme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1230 Page] Init');

export const loadKt1230Success = createAction(
  '[Kt1230/API] Load Kt1230 Success',
  props<{ data: KtAtIiTenekeAsitleme[] }>()
);

export const loadKt1230Failure = createAction('[Kt1230/API] Load Kt1230 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1230 Page] Save', props<{ ktAtIiTenekeAsitleme: KtAtIiTenekeAsitleme }>());

export const saveKt1230Success = createAction(
  '[Kt1230/API] Save Kt1201 Success',
  props<{ record: KtAtIiTenekeAsitleme }>()
);

export const saveKt1230Failure = createAction('[Kt1230/API] Save Kt1230 Failure', props<{ error: ErrorModel }>());
