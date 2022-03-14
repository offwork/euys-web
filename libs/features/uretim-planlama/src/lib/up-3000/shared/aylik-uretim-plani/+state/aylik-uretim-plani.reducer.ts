import {
  YupAylikAnaModel,
  YupAylikNihaiMamulModel,
  YupAylikUretimPlaniModel,
} from '@euys/api-interfaces';
import { makeSpanList, Spanned } from '@euys/shared/utility';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './aylik-uretim-plani.actions';

export const AYLIK_URETIM_PLANI_FEATURE_KEY = 'aylikUretimPlani';

export interface State {
  loading: boolean;
  yupAylikAnaModel?: YupAylikAnaModel;
  yupAylikUretimPlaniModelList?: YupAylikUretimPlaniModel[];
  yupAylikNihaiMamulModelList?: Spanned<YupAylikNihaiMamulModel>[];
}

export const initialState: State = {
  loading: false,
};

const aylikUretimPlaniReducer = createReducer(
  initialState,
  on(actions.init, () => ({
    loading: false,
  })),
  on(actions.load, () => ({
    loading: true,
  })),
  on(actions.success, (state, action) => ({
    loading: false,
    yupAylikAnaModel: action.yupAylikAnaModel,
    yupAylikUretimPlaniModelList:
      action.yupAylikAnaModel.yupAylikUretimPlaniModelList,
    yupAylikNihaiMamulModelList: makeSpanList(
      action.yupAylikAnaModel.yupAylikNihaiMamulModelList,
      'aylikMamulGrupTanim'
    ),
  })),
  on(actions.fail, () => ({
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return aylikUretimPlaniReducer(state, action);
}
