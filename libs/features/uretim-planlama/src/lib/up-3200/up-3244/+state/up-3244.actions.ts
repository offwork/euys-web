import {
  ErrorModel,
  ImalatLotunHikayesiDonusModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3244 Page] Init');

export const loadImalatLotunHikayesiList = createAction(
  '[Up3244 Page] loadImalatLotunHikayesiList',
  props<{ imalatLotNo: string; islemTipi: string }>()
);

export const loadImalatLotunHikayesiListSuccess = createAction(
  '[Up3244/API] loadImalatLotunHikayesiList Success',
  props<{ imalatLotunHikayesiList: ImalatLotunHikayesiDonusModel[] }>()
);

export const loadImalatLotunHikayesiListFailure = createAction(
  '[Up3244/API] loadImalatLotunHikayesiList Failure',
  props<{ error: ErrorModel }>()
);
