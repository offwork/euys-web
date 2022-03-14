import { ErrorModel, KtAtIiTenekeKalayKaplama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1233 Page] Init');

export const loadKt1233Success = createAction(
  '[Kt1233/API] Load Kt1233 Success',
  props<{ data: KtAtIiTenekeKalayKaplama[] }>()
);

export const loadKt1233Failure = createAction('[Kt1233/API] Load Kt1233 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1233 Page] Save', props<{ ktAtIiTenekeKalayKaplama: KtAtIiTenekeKalayKaplama }>());

export const saveKt1233Success = createAction(
  '[Kt1233/API] Save Kt1233 Success',
  props<{ record: KtAtIiTenekeKalayKaplama }>()
);

export const saveKt1233Failure = createAction('[Kt1233/API] Save Kt1233 Failure', props<{ error: ErrorModel }>());
