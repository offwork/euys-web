import { ErrorModel, KtAtDualBazliKaliteSckHadde } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1225 Page] Init');

export const loadKt1225Success = createAction(
    '[Kt1225/API] Load Kt1225 Success',
    props<{ data: KtAtDualBazliKaliteSckHadde[] }>()
  );
  
export const loadKt1225Failure = createAction('[Kt1225/API] Load Kt1225 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1225 Page] Save', props<{ ktAtDualBazliKaliteSckHadde: KtAtDualBazliKaliteSckHadde }>());

export const saveKt1225Success = createAction(
  '[Kt1225/API] Save Kt1225 Success',
  props<{ record: KtAtDualBazliKaliteSckHadde }>()
);

export const saveKt1225Failure = createAction('[Kt1225/API] Save Kt1225 Failure', props<{ error: ErrorModel }>());
