import {
  ErrorModel,
  ImalatLotResponseHataModel,
  ImalatLotResponseModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3231 Page] Init');

export const update = createAction(
  '[Up3231 Page] Update',
  props<{ updateList: ImalatLotResponseModel[] }>()
);

export const updateSuccess = createAction(
  '[Up3231/API] Update Success',
  props<{ failedUpdateList: ImalatLotResponseHataModel[] }>()
);

export const updateFailure = createAction(
  '[Up3231/API] Update Failure',
  props<{ error: ErrorModel }>()
);
