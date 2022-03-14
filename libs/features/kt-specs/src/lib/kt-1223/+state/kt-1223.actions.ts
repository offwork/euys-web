import { ErrorModel, KtAtDemirAlasimVeGaFirini } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';


export const init = createAction('[Kt1223 Page] Init');

export const loadKt1223Success = createAction(
  '[Kt1223/API] Load Kt1223 Success',
  props<{ data: KtAtDemirAlasimVeGaFirini[] }>()
);

export const loadKt1223Failure = createAction(
  '[Kt1223/API] Load Kt1223 Failure', 
  props<{ error: ErrorModel }>()
);


export const save = createAction('[Kt1223 Page] Save', props<{ KtAtDemirAlasimVeGaFirini: KtAtDemirAlasimVeGaFirini }>());

export const saveKt1223Success = createAction(
  '[Kt1223/API] Save Kt1223 Success',
  props<{ record: KtAtDemirAlasimVeGaFirini }>()
);

export const saveKt1223Failure = createAction(
  '[Kt1223/API] Save Kt1223 Failure', props<{ error: ErrorModel }>()
);
