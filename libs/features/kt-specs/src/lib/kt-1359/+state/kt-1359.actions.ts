import {
  ErrorModel,
  KTSPYaglamaViewModel,
  KtSpYaglamaSpec,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const initYaglamaList = createAction('[Kt1359 Page] InitYaglamaList');

export const initYaglamaListSuccess = createAction(
  '[Kt1359/API] InitYaglamaList Success',
  props<{ data: KtSpYaglamaSpec[] }>()
);

export const initYaglamaListFailure = createAction(
  '[Kt1359/API] InitYaglamaList Failure',
  props<{ error: ErrorModel }>()
);

export const initConfig = createAction('[Kt1359 Page] InitConfig');

export const initConfigSuccess = createAction(
  '[Kt1359/API] InitConfig Success',
  props<{ data: KTSPYaglamaViewModel }>()
);

export const initConfigFailure = createAction(
  '[Kt1359/API] InitConfig Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Kt1359 Page] Save',
  props<{ ktSPYaglamaSpec: KtSpYaglamaSpec }>()
);

export const saveKt1359Success = createAction(
  '[Kt1359/API] Save Kt1359 Success',
  props<{ record: KtSpYaglamaSpec }>()
);

export const saveKt1359Failure = createAction(
  '[Kt1359/API] Save Kt1359 Failure',
  props<{ error: ErrorModel }>()
);

export const rewindKt1359Success = createAction(
  '[Kt1359/API] Rewind Kt1359 Success',
  props<{ data: KtSpYaglamaSpec }>()
);
