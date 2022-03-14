import {
  ErrorModel,
  UtCinkoLapa,
  UtCinkoLapaViewModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5101 Page] Init');

export const loadUt5101Success = createAction(
  '[Ut5101/API] Load Ut5101 Success',
  props<{ data: UtCinkoLapaViewModel }>()
);

export const loadUt5101LogSuccess = createAction(
  '[Ut5101/API] Load Ut5101Log Success',
  props<{ data: UtCinkoLapa[] }>()
);

export const loadUt5101Log = createAction(
  '[Ut5101 Page] Load Ut5101Log ',
  props<{ utCinkoLapa: UtCinkoLapa }>()
);

export const loadUt5101Failure = createAction(
  '[Ut5101/API] Load Ut5101 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Ut5101 Page] Save',
  props<{ utCinkoLapa: UtCinkoLapa }>()
);

export const saveUt5101Success = createAction(
  '[Ut5101/API] Save Ut5101 Success',
  props<{ utCinkoLapa: UtCinkoLapa; code: string }>()
);

export const saveUt5101Failure = createAction(
  '[Ut5101/API] Save Ut5101 Failure',
  props<{ error: ErrorModel }>()
);
