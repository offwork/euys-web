import {
  Celik,
  ErrorModel,
  KtSpAlkaliTemizleme,
  KtSpAlkaliTemizlemeViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1306 Page] Init');

export const loadKt1306Success = createAction(
  '[Kt1306/API] Load Kt1306 Success',
  props<{ data: KtSpAlkaliTemizlemeViewModel }>()
);

export const loadKt1306CeliklerSuccess = createAction(
  '[Kt1306/API] Load Celikler Kt1306 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1306UrunlerSuccess = createAction(
  '[Kt1306/API] Load Urunler Kt1306 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1306Failure = createAction(
  '[Kt1306/API] Load Kt1306 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1306UrunlerFailure = createAction(
  '[Kt1306/API] Load Urunler Kt1306 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1306CeliklerFailure = createAction(
  '[Kt1306/API] Load Celikler Kt1306 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1306 Page] Save',
  props<{ ktSpAlkaliTemizleme: KtSpAlkaliTemizleme }>()
);

export const saveKt1306Success = createAction(
  '[Kt1306/API] Save Kt1306 Success',
  props<{ record: KtSpAlkaliTemizleme }>()
);

export const saveKt1306Failure = createAction(
  '[Kt1306/API] Save Kt1306 Failure',
  props<{ error: ErrorModel }>()
);
