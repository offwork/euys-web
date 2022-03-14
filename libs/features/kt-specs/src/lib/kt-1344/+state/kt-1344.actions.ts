import {
  ErrorModel,
  Hat,
  KtSpMarkalama,
  KtSpMarkalamaViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1344 Page] Init');

export const loadKt1344Success = createAction(
  '[Kt1344/API] Load Kt1344 Success',
  props<{ data: KtSpMarkalamaViewModel }>()
);

export const loadKt1344Failure = createAction(
  '[Kt1344/API] Load Kt1344 Failure',
  props<{ error: ErrorModel }>()
);

export const loadKt1344HatlarSuccess = createAction(
  '[Kt1344/API] Load Hatlar Kt1344 Success',
  props<{ data: Hat[] }>()
);
export const loadKt1344HatlarFailure = createAction(
  '[Kt1344/API] Load Hatlar Kt1344 Failure',
  props<{ error: ErrorModel }>()
);
export const save = createAction(
  '[Kt1344 Page] Save',
  props<{ ktSpMarkalama: KtSpMarkalama }>()
);

export const saveKt1344Success = createAction(
  '[Kt1344/API] Save Kt1344 Success',
  props<{ record: KtSpMarkalama }>()
);

export const saveKt1344Failure = createAction(
  '[Kt1344/API] Save Kt1344 Failure',
  props<{ error: ErrorModel }>()
);
