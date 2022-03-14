import { ErrorModel,KtAtNormalize } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1245 Page] Init');

export const loadKt1245Success = createAction('[Kt1245/API] Load Kt1245 Success', props<{ data: KtAtNormalize[] }>());

export const loadKt1245Failure = createAction('[Kt1245/API] Load Kt1245 Failure', props<{ error: ErrorModel }>());
export const save= createAction('[Kt1245 Page] Save', props<{ktAtNormalize: KtAtNormalize}>());
export const saveKt1245Success=createAction('[Kt1245/API] Save Kt1245 Success', props<{record:KtAtNormalize}>());

export const saveKt1245Failure=createAction('[Kt1245/API] Save Kt1245 Failure', props<{ error: ErrorModel }>());