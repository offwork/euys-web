import {
  Celik,
  ErrorModel,
  KtSp1SckHadIkmalSicaklik,
  KtSp1SckHadIkmalSicaklikViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1301 Page] Init');

export const loadKt1301Success = createAction(
  '[Kt1301/API] Load Kt1301 Success',
  props<{ data: KtSp1SckHadIkmalSicaklikViewModel }>()
);
export const loadKt1301CeliklerSuccess = createAction(
  '[Kt1301/API] Load Celikler Kt1301 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1301UrunlerSuccess = createAction(
  '[Kt1301/API] Load Urunler Kt1301 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1301Failure = createAction(
  '[Kt1301/API] Load Kt1301 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1301UrunlerFailure = createAction(
  '[Kt1301/API] Load Urunler Kt1301 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1301CeliklerFailure = createAction(
  '[Kt1301/API] Load Celikler Kt1301 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1301 Page] Save',
  props<{ ktSp1SckHadIkmalSicaklik: KtSp1SckHadIkmalSicaklik }>()
);

export const saveKt1301Success = createAction(
  '[Kt1301/API] Save Kt1301 Success',
  props<{ record: KtSp1SckHadIkmalSicaklik }>()
);

export const saveKt1301Failure = createAction(
  '[Kt1301/API] Save Kt1301 Failure',
  props<{ error: ErrorModel }>()
);
