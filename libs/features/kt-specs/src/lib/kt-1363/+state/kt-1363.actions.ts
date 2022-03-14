import {
  Celik,
  ErrorModel,
  KtSpAsitlemeTlv,
  KtSpAsitlemeTlvViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1363 Page] Init');

export const loadKt1363Success = createAction(
  '[Kt1363/API] Load Kt1363 Success',
  props<{ data: KtSpAsitlemeTlvViewModel }>()
);
export const loadKt1363UrunlerSuccess = createAction(
  '[Kt1363/API] Load Urunler Kt1363 Success',
  props<{ data: Urun[] }>()
);
export const loadKt1363CeliklerSuccess = createAction(
  '[Kt1363/API] Load Celikler Kt1363 Success',
  props<{ data: Celik[] }>()
);
export const loadKt1363Failure = createAction(
  '[Kt1363/API] Load Kt1363 Failure',
  props<{ error: ErrorModel }>()
);
export const loadKt1363UrunlerFailure = createAction(
  '[Kt1363/API] Load Urunler Kt1363 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1363CeliklerFailure = createAction(
  '[Kt1363/API] Load Celikler Kt1363 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1363 Page] Save',
  props<{ ktSpAsitlemeTlv: KtSpAsitlemeTlv }>()
);

export const saveKt1363Success = createAction(
  '[Kt1363/API] Save Kt1363 Success',
  props<{ record: KtSpAsitlemeTlv }>()
);

export const saveKt1363Failure = createAction(
  '[Kt1363/API] Save Kt1363 Failure',
  props<{ error: ErrorModel }>()
);
