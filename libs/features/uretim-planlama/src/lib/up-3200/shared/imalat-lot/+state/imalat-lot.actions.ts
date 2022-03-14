import {
  ErrorModel,
  ImalatLotResponseModel,
  ImalatLotSorguModel,
  UpStMlnStatuModel,
  UpStMlnTedarikTipiModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[ImalatLot Page] Init');

export const loadImalatLotList = createAction(
  '[ImalatLot Page] Load ImalatLotList',
  props<{ imalatLotSorguModel: ImalatLotSorguModel }>()
);

export const loadImalatLotListSuccess = createAction(
  '[ImalatLot/API] Load ImalatLotList Success',
  props<{ imalatLotList: ImalatLotResponseModel[] }>()
);

export const loadImalatLotListFailure = createAction(
  '[ImalatLot/API] Load ImalatLotList Failure',
  props<{ error: ErrorModel }>()
);

export const loadTedarikTipiList = createAction(
  '[ImalatLot Page] Load TedarikTipiList'
);

export const loadTedarikTipiListSuccess = createAction(
  '[ImalatLot/API] Load TedarikTipiList Success',
  props<{ tedarikTipiList: UpStMlnTedarikTipiModel[] }>()
);

export const loadTedarikTipiListFailure = createAction(
  '[ImalatLot/API] Load TedarikTipiList Failure',
  props<{ error: ErrorModel }>()
);

export const loadStatuList = createAction('[ImalatLot Page] Load StatuList');

export const loadStatuListSuccess = createAction(
  '[ImalatLot/API] Load StatuList Success',
  props<{ statuList: UpStMlnStatuModel[] }>()
);

export const loadStatuListFailure = createAction(
  '[ImalatLot/API] Load StatuList Failure',
  props<{ error: ErrorModel }>()
);
