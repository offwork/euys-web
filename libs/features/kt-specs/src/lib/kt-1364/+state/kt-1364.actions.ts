import {
  Celik,
  ErrorModel,
  KtSpDurulama,
  KtSpDurulamaViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1364 Page] Init');

export const loadKt1364Success = createAction(
  '[Kt1364/API] Load Kt1364 Success',
  props<{ data: KtSpDurulamaViewModel }>()
);
export const loadKt1364UrunlerSuccess = createAction(
  '[Kt1364/API] Load Urunler Kt1364 Success',
  props<{ data: Urun[] }>()
);
export const loadKt1364CeliklerSuccess = createAction(
  '[Kt1364/API] Load Celikler Kt1364 Success',
  props<{ data: Celik[] }>()
);
export const loadKt1364Failure = createAction(
  '[Kt1364/API] Load Kt1364 Failure',
  props<{ error: ErrorModel }>()
);
export const loadKt1364UrunlerFailure = createAction(
  '[Kt1364/API] Load Urunler Kt1364 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1364CeliklerFailure = createAction(
  '[Kt1364/API] Load Celikler Kt1364 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1364 Page] Save',
  props<{ ktSpDurulama: KtSpDurulama }>()
);

export const saveKt1364Success = createAction(
  '[Kt1364/API] Save Kt1364 Success',
  props<{ record: KtSpDurulama }>()
);

export const saveKt1364Failure = createAction(
  '[Kt1364/API] Save Kt1364 Failure',
  props<{ error: ErrorModel }>()
);
