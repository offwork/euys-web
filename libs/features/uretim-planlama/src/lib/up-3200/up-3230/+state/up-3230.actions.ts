import {
  ErrorModel,
  ImalatLotResponseHataModel,
  ImalatLotResponseModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3230 Page] Init');

export const update = createAction(
  '[Up3230 Page] Update',
  props<{ updateList: ImalatLotResponseModel[] }>()
);

export const updateSuccess = createAction(
  '[Up3230/API] Update Success',
  props<{ failedUpdateList: ImalatLotResponseHataModel[] }>()
);

export const updateFailure = createAction(
  '[Up3230/API] Update Failure',
  props<{ error: ErrorModel }>()
);
