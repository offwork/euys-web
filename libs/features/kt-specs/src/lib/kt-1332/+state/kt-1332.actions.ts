import {
  Celik,
  ErrorModel,
  KtSpIiTenekeKalayKimyasal,
  KtSpIiTenekeKalayKimyasalViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1332 Page] Init');

export const loadKt1332Success = createAction(
  '[Kt1332/API] Load Kt1332 Success',
  props<{ data: KtSpIiTenekeKalayKimyasalViewModel }>()
);

export const loadKt1332CeliklerSuccess = createAction(
  '[Kt1332/API] Load Celikler Kt1332 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1332UrunlerSuccess = createAction(
  '[Kt1332/API] Load Urunler Kt1332 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1332Failure = createAction(
  '[Kt1332/API] Load Kt1332 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1332UrunlerFailure = createAction(
  '[Kt1332/API] Load Urunler Kt1332 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1332CeliklerFailure = createAction(
  '[Kt1332/API] Load Celikler Kt1332 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1332 Page] Save',
  props<{ ktSpIiTenekeKalayKimyasal: KtSpIiTenekeKalayKimyasal }>()
);

export const saveKt1332Success = createAction(
  '[Kt1332/API] Save Kt1332 Success',
  props<{ record: KtSpIiTenekeKalayKimyasal }>()
);

export const saveKt1332Failure = createAction(
  '[Kt1332/API] Save Kt1332 Failure',
  props<{ error: ErrorModel }>()
);
