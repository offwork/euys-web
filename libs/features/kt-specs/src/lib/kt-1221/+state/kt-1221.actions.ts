import { createAction, props } from '@ngrx/store';
import { ErrorModel, KtAtCgl12Temizleme } from '@euys/api-interfaces';

export const init = createAction('[Kt1221 Page] Init');

export const loadKt1221Success = createAction(
  '[Kt1221/API] Load Kt1221 Success',
  props<{ data: KtAtCgl12Temizleme[] }>()
);

export const loadKt1221Failure = createAction('[Kt1221/API] Load Kt1221 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1221 Page] Save', props<{ ktAtCgl12Temizleme: KtAtCgl12Temizleme }>());

export const saveKt1221Success = createAction(
  '[Kt1221/API] Save Kt1221 Success',
  props<{ record: KtAtCgl12Temizleme }>()
);

export const saveKt1221Failure = createAction('[Kt1221/API] Save Kt1221 Failure', props<{ error: ErrorModel }>());
