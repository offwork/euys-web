import {
  Celik,
  ErrorModel,
  KtSpKromKaplamaTfsFlor,
  KtSpKromKaplamaTfsFlorViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1341 Page] Init');

export const loadKt1341Success = createAction(
  '[Kt1341/API] Load Kt1341 Success',
  props<{ data: KtSpKromKaplamaTfsFlorViewModel }>()
);

export const loadKt1341CeliklerSuccess = createAction(
  '[Kt1341/API] Load Celikler Kt1341 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1341UrunlerSuccess = createAction(
  '[Kt1341/API] Load Urunler Kt1341 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1341Failure = createAction(
  '[Kt1341/API] Load Kt1341 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1341UrunlerFailure = createAction(
  '[Kt1341/API] Load Urunler Kt1341 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1341CeliklerFailure = createAction(
  '[Kt1341/API] Load Celikler Kt1341 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1341 Page] Save',
  props<{ ktSpKromKaplamaTfsFlor: KtSpKromKaplamaTfsFlor }>()
);

export const saveKt1341Success = createAction(
  '[Kt1341/API] Save Kt1341 Success',
  props<{ record: KtSpKromKaplamaTfsFlor }>()
);

export const saveKt1341Failure = createAction(
  '[Kt1341/API] Save Kt1341 Failure',
  props<{ error: ErrorModel }>()
);
