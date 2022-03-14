import { ErrorModel, KtAtIiTenekeKalayKimyasal } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1232 Page] Init');

export const loadKt1232Success = createAction(
  '[Kt1232/API] Load Kt1232 Success',
  props<{ data: KtAtIiTenekeKalayKimyasal[] }>()
);

export const loadKt1232Failure = createAction('[Kt1232/API] Load Kt1232 Failure', props<{ error: ErrorModel }>());
export const save = createAction(
  '[Kt1232 Page] Save',
  props<{ ktAtIiTenekeKalayKimyasal: KtAtIiTenekeKalayKimyasal }>()
);

export const saveKt1232Success = createAction(
  '[Kt1232/API] Save Kt1232 Success',
  props<{ record: KtAtIiTenekeKalayKimyasal }>()
);

export const saveKt1232Failure = createAction('[Kt1232/API] Save Kt1232 Failure', props<{ error: ErrorModel }>());
