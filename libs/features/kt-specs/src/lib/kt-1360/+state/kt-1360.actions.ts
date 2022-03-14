import {
  Celik,
  ErrorModel,
  KtSpYansitmaTesti,
  KtSpYansitmaTestiViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1360 Page] Init');

export const loadKt1360Success = createAction(
  '[Kt1360/API] Load Kt1360 Success',
  props<{ data: KtSpYansitmaTestiViewModel }>()
);
export const loadKt1360UrunlerSuccess = createAction(
  '[Kt1360/API] Load Urunler Kt1360 Success',
  props<{ data: Urun[] }>()
);
export const loadKt1360CeliklerSuccess = createAction(
  '[Kt1360/API] Load Celikler Kt1360 Success',
  props<{ data: Celik[] }>()
);
export const loadKt1360Failure = createAction(
  '[Kt1360/API] Load Kt1360 Failure',
  props<{ error: ErrorModel }>()
);
export const loadKt1360UrunlerFailure = createAction(
  '[Kt1360/API] Load Urunler Kt1360 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1360CeliklerFailure = createAction(
  '[Kt1360/API] Load Celikler Kt1360 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1360 Page] Save',
  props<{ ktSpYansitmaTesti: KtSpYansitmaTesti }>()
);

export const saveKt1360Success = createAction(
  '[Kt1360/API] Save Kt1360 Success',
  props<{ record: KtSpYansitmaTesti }>()
);

export const saveKt1360Failure = createAction(
  '[Kt1360/API] Save Kt1360 Failure',
  props<{ error: ErrorModel }>()
);
