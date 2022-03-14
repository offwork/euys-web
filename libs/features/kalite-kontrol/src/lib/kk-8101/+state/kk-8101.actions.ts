import {
  ErrorModel,
  Hat,
  KkKusur,
  KkKusurAna,
  KkStKusurSinifi,
  KusurKatalogView,
  KusurKoduKayit,
  Combo,
  KkKusurKtlgGorsel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const initKusurList = createAction('[Kk8101 Page] InitKusurList');

export const initKusurListSuccess = createAction(
  '[Kk8101/API] InitKusurList Success',
  props<{ data: KkKusur[] }>()
);

export const initKusurListFailure = createAction(
  '[Kk8101/API] InitKusurList Failure',
  props<{ error: ErrorModel }>()
);

export const initKusurSinifiList = createAction(
  '[Kk8101 Page] InitKusurSinifiList'
);

export const initKusurSinifiListSuccess = createAction(
  '[Kk8101/API] InitKusurSinifiList Success',
  props<{ data: KkStKusurSinifi[] }>()
);

export const initKusurSinifiListFailure = createAction(
  '[Kk8101/API] InitKusurSinifiList Failure',
  props<{ error: ErrorModel }>()
);

export const initKaliteler = createAction('[Kk8101 Page] InitKaliteler');

export const initKalitelerSuccess = createAction(
  '[Kk8101/API] InitKaliteler Success',
  props<{ data: Combo[] }>()
);

export const initKalitelerFailure = createAction(
  '[Kk8101/API] InitKaliteler Failure',
  props<{ error: ErrorModel }>()
);

export const initKusurAnaList = createAction('[Kk8101 Page] InitKusurAnaList');

export const initKusurAnaListSuccess = createAction(
  '[Kk8101/API] InitKusurAnaList Success',
  props<{ data: KkKusurAna[] }>()
);

export const initKusurAnaListFailure = createAction(
  '[Kk8101/API] InitKusurAnaList Failure',
  props<{ error: ErrorModel }>()
);

export const initHatList = createAction('[Kk8101 Page] InitHatList');

export const initHatListSuccess = createAction(
  '[Kk8101/API] InitHatList Success',
  props<{ data: Hat[] }>()
);

export const initHatListFailure = createAction(
  '[Kk8101/API] InitHatList Failure',
  props<{ error: ErrorModel }>()
);

export const initUrunList = createAction('[Kk8101 Page] Init Urun List]');

export const initUrunListSuccess = createAction(
  '[Kk8101/API] Init Urun List Success]',
  props<{ urunList: Combo[] }>()
);

export const initUrunListFailure = createAction(
  '[Kk8101/API] Init Urun List Failure]',
  props<{ error: ErrorModel }>()
);

export const saveKkKusurAna = createAction(
  '[Kk8101 Page] Save Ana Kusur',
  props<{ kkKusurAna: KkKusurAna }>()
);
export const saveKkKusurAnaSuccess = createAction(
  '[Kk8101/API] Save Ana Kusur Success',
  props<{ record: KkKusurAna }>()
);

export const saveKkKusurAnaFailure = createAction(
  '[Kk8101/API] Save Kk8101 Failure',
  props<{ error: ErrorModel }>()
);

export const saveKusur = createAction(
  '[Kk8101 Page] Save Kusur',
  props<{ kusur: KusurKoduKayit }>()
);

export const saveKusurSuccess = createAction(
  '[Kk8101/API] Save Kusur Sucess',
  props<{ kusur: KusurKoduKayit }>()
);

export const saveKusurFailure = createAction(
  '[Kk8101/API] Save Kusur Failure',
  props<{ error: ErrorModel }>()
);

export const getKusur = createAction(
  '[Kk8101 Page] Get Kusur',
  props<{ kusurKodu: string }>()
);

export const getKusurSuccess = createAction(
  '[Kk8101/API] Get Kusur Success',
  props<{ kusur: KusurKoduKayit; kusurKatalogViewList: KusurKatalogView[] }>()
);

export const getKusurFailure = createAction(
  '[Kk8101/API] Get Kusur Failure',
  props<{ error: ErrorModel }>()
);

export const resetDefaultKusur = createAction(
  '[Kk8101 Page] Reset Default Kusur'
);

export const addNewKatalogView = createAction(
  '[Kk8101 Page] Add New Kusur Katalog View',
  props<{ kusurKatalog: KusurKatalogView }>()
);

export const removeUnsavedKatalogView = createAction(
  '[Kk8101 Page] Remove Unsaved Kusur Katalog View'
);

export const saveKusurKatalog = createAction(
  '[Kk8101 Page] Save Kusur Katalog',
  props<{ kusurKatalog: KusurKatalogView }>()
);

export const saveKusurKatalogSuccess = createAction(
  '[Kk8101/API] Save Kusur Katalog Success',
  props<{ kusurKatalog: KusurKatalogView }>()
);

export const saveKusurKatalogFailure = createAction(
  '[Kk8101/API] Save Kusur Katalog Success',
  props<{ error: ErrorModel }>()
);

export const deleteKusurKatalog = createAction(
  '[Kk8101 Page] Delete Kusur Katalog',
  props<{ kusurKatalog: KusurKatalogView; index: number }>()
);

export const deleteKusurKatalogSuccess = createAction(
  '[Kk8101/API] Delete Kusur Katalog Success',
  props<{ index: number }>()
);

export const deleteKusurKatalogFailure = createAction(
  '[Kk8101/API] Delete Kusur Katalog Success',
  props<{ error: ErrorModel }>()
);

export const updateKusurKatalog = createAction(
  '[Kk8101 Page] Update Kusur Katalog',
  props<{ kusurKatalog: KusurKatalogView }>()
);

export const updateKusurKatalogSuccess = createAction(
  '[Kk8101/API] Update Kusur Katalog Success',
  props<{ kusurKatalog: KusurKatalogView }>()
);

export const updateKusurKatalogFailure = createAction(
  '[Kk8101/API] Update Kusur Katalog Failure',
  props<{ error: ErrorModel }>()
);

export const getKatalogComboList = createAction(
  '[Kk8101/Page] Get Katalog Combo List',
  props<{ kusurKodu: string }>()
);

export const getKatalogComboListSuccess = createAction(
  '[Kk8101/API] Get Katalog Combo List Success',
  props<{ katalogHatComboList: string[] }>()
);

export const getKatalogComboListFailure = createAction(
  '[Kk8101/API] Get Katalog Combo List Failure',
  props<{ error: ErrorModel }>()
);

export const resetKatalogCombo = createAction(
  '[Kk8101/Page] Reset Katalog Combo'
);

export const loadKatalogGorselList = createAction(
  '[Kk8101/Page] Load Katalog Gorsel List',
  props<{ kusurKodu: string; hatKodu: string }>()
);

export const loadKatalogGorselListSuccess = createAction(
  '[Kk8101/API] Load Katalog Gorsel List Success',
  props<{ katalogGorselList: KkKusurKtlgGorsel[] }>()
);

export const loadKatalogGorselListFailure = createAction(
  '[Kk8101/API] Load Katalog Gorsel List Failure',
  props<{ error: ErrorModel }>()
);

export const resetKatalogGorselList = createAction(
  '[Kk8101/Page] Reset Katalog Gorsel List'
);

export const addKatalogGorsel = createAction(
  '[Kk8101/Page] Add Katalog Gorsel',
  props<{ data: FormData; kusurKodu: string; hatKodu: string }>()
);

export const addKatalogGorselSuccess = createAction(
  '[Kk8101/API] Add Katalog Gorsel Success',
  props<{ katalogGorselList: KkKusurKtlgGorsel[] }>()
);

export const addKatalogGorselFailure = createAction(
  '[Kk8101/API] Add Katalog Gorsel Failure',
  props<{ error: ErrorModel }>()
);

export const removeKatalogGorsel = createAction(
  '[Kk8101/Page] Remove Katalog Gorsel',
  props<{ gorsel: KkKusurKtlgGorsel; kusurKodu: string; hatKodu: string }>()
);

export const removeKatalogGorselSuccess = createAction(
  '[Kk8101/API] Remove Katalog Gorsel Success',
  props<{ katalogGorselList: KkKusurKtlgGorsel[] }>()
);

export const removeKatalogGorselFailure = createAction(
  '[Kk8101/API] Remove Katalog Gorsel Failure',
  props<{ error: ErrorModel }>()
);
