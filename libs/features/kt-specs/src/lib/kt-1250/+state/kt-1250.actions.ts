import { ErrorModel, KtAtTemperHaddeYuzdeUzama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1250 Page] Init');

export const loadKt1250Success = createAction(
  '[Kt1250/API] Load Kt1250 Success',
  props<{ data: KtAtTemperHaddeYuzdeUzama[] }>()
);

export const loadKt1250Failure = createAction('[Kt1250/API] Load Kt1250 Failure', props<{ error: ErrorModel }>());

export const save = createAction(
  '[Kt1250 Page] Save',
  props<{ ktAtTemperHaddeYuzdeUzama: KtAtTemperHaddeYuzdeUzama }>()
);

export const saveKt1250Success = createAction(
  '[Kt1250/API] Save Kt1250 Success',
  props<{ record: KtAtTemperHaddeYuzdeUzama }>()
);

export const saveKt1250Failure = createAction('[Kt1250/API] Save Kt1250 Failure', props<{ error: ErrorModel }>());
