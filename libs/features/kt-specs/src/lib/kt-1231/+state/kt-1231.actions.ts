import { createAction, props } from '@ngrx/store';
import { ErrorModel, KtAtIiTenekeKalayErgitme } from '@euys/api-interfaces';

export const init = createAction('[Kt1231 Page] Init');

export const loadKt1231Success = createAction(
  '[Kt1231/API] Load Kt1231 Success',
  props<{ data: KtAtIiTenekeKalayErgitme[] }>()
);

export const loadKt1231Failure = createAction('[Kt1231/API] Load Kt1231 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1231 Page] Save', props<{ ktAtIiTenekeKalayErgitme: KtAtIiTenekeKalayErgitme }>());

export const saveKt1231Success = createAction(
  '[Kt1231/API] Save Kt1231 Success',
  props<{ record: KtAtIiTenekeKalayErgitme }>()
);

export const saveKt1231Failure = createAction('[Kt1231/API] Save Kt1231 Failure', props<{ error: ErrorModel }>());
