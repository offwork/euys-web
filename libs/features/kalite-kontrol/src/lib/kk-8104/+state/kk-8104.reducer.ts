import {
  ErrorModel,
  KkOperatorBilgiGörseller,
  KkOperatorBilgilendirme,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kk8104Actions from './kk-8104.actions';

export const KK_8104_FEATURE_KEY = 'kk8104';
export interface State {
  oprBilgilendirmeData: KkOperatorBilgilendirme;
  oprBilgilendirmeDataLoaded: boolean;
  oprBilgilendirmeList: KkOperatorBilgilendirme[];
  oprBilgilendirmeListLoaded: boolean;
  oprBilgilendirmeGorselList: KkOperatorBilgiGörseller[];
  oprBilgilendirmeGorselListLoaded: boolean;
  addKatalogGorselSuccess: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  oprBilgilendirmeList: [],
  oprBilgilendirmeListLoaded: false,
  oprBilgilendirmeData: null,
  oprBilgilendirmeDataLoaded: false,
  oprBilgilendirmeGorselList: [],
  oprBilgilendirmeGorselListLoaded: false,
  addKatalogGorselSuccess: false,
};

const kk8104Reducer = createReducer(
  initialState,
  on(
    Kk8104Actions.initOprBilgilendirmeListSuccess,
    (state, { kkOprBilgilendirmeList }) => ({
      ...state,
      oprBilgilendirmeList: kkOprBilgilendirmeList,
      oprBilgilendirmeListLoaded: true,
    })
  ),
  on(Kk8104Actions.initOprBilgilendirmeListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8104Actions.getOprBilgilendirmeDataSuccess,
    (state, { oprBilgilendirmeData }) => ({
      ...state,
      oprBilgilendirmeData: oprBilgilendirmeData,
      oprBilgilendirmeDataLoaded: true,
    })
  ),
  on(Kk8104Actions.getOprBilgilendirmeDataFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kk8104Actions.setOprDataLoadedFalse, state => ({
    ...state,
    oprBilgilendirmeData: null,
    oprBilgilendirmeDataLoaded: false,
  })),
  on(
    Kk8104Actions.updateOprBilgilendirmeSuccess,
    (state, { oprBilgilendirme }) => ({
      ...state,
      oprBilgilendirmeData: oprBilgilendirme,
    })
  ),
  on(Kk8104Actions.deleteOprBilgilendirmeSuccess, (state, action) => ({
    ...state, // yeni liste için bakılacak
    oprBilgilendirmeList: state.oprBilgilendirmeList.filter(
      ({ id }) => id !== action.id
    ),
  })),
  on(Kk8104Actions.deleteOprBilgilendirmeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kk8104Actions.resetOprBilgiGorselList, state => ({
    ...state,
    oprBilgilendirmeGorselList: [],
    oprBilgilendirmeGorselListLoaded: false,
  })),
  on(
    Kk8104Actions.getOprBilgilendirmeGorselListSuccess,
    (state, { operatorGorselList }) => ({
      ...state,
      oprBilgilendirmeGorselList: operatorGorselList,
      oprBilgilendirmeGorselListLoaded: true,
    })
  ),
  on(
    Kk8104Actions.getOprBilgilendirmeGorselListFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(
    Kk8104Actions.addOprBilgilendirmeGorselSuccess,
    (state, { operatorGorselList }) => ({
      ...state,
      oprBilgilendirmeGorselList: operatorGorselList,
      oprBilgilendirmeGorselListLoaded: true,
    })
  ),
  on(Kk8104Actions.addOprBilgilendirmeGorselFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8104Actions.removeOprBilgilendirmeGorselSuccess,
    (state, { operatorGorselList }) => ({
      ...state,
      oprBilgilendirmeGorselList: operatorGorselList,
      oprBilgilendirmeGorselListLoaded: true,
    })
  ),
  on(Kk8104Actions.removeOprBilgilendirmeGorselFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8104Reducer(state, action);
}
