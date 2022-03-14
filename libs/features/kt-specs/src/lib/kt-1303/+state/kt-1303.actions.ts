import {
  Celik,
  ErrorModel,
  KtSp2SckHadIkmalSicaklik,
  KtSp2SckHadIkmalSicaklikViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1303 Page] Init');

export const loadKt1303Success = createAction(
  '[Kt1303/API] Load Kt1303 Success',
  props<{ data: KtSp2SckHadIkmalSicaklikViewModel }>()
);

export const loadKt1303CeliklerSuccess = createAction(
  '[Kt1303/API] Load Celikler Kt1303 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1303UrunlerSuccess = createAction(
  '[Kt1303/API] Load Urunler Kt1303 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1303Failure = createAction(
  '[Kt1303/API] Load Kt1303 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1303UrunlerFailure = createAction(
  '[Kt1303/API] Load Urunler Kt1303 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1303CeliklerFailure = createAction(
  '[Kt1303/API] Load Celikler Kt1303 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1303 Page] Save',
  props<{ ktSp2SckHadIkmalSicaklik: KtSp2SckHadIkmalSicaklik }>()
);

export const saveKt1303Success = createAction(
  '[Kt1303/API] Save Kt1303 Success',
  props<{ record: KtSp2SckHadIkmalSicaklik }>()
);

export const saveKt1303Failure = createAction(
  '[Kt1303/API] Save Kt1303 Failure',
  props<{ error: ErrorModel }>()
);
