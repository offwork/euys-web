import {
  Celik,
  ErrorModel,
  KtSpKromKaplamaTfsCro3,
  KtSpKromKaplamaTfsCro3ViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1339 Page] Init');

export const loadKt1339Success = createAction(
  '[Kt1339/API] Load Kt1339 Success',
  props<{ data: KtSpKromKaplamaTfsCro3ViewModel }>()
);

export const loadKt1339CeliklerSuccess = createAction(
  '[Kt1339/API] Load Celikler Kt1339 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1339UrunlerSuccess = createAction(
  '[Kt1339/API] Load Urunler Kt1339 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1339Failure = createAction(
  '[Kt1339/API] Load Kt1339 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1339UrunlerFailure = createAction(
  '[Kt1339/API] Load Urunler Kt1339 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1339CeliklerFailure = createAction(
  '[Kt1339/API] Load Celikler Kt1339 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1339 Page] Save',
  props<{ ktSpKromKaplamaTfsCro3: KtSpKromKaplamaTfsCro3 }>()
);

export const saveKt1339Success = createAction(
  '[Kt1339/API] Save Kt1339 Success',
  props<{ record: KtSpKromKaplamaTfsCro3 }>()
);

export const saveKt1339Failure = createAction(
  '[Kt1339/API] Save Kt1339 Failure',
  props<{ error: ErrorModel }>()
);
