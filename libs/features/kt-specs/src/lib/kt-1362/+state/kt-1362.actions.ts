import {
  Celik,
  ErrorModel,
  KtSpAsitlemeTank,
  KtSpAsitlemeTankViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1362 Page] Init');

export const loadKt1362Success = createAction(
  '[Kt1362/API] Load Kt1362 Success',
  props<{ data: KtSpAsitlemeTankViewModel }>()
);
export const loadKt1362UrunlerSuccess = createAction(
  '[Kt1362/API] Load Urunler Kt1362 Success',
  props<{ data: Urun[] }>()
);
export const loadKt1362CeliklerSuccess = createAction(
  '[Kt1362/API] Load Celikler Kt1362 Success',
  props<{ data: Celik[] }>()
);
export const loadKt1362Failure = createAction(
  '[Kt1362/API] Load Kt1362 Failure',
  props<{ error: ErrorModel }>()
);
export const loadKt1362UrunlerFailure = createAction(
  '[Kt1362/API] Load Urunler Kt1362 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1362CeliklerFailure = createAction(
  '[Kt1362/API] Load Celikler Kt1362 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1362 Page] Save',
  props<{ ktSpAsitlemeTank: KtSpAsitlemeTank }>()
);

export const saveKt1362Success = createAction(
  '[Kt1362/API] Save Kt1362 Success',
  props<{ record: KtSpAsitlemeTank }>()
);

export const saveKt1362Failure = createAction(
  '[Kt1362/API] Save Kt1362 Failure',
  props<{ error: ErrorModel }>()
);
