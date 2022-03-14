import { ErrorModel, KtAtIiTenekeTemizleme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1234 Page] Init');

export const loadKt1234Success = createAction(
  '[Kt1234/API] Load Kt1234 Success',
  props<{ data: KtAtIiTenekeTemizleme[] }>()
);

export const loadKt1234Failure = createAction('[Kt1234/API] Load Kt1234 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1234 Page] Save', props<{ ktAtIiTenekeTemizleme: KtAtIiTenekeTemizleme }>());

export const saveKt1234Success = createAction(
  '[Kt1234/API] Save Kt1234 Success',
  props<{ record: KtAtIiTenekeTemizleme }>()
);

export const saveKt1234Failure = createAction('[Kt1234/API] Save Kt1234 Failure', props<{ error: ErrorModel }>());
