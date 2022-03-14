import {
  UpYupBazHatPlanliDuruslarDonusModel,
  YupProjeksiyonHatUretimHedeflerGenelModel,
  YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel,
  YupProjeksiyonOzetModel,
  YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel,
  YupProjeksiyonUrunRumuzuBazindaHedeflerDonusModel,
  YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel,
} from '@euys/api-interfaces';
import { makeSpanList, Spanned } from '@euys/shared/utility';
import { Action, createReducer, on } from '@ngrx/store';
import { uniq } from 'lodash';
import * as actions from './yillik-uretim-plani.actions';

export const YILLIK_URETIM_PLANI_FEATURE_KEY = 'yillikUretimPlani';

export interface State {
  loaded: boolean;
  ozet: YupProjeksiyonOzetModel;
  uretimHedefleriList: YupProjeksiyonHatUretimHedeflerGenelModel[];
  kapasiteBazindaList: YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel[];
  urunBazindaList: YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel[];
  rumuzBazindaList: YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel[];
  planliDuruslar: UpYupBazHatPlanliDuruslarDonusModel[];
  planliDuruslarTesisAdlari: string[];
  test: Spanned<YupProjeksiyonUrunRumuzuBazindaHedeflerDonusModel>[];
}

export const initialState: State = {
  loaded: false,
  ozet: {},
  uretimHedefleriList: [],
  kapasiteBazindaList: [],
  urunBazindaList: [],
  rumuzBazindaList: [],
  planliDuruslar: [],
  planliDuruslarTesisAdlari: [],
  test: [],
};

const yillikUretimPlaniReducer = createReducer(
  initialState,
  on(actions.load, state => ({ ...state, loaded: false })),
  on(
    actions.done,
    (
      state,
      {
        ozet,
        uretimHedefleriList,
        kapasiteBazindaList,
        urunBazindaList,
        rumuzBazindaList,
        planliDuruslar,
      }
    ) => ({
      ...state,
      loaded: true,
      ozet,
      uretimHedefleriList,
      kapasiteBazindaList,
      urunBazindaList,
      rumuzBazindaList,
      test: makeSpanList(rumuzBazindaList[0].donusModelList, 'rumuzAciklama'),
      planliDuruslar,
      planliDuruslarTesisAdlari: uniq(
        planliDuruslar.map(({ hatTesisAdi }) => hatTesisAdi)
      ),
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return yillikUretimPlaniReducer(state, action);
}
