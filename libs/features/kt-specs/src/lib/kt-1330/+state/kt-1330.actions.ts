import {
  Celik,
  ErrorModel,
  KtSpIiTenekeAsitleme,
  KtSpIiTenekeAsitlemeViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1330 Page] Init');

export const loadKt1330Success = createAction(
  '[Kt1330/API] Load Kt1330 Success',
  props<{ data: KtSpIiTenekeAsitlemeViewModel }>()
);

export const loadKt1330CeliklerSuccess = createAction(
  '[Kt1330/API] Load Celikler Kt1330 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1330UrunlerSuccess = createAction(
  '[Kt1330/API] Load Urunler Kt1330 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1330Failure = createAction(
  '[Kt1330/API] Load Kt1330 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1330UrunlerFailure = createAction(
  '[Kt1330/API] Load Urunler Kt1330 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1330CeliklerFailure = createAction(
  '[Kt1330/API] Load Celikler Kt1330 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1330 Page] Save',
  props<{ ktSpIiTenekeAsitleme: KtSpIiTenekeAsitleme }>()
);

export const saveKt1330Success = createAction(
  '[Kt1330/API] Save Kt1330 Success',
  props<{ record: KtSpIiTenekeAsitleme }>()
);

export const saveKt1330Failure = createAction(
  '[Kt1330/API] Save Kt1330 Failure',
  props<{ error: ErrorModel }>()
);
