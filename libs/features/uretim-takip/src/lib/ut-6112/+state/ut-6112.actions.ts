import {createAction, props} from '@ngrx/store';
import {ErrorModel, UtDurdurmaStatuModel} from "@euys/api-interfaces";

export const init = createAction('[Ut6112 Page] Init');

export const loadUt6112Success = createAction(
  '[Ut6112/API] Load Ut6112 Success',
  props<{ data: UtDurdurmaStatuModel[] }>()
);

export const loadUt6112Failure = createAction(
  '[Ut6112/API] Load Ut6112 Failure',
  props<{ error: ErrorModel }>()
);

export const saveUt6112 = createAction(
  '[Ut6112/API] Save Ut6112',
  props<{ data: UtDurdurmaStatuModel }>()
);

export const saveUt6112Success = createAction(
  '[Ut6112/API] Save Ut6112 Success',
  props<{ data: UtDurdurmaStatuModel }>()
);

export const deleteUt6112 = createAction(
  '[Ut6112/API] Delete Ut6112',
  props<{ data: UtDurdurmaStatuModel }>()
);

export const deleteUt6112Success = createAction(
  '[Ut6112/API] Delete Ut6112 Success',
  props<{ data: UtDurdurmaStatuModel }>()
);


