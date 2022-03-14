import {
  Celik,
  ErrorModel,
  KtSpEnineKalinlikVeIkiKenarFarklariSpec,
  KtSpEnineKalinlikVeIkiKenarFarklariViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1326 Page] Init');

export const loadKt1326Success = createAction(
  '[Kt1326/API] Load Kt1326 Success',
  props<{ data: KtSpEnineKalinlikVeIkiKenarFarklariViewModel }>()
);

export const loadKt1326CeliklerSuccess = createAction(
  '[Kt1326/API] Load Celikler Kt1326 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1326UrunlerSuccess = createAction(
  '[Kt1326/API] Load Urunler Kt1326 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1326Failure = createAction(
  '[Kt1326/API] Load Kt1326 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1326UrunlerFailure = createAction(
  '[Kt1326/API] Load Urunler Kt1326 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1326CeliklerFailure = createAction(
  '[Kt1326/API] Load Celikler Kt1326 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1326 Page] Save',
  props<{
    ktSpEnineKalinlikVeIkiKenarFarklari: KtSpEnineKalinlikVeIkiKenarFarklariSpec;
  }>()
);

export const saveKt1326Success = createAction(
  '[Kt1326/API] Save Kt1326 Success',
  props<{ record: KtSpEnineKalinlikVeIkiKenarFarklariSpec }>()
);

export const saveKt1326Failure = createAction(
  '[Kt1326/API] Save Kt1326 Failure',
  props<{ error: ErrorModel }>()
);
