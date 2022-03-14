import {
  Celik,
  ErrorModel,
  KtSpCgl12Tavlama1,
  KtSpCgl12Tavlama1ViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1319 Page] Init');

export const loadKt1319Success = createAction(
  '[Kt1319/API] Load Kt1319 Success',
  props<{ data: KtSpCgl12Tavlama1ViewModel }>()
);

export const loadKt1319CeliklerSuccess = createAction(
  '[Kt1319/API] Load Celikler Kt1319 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1319UrunlerSuccess = createAction(
  '[Kt1319/API] Load Urunler Kt1319 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1319Failure = createAction(
  '[Kt1319/API] Load Kt1319 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1319UrunlerFailure = createAction(
  '[Kt1319/API] Load Urunler Kt1319 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1319CeliklerFailure = createAction(
  '[Kt1319/API] Load Celikler Kt1319 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1319 Page] Save',
  props<{ ktSpCgl12Tavlama1: KtSpCgl12Tavlama1 }>()
);

export const saveKt1319Success = createAction(
  '[Kt1319/API] Save Kt1319 Success',
  props<{ record: KtSpCgl12Tavlama1 }>()
);

export const saveKt1319Failure = createAction(
  '[Kt1319/API] Save Kt1319 Failure',
  props<{ error: ErrorModel }>()
);
