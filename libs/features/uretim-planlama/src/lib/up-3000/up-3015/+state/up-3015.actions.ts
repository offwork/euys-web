import {
  ErrorModel,
  YupKapasiteRaporGrubuDonusModel,
  YupKapasiteRaporGrubuTanimlamaModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3015 Page] Init');

export const loadKapasiteRumuzList = createAction(
  '[Up3015 Page] loadKapasiteRumuzList',
  props<{ urunGrubu: string }>()
);

export const loadRaporRumuzList = createAction(
  '[Up3015 Page] loadRaporRumuzList',
  props<{ urunGrubu: string }>()
);

export const loadRumuzListSuccess = createAction(
  '[Up3015/API] Load Up3015 Success',
  props<{ rumuzList: YupKapasiteRaporGrubuDonusModel[] }>()
);

export const loadRumuzListFailure = createAction(
  '[Up3015/API] Load Up3015 Failure',
  props<{ error: ErrorModel }>()
);

export const saveKapasiteGrupTanim = createAction(
  '[Up3015 Page] saveKapasiteGrupTanim',
  props<{
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel;
  }>()
);

export const saveRaporGrupTanim = createAction(
  '[Up3015 Page] saveRaporGrupTanim',
  props<{
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel;
  }>()
);

export const saveKapasiteRaporGrupTanimSuccess = createAction(
  '[Up3015/API] KapasiteRaporGrupTanim Up3015 Success',
  props<{
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel;
  }>()
);

export const saveKapasiteRaporGrupTanimFailure = createAction(
  '[Up3015/API] KapasiteRaporGrupTanim Up3015 Failure',
  props<{ error: ErrorModel }>()
);
