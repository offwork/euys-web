import {
  Celik,
  ErrorModel,
  KtSpIiTenekeKalayErgitme,
  KtSpIiTenekeKalayErgitmeViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1331 Page] Init');

export const loadKt1331Success = createAction(
  '[Kt1331/API] Load Kt1331 Success',
  props<{ data: KtSpIiTenekeKalayErgitmeViewModel }>()
);

export const loadKt1331CeliklerSuccess = createAction(
  '[Kt1331/API] Load Celikler Kt1331 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1331UrunlerSuccess = createAction(
  '[Kt1331/API] Load Urunler Kt1331 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1331Failure = createAction(
  '[Kt1331/API] Load Kt1331 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1331UrunlerFailure = createAction(
  '[Kt1331/API] Load Urunler Kt1331 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1331CeliklerFailure = createAction(
  '[Kt1331/API] Load Celikler Kt1331 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1331 Page] Save',
  props<{ ktSpIiTenekeKalayErgitme: KtSpIiTenekeKalayErgitme }>()
);

export const saveKt1331Success = createAction(
  '[Kt1331/API] Save Kt1331 Success',
  props<{ record: KtSpIiTenekeKalayErgitme }>()
);

export const saveKt1331Failure = createAction(
  '[Kt1331/API] Save Kt1331 Failure',
  props<{ error: ErrorModel }>()
);
