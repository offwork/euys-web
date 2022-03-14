import {
  Celik,
  ErrorModel,
  KtSpBobinBalikKuyrugu,
  KtSpBobinBalikKuyruguViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1313 Page] Init');

export const loadKt1313Success = createAction(
  '[Kt1313/API] Load Kt1313 Success',
  props<{ data: KtSpBobinBalikKuyruguViewModel }>()
);

export const loadKt1313CeliklerSuccess = createAction(
  '[Kt1313/API] Load Celikler Kt1313 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1313UrunlerSuccess = createAction(
  '[Kt1313/API] Load Urunler Kt1313 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1313Failure = createAction(
  '[Kt1313/API] Load Kt1313 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1313UrunlerFailure = createAction(
  '[Kt1313/API] Load Urunler Kt1313 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1313CeliklerFailure = createAction(
  '[Kt1313/API] Load Celikler Kt1313 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1313 Page] Save',
  props<{ ktSpBobinBalikKuyrugu: KtSpBobinBalikKuyrugu }>()
);

export const saveKt1313Success = createAction(
  '[Kt1313/API] Save Kt1313 Success',
  props<{ record: KtSpBobinBalikKuyrugu }>()
);

export const saveKt1313Failure = createAction(
  '[Kt1313/API] Save Kt1313 Failure',
  props<{ error: ErrorModel }>()
);
