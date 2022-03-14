import { ErrorModel, KtAtYansitmaTesti } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1259 Page] Init');

export const loadKt1259Success = createAction(
  '[Kt1259/API] Load Kt1259 Success',
  props<{ data: KtAtYansitmaTesti[] }>()
);

export const loadKt1259Failure = createAction(
  '[Kt1259/API] Load Kt1259 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction('[Kt1259 Page] Save', props<{ ktAtYansitmaTesti: KtAtYansitmaTesti}>());


export const saveKt1259Success = createAction(
  '[Kt1259/API] Save Kt1259 Success',
  props<{ record: KtAtYansitmaTesti }>()
);

export const saveKt1259Failure = createAction('[Kt1259/API] Save Kt1259 Failure', props<{ error: ErrorModel }>());
