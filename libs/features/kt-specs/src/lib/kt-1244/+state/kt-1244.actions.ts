import { ErrorModel, KtAtMarkalama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1244 Page] Init');

export const loadKt1244Success = createAction(
    '[Kt1244/API] Load Kt1244 Success',
    props<{ data: KtAtMarkalama[] }>()
  );

  export const loadKt1244Failure = createAction('[Kt1244/API] Load Kt1244 Failure', props<{ error: ErrorModel }>());
export const save = createAction(
  '[Kt1244 Page] Save',
  props<{ ktAtMarkalama: KtAtMarkalama }>()
);

export const saveKt1244Success = createAction(
  '[Kt1244/API] Save Kt1244 Success',
  props<{ record: KtAtMarkalama }>()
);

export const saveKt1244Failure = createAction('[Kt1244/API] Save Kt1244 Failure', props<{ error: ErrorModel }>());
