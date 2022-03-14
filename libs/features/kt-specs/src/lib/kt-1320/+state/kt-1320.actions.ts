import {
  Celik,
  ErrorModel,
  KtSpCgl12Tavlama2,
  KtSpCgl12Tavlama2ViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1320 Page] Init');

export const loadKt1320Success = createAction(
  '[Kt1320/API] Load Kt1320 Success',
  props<{ data: KtSpCgl12Tavlama2ViewModel }>()
);

export const loadKt1320CeliklerSuccess = createAction(
  '[Kt1320/API] Load Celikler Kt1320 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1320UrunlerSuccess = createAction(
  '[Kt1320/API] Load Urunler Kt1320 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1320Failure = createAction(
  '[Kt1320/API] Load Kt1320 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1320UrunlerFailure = createAction(
  '[Kt1320/API] Load Urunler Kt1320 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1320CeliklerFailure = createAction(
  '[Kt1320/API] Load Celikler Kt1320 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1320 Page] Save',
  props<{ ktSpCgl12Tavlama2: KtSpCgl12Tavlama2 }>()
);

export const saveKt1320Success = createAction(
  '[Kt1320/API] Save Kt1320 Success',
  props<{ record: KtSpCgl12Tavlama2 }>()
);

export const saveKt1320Failure = createAction(
  '[Kt1320/API] Save Kt1320 Failure',
  props<{ error: ErrorModel }>()
);
