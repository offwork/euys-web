import {
  Celik,
  ErrorModel,
  KtSpDualFazliKaliteSckHaddeSpec,
  KtSpDualFazliKaliteSckHaddeViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1325 Page] Init');

export const loadKt1325Success = createAction(
  '[Kt1325/API] Load Kt1325 Success',
  props<{ data: KtSpDualFazliKaliteSckHaddeViewModel }>()
);

export const loadKt1325CeliklerSuccess = createAction(
  '[Kt1325/API] Load Celikler Kt1325 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1325UrunlerSuccess = createAction(
  '[Kt1325/API] Load Urunler Kt1325 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1325Failure = createAction(
  '[Kt1325/API] Load Kt1325 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1325UrunlerFailure = createAction(
  '[Kt1325/API] Load Urunler Kt1325 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1325CeliklerFailure = createAction(
  '[Kt1325/API] Load Celikler Kt1325 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1325 Page] Save',
  props<{ ktSp2SckHadIkmalSicaklik: KtSpDualFazliKaliteSckHaddeSpec }>()
);

export const saveKt1325Success = createAction(
  '[Kt1325/API] Save Kt1325 Success',
  props<{ record: KtSpDualFazliKaliteSckHaddeSpec }>()
);

export const saveKt1325Failure = createAction(
  '[Kt1325/API] Save Kt1325 Failure',
  props<{ error: ErrorModel }>()
);
