import {
  Celik,
  ErrorModel,
  KtSpCgl12HavaSogutmaAjc,
  KtSpCgl12HavaSogutmaAjcViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1318 Page] Init');

export const loadKt1318Success = createAction(
  '[Kt1318/API] Load Kt1318 Success',
  props<{ data: KtSpCgl12HavaSogutmaAjcViewModel }>()
);

export const loadKt1318CeliklerSuccess = createAction(
  '[Kt1318/API] Load Celikler Kt1318 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1318UrunlerSuccess = createAction(
  '[Kt1318/API] Load Urunler Kt1318 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1318Failure = createAction(
  '[Kt1318/API] Load Kt1318 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1318UrunlerFailure = createAction(
  '[Kt1318/API] Load Urunler Kt1318 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1318CeliklerFailure = createAction(
  '[Kt1318/API] Load Celikler Kt1318 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1318 Page] Save',
  props<{ ktSpCgl12HavaSogutmaAjc: KtSpCgl12HavaSogutmaAjc }>()
);

export const saveKt1318Success = createAction(
  '[Kt1318/API] Save Kt1318 Success',
  props<{ record: KtSpCgl12HavaSogutmaAjc }>()
);

export const saveKt1318Failure = createAction(
  '[Kt1318/API] Save Kt1318 Failure',
  props<{ error: ErrorModel }>()
);
