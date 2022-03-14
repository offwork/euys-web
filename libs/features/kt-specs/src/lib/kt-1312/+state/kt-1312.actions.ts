import {
  Celik,
  ErrorModel,
  KtSpBafHattiTavlama,
  KtSpBafHattiTavlamaViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1312 Page] Init');

export const loadKt1312Success = createAction(
  '[Kt1312/API] Load Kt1312 Success',
  props<{ data: KtSpBafHattiTavlamaViewModel }>()
);

export const loadKt1312CeliklerSuccess = createAction(
  '[Kt1312/API] Load Celikler Kt1312 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1312UrunlerSuccess = createAction(
  '[Kt1312/API] Load Urunler Kt1312 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1312Failure = createAction(
  '[Kt1312/API] Load Kt1312 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1312UrunlerFailure = createAction(
  '[Kt1312/API] Load Urunler Kt1312 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1312CeliklerFailure = createAction(
  '[Kt1312/API] Load Celikler Kt1312 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1312 Page] Save',
  props<{ ktSpIiTenekeKalayKimyasal: KtSpBafHattiTavlama }>()
);

export const saveKt1312Success = createAction(
  '[Kt1312/API] Save Kt1312 Success',
  props<{ record: KtSpBafHattiTavlama }>()
);

export const saveKt1312Failure = createAction(
  '[Kt1312/API] Save Kt1312 Failure',
  props<{ error: ErrorModel }>()
);
