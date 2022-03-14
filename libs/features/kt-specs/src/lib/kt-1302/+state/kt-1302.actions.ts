import {
  Celik,
  ErrorModel,
  KtSp1SckHadSarilmaSicakl,
  KtSp1SckHadSarilmaSicaklViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1302 Page] Init');

export const loadKt1302Success = createAction(
  '[Kt1302/API] Load Kt1302 Success',
  props<{ data: KtSp1SckHadSarilmaSicaklViewModel }>()
);

export const loadKt1302CeliklerSuccess = createAction(
  '[Kt1302/API] Load Celikler Kt1302 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1302UrunlerSuccess = createAction(
  '[Kt1302/API] Load Urunler Kt1302 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1302Failure = createAction(
  '[Kt1302/API] Load Kt1302 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1302UrunlerFailure = createAction(
  '[Kt1302/API] Load Urunler Kt1302 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1302CeliklerFailure = createAction(
  '[Kt1302/API] Load Celikler Kt1302 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1302 Page] Save',
  props<{ ktSp1SckHadSarilmaSicakl: KtSp1SckHadSarilmaSicakl }>()
);

export const saveKt1302Success = createAction(
  '[Kt1302/API] Save Kt1304 Success',
  props<{ record: KtSp1SckHadSarilmaSicakl }>()
);

export const saveKt1302Failure = createAction(
  '[Kt1302/API] Save Kt1302 Failure',
  props<{ error: ErrorModel }>()
);
