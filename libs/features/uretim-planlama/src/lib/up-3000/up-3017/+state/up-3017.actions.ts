import {
  ErrorModel,
  YupKapasiteRaporGrubuDonusModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3017 Page] Init');

export const loadKapasiteRaporGrubuList = createAction(
  '[Up3017 Page] loadKapasiteRaporGrubuList',
  props<{ kapasiteRapor: string; urunGrubu: string }>()
);

export const loadKapasiteRaporGrubuListSuccess = createAction(
  '[Up3017/API] loadKapasiteRaporGrubuList Success',
  props<{ kapasiteRaporGrubuList: YupKapasiteRaporGrubuDonusModel[] }>()
);

export const loadKapasiteRaporGrubuListFailure = createAction(
  '[Up3017/API] loadKapasiteRaporGrubuList Failure',
  props<{ error: ErrorModel }>()
);
