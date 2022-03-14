import {
  ErrorModel,
  YupKapasiteRaporGrubuDonusModel,
  YupKapasiteRaporGrubuTanimlamaModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3016 Page] Init');

export const loadKapasiteRaporGrubuList = createAction(
  '[Up3016 Page] loadKapasiteRaporGrubuList',
  props<{ kapasiteRapor: string; urunGrubu: string }>()
);

export const loadKapasiteRaporGrubuListSuccess = createAction(
  '[Up3016/API] loadKapasiteRaporGrubuList Success',
  props<{ kapasiteRaporGrubuList: YupKapasiteRaporGrubuDonusModel[] }>()
);

export const loadKapasiteRaporGrubuListFailure = createAction(
  '[Up3016/API] loadKapasiteRaporGrubuList Failure',
  props<{ error: ErrorModel }>()
);

export const loadKapasiteRumuzList = createAction(
  '[Up3016 Page] loadKapasiteRumuzList',
  props<{ urunGrubu: string }>()
);

export const loadRaporRumuzList = createAction(
  '[Up3016 Page] loadRaporRumuzList',
  props<{ urunGrubu: string }>()
);

export const loadRumuzListSuccess = createAction(
  '[Up3016/API] Load Up3016 Success',
  props<{ rumuzList: YupKapasiteRaporGrubuDonusModel[] }>()
);

export const loadRumuzListFailure = createAction(
  '[Up3016/API] Load Up3016 Failure',
  props<{ error: ErrorModel }>()
);

export const updateKapasiteRaporGrubuTanim = createAction(
  '[Up3016 Page] updateKapasiteRaporGrubuTanim',
  props<{
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel;
  }>()
);

export const updateKapasiteRaporGrupTanimSuccess = createAction(
  '[Up3016/API] KapasiteRaporGrupGuncelleme Up3016 Success',
  props<{
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel;
  }>()
);

export const updateKapasiteRaporGrupTanimFailure = createAction(
  '[Up3016/API] KapasiteRaporGrupGuncelleme Up3016 Failure',
  props<{ error: ErrorModel }>()
);

export const deleteKapasiteRaporGrubuTanim = createAction(
  '[Up3016 Page] deleteKapasiteRaporGrubuTanim',
  props<{
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel;
  }>()
);

export const deleteKapasiteRaporGrubuTanimSuccess = createAction(
  '[Up3016/API] deleteKapasiteRaporGrubuTanim Up3016 Success',
  props<{
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel;
  }>()
);

export const deleteKapasiteRaporGrubuTanimFailure = createAction(
  '[Up3016/API] deleteKapasiteRaporGrubuTanim Up3016 Failure',
  props<{ error: ErrorModel }>()
);
