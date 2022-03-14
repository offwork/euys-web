import { ErrorModel, KtAtKromKaplamaTfsSo4 } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1242 Page] Init');

export const loadKt1242Success = createAction(
    '[Kt1242/API] Load Kt1242 Success',
    props<{ data: KtAtKromKaplamaTfsSo4[] }>()
  );

  export const loadKt1242Failure = createAction('[Kt1242/API] Load Kt1242 Failure', props<{ error: ErrorModel }>());
export const save = createAction(
  '[Kt1242 Page] Save',
  props<{ ktAtKromKaplamaTfsSo4: KtAtKromKaplamaTfsSo4 }>()
);

export const saveKt1242Success = createAction(
  '[Kt1242/API] Save Kt1242 Success',
  props<{ record: KtAtKromKaplamaTfsSo4 }>()
);

export const saveKt1242Failure = createAction('[Kt1242/API] Save Kt1242 Failure', props<{ error: ErrorModel }>());
