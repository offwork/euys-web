import {
  Celik,
  ErrorModel,
  KtSp2SckHadSarilmaSicakl,
  KtSp2SckHadSarilmaSicaklViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1304 Page] Init');

export const loadKt1304Success = createAction(
  '[Kt1304/API] Load Kt1304 Success',
  props<{ data: KtSp2SckHadSarilmaSicaklViewModel }>()
);

export const loadKt1304CeliklerSuccess = createAction(
  '[Kt1304/API] Load Celikler Kt1304 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1304UrunlerSuccess = createAction(
  '[Kt1304/API] Load Urunler Kt1304 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1304Failure = createAction(
  '[Kt1304/API] Load Kt1304 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1304UrunlerFailure = createAction(
  '[Kt1304/API] Load Urunler Kt1304 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1304CeliklerFailure = createAction(
  '[Kt1304/API] Load Celikler Kt1304 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1304 Page] Save',
  props<{ ktSp2SckHadSarilmaSicakl: KtSp2SckHadSarilmaSicakl }>()
);

export const saveKt1304Success = createAction(
  '[Kt1304/API] Save Kt1304 Success',
  props<{ record: KtSp2SckHadSarilmaSicakl }>()
);

export const saveKt1304Failure = createAction(
  '[Kt1304/API] Save Kt1304 Failure',
  props<{ error: ErrorModel }>()
);
