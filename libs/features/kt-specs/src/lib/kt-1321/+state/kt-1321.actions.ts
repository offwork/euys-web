import {
  Celik,
  ErrorModel,
  KtSpCgl12Temizleme,
  KtSpCgl12TemizlemeViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1321 Page] Init');

export const loadKt1321Success = createAction(
  '[Kt1321/API] Load Kt1321 Success',
  props<{ data: KtSpCgl12TemizlemeViewModel }>()
);

export const loadKt1321CeliklerSuccess = createAction(
  '[Kt1321/API] Load Celikler Kt1321 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1321UrunlerSuccess = createAction(
  '[Kt1321/API] Load Urunler Kt1321 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1321Failure = createAction(
  '[Kt1321/API] Load Kt1321 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1321UrunlerFailure = createAction(
  '[Kt1321/API] Load Urunler Kt1321 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1321CeliklerFailure = createAction(
  '[Kt1321/API] Load Celikler Kt1321 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1321 Page] Save',
  props<{ ktSpCgl12Temizleme: KtSpCgl12Temizleme }>()
);

export const saveKt1321Success = createAction(
  '[Kt1321/API] Save Kt1321 Success',
  props<{ record: KtSpCgl12Temizleme }>()
);

export const saveKt1321Failure = createAction(
  '[Kt1321/API] Save Kt1321 Failure',
  props<{ error: ErrorModel }>()
);
