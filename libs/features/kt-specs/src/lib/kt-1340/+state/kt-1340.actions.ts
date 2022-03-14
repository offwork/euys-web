import {
  Celik,
  ErrorModel,
  KtSpKromKaplamaTfsDragout,
  KtSpKromKaplamaTfsDragoutViewModel,
  Urun,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1340 Page] Init');

export const loadKt1340Success = createAction(
  '[Kt1340/API] Load Kt1340 Success',
  props<{ data: KtSpKromKaplamaTfsDragoutViewModel }>()
);

export const loadKt1340CeliklerSuccess = createAction(
  '[Kt1340/API] Load Celikler Kt1340 Success',
  props<{ data: Celik[] }>()
);

export const loadKt1340UrunlerSuccess = createAction(
  '[Kt1340/API] Load Urunler Kt1340 Success',
  props<{ data: Urun[] }>()
);

export const loadKt1340Failure = createAction(
  '[Kt1340/API] Load Kt1340 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1340UrunlerFailure = createAction(
  '[Kt1340/API] Load Urunler Kt1340 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1340CeliklerFailure = createAction(
  '[Kt1340/API] Load Celikler Kt1340 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1340 Page] Save',
  props<{ ktSpKromKaplamaTfsDragout: KtSpKromKaplamaTfsDragout }>()
);

export const saveKt1340Success = createAction(
  '[Kt1340/API] Save Kt1340 Success',
  props<{ record: KtSpKromKaplamaTfsDragout }>()
);

export const saveKt1340Failure = createAction(
  '[Kt1340/API] Save Kt1340 Failure',
  props<{ error: ErrorModel }>()
);
