import {
  Celik,
  ErrorModel,
  KtSpBobinDilUcu,
  KtSpBobinDilUcuViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1314 Page] Init');

export const loadKt1314Success = createAction(
  '[Kt1314/API] Load Kt1314 Success',
  props<{ data: KtSpBobinDilUcuViewModel }>()
);

export const loadKt1314CeliklerSuccess = createAction(
  '[Kt1314/API] Load Celikler Kt1314 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1314UrunlerSuccess = createAction(
  '[Kt1314/API] Load Urunler Kt1314 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1314Failure = createAction(
  '[Kt1314/API] Load Kt1314 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1314UrunlerFailure = createAction(
  '[Kt1314/API] Load Urunler Kt1314 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1314CeliklerFailure = createAction(
  '[Kt1314/API] Load Celikler Kt1314 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1314 Page] Save',
  props<{ ktSpBobinDilUcu: KtSpBobinDilUcu }>()
);

export const saveKt1314Success = createAction(
  '[Kt1314/API] Save Kt1314 Success',
  props<{ record: KtSpBobinDilUcu }>()
);

export const saveKt1314Failure = createAction(
  '[Kt1314/API] Save Kt1314 Failure',
  props<{ error: ErrorModel }>()
);
