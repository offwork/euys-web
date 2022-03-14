import {
  Celik,
  ErrorModel,
  KtSpBobHazTempYuzdeUzama,
  KtSpBobHazTempYuzdeUzamaViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1315 Page] Init');

export const loadKt1315Success = createAction(
  '[Kt1315/API] Load Kt1315 Success',
  props<{ data: KtSpBobHazTempYuzdeUzamaViewModel }>()
);

export const loadKt1315CeliklerSuccess = createAction(
  '[Kt1315/API] Load Celikler Kt1315 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1315UrunlerSuccess = createAction(
  '[Kt1315/API] Load Urunler Kt1315 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1315Failure = createAction(
  '[Kt1315/API] Load Kt1315 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1315UrunlerFailure = createAction(
  '[Kt1315/API] Load Urunler Kt1315 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1315CeliklerFailure = createAction(
  '[Kt1315/API] Load Celikler Kt1315 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1315 Page] Save',
  props<{ ktSpBobHazTempYuzdeUzama: KtSpBobHazTempYuzdeUzama }>()
);

export const saveKt1315Success = createAction(
  '[Kt1315/API] Save Kt1315 Success',
  props<{ record: KtSpBobHazTempYuzdeUzama }>()
);

export const saveKt1315Failure = createAction(
  '[Kt1315/API] Save Kt1315 Failure',
  props<{ error: ErrorModel }>()
);
