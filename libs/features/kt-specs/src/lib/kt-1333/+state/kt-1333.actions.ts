import {
  Celik,
  ErrorModel,
  KtSpIiTenekeKalayKaplama,
  KtSpIiTenekeKalayKaplamaViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1333 Page] Init');

export const loadKt1333Success = createAction(
  '[Kt1333/API] Load Kt1333 Success',
  props<{ data: KtSpIiTenekeKalayKaplamaViewModel }>()
);

export const loadKt1333CeliklerSuccess = createAction(
  '[Kt1333/API] Load Celikler Kt1333 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1333UrunlerSuccess = createAction(
  '[Kt1333/API] Load Urunler Kt1333 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1333Failure = createAction(
  '[Kt1333/API] Load Kt1333 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1333UrunlerFailure = createAction(
  '[Kt1333/API] Load Urunler Kt1333 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1333CeliklerFailure = createAction(
  '[Kt1333/API] Load Celikler Kt1333 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1333 Page] Save',
  props<{ ktSpIiTenekeKalayKaplama: KtSpIiTenekeKalayKaplama }>()
);

export const saveKt1333Success = createAction(
  '[Kt1333/API] Save Kt1333 Success',
  props<{ record: KtSpIiTenekeKalayKaplama }>()
);

export const saveKt1333Failure = createAction(
  '[Kt1333/API] Save Kt1333 Failure',
  props<{ error: ErrorModel }>()
);
