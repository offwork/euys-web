import { ErrorModel, KtAtTeleskopiToleransi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1249 Page] Init');

export const loadKt1249Success = createAction(
  '[Kt1249/API] Load Kt1249 Success',
  props<{ data: KtAtTeleskopiToleransi[] }>()
);

export const loadKt1249Failure = createAction('[Kt1249/API] Load Kt1249 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1249 Page] Save', props<{ ktAtTeleskopiToleransi: KtAtTeleskopiToleransi }>());

export const saveKt1249Success = createAction(
  '[Kt1249/API] Save Kt1249 Success',
  props<{ record: KtAtTeleskopiToleransi }>()
);

export const saveKt1249Failure = createAction('[Kt1249/API] Save Kt1249 Failure', props<{ error: ErrorModel }>());
