import {
  HSMBobinModel,
  ErrorModel,
  BagimsizNumuneModel,
  BagimsizMesajModel,
  QcBobinListQueryModel,
  CMSMpratigiModelListQueryModel,
  CMSMPratigiBilgileri,
  KkUretimYuzeyKusuru,
  Combo,
  QCKayitBilgileri,
  HSM1UretimDegerleri,
} from '@euys/api-interfaces';
import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const initOnayList = createAction(
  '[Kk8139 Page] InitOnayList',
  props<{ data: QcBobinListQueryModel }>()
);

export const initOnayListSuccess = createAction(
  '[Kk8139/API] InitOnayList Success',
  props<{ data: HSMBobinModel[] }>()
);

export const initOnayListFailure = createAction(
  '[Kk8139/API] InitOnayList Failure',
  props<{ error: ErrorModel }>()
);

export const resetBobinList = createAction('[Kk8139/API] Reset Bobin List');

export const getCmPratigiList = createAction(
  '[Kk8139 Page] Get Cm Pratiği List',
  props<{ data: CMSMpratigiModelListQueryModel }>()
);

export const getCmPratigiListSuccess = createAction(
  '[Kk8139/API] Get Cm Pratiği  List Success',
  props<{ cmSmPratigiModelList: CMSMPratigiBilgileri[] }>()
);

export const getCmPratigiListFailure = createAction(
  '[Kk8139/API] Get Cm Pratiği List Failure',
  props<{ error: ErrorModel }>()
);

export const resetCmPratigiList = createAction(
  '[Kk8139/Page] resetCmPratigiModelList'
);

export const getSmPratigiList = createAction(
  '[Kk8139 Page] Get Sm Pratiği Model List',
  props<{ data: CMSMpratigiModelListQueryModel }>()
);

export const resetSmPratigiList = createAction(
  '[Kk8139/Page] resetSmPratigiList'
);

export const getSmPratigiListSuccess = createAction(
  '[Kk8139/API] Get Sm Pratiği Model List Success',
  props<{ cmSmPratigiModelList: CMSMPratigiBilgileri[] }>()
);

export const getSmPratigiListFailure = createAction(
  '[Kk8139/API] Get Sm Pratiği Model List Failure',
  props<{ error: ErrorModel }>()
);

export const resetBagimsizNumune = createAction(
  '[Kk8139/API] Reset BagimsizNumune Bilgisi'
);

export const getBagimsizNumuneModelList = createAction(
  '[Kk8139/API] Get BagimsizNumune Bilgisi',
  props<{ hatNo: string; bobinNo: string }>()
);

export const getBagimsizNumuneSuccess = createAction(
  '[Kk8139/API] Get BagimsizNumune Bilgisi Success',
  props<{ bagimsizNumuneList: BagimsizNumuneModel[] }>()
);

export const getBagimsizNumuneFailure = createAction(
  '[Kk8139/API] Get BagimsizNumune Bilgisi Failure',
  props<{ error: ErrorModel }>()
);

export const getBagimsizMesajList = createAction(
  '[Kk8139 Page] getBagimsizMesajList',
  props<{ bobinNo: string }>()
);

export const getBagimsizMesajListSuccess = createAction(
  '[Kk8139/API] getBagimsizMesajListSuccess',
  props<{ bagimsizMesajList: BagimsizMesajModel[] }>()
);

export const getBagimsizMesajListFailure = createAction(
  '[Kk8139/API] getBagimsizMesajListFailure',
  props<{ error: ErrorModel }>()
);

export const resetBagimsizMesajList = createAction(
  '[Kk8139/Page] resetBagimsizMesajList'
);

export const updateBagimsizNumuneList = createAction(
  '[Kk8139 Page] Update Bağımsız Numune List',
  props<{ bagimsizNumuneList: BagimsizNumuneModel[] }>()
);

export const updateYuzeyKusurDegerleri = createAction(
  '[Kk8139 Page] Update Yuzey Kusur Degerleri',
  props<{ kkUretimYuzeyKusuru: KkUretimYuzeyKusuru[] }>()
);

export const getButunAktifKusurList = createAction(
  '[Kk8139/Page] Get Butun Aktif Kusur List',
  props<{ hatNo: string }>()
);

export const getButunAktifKusurListSuccess = createAction(
  '[Kk8139/API] Get Butun Aktif Kusur List Success',
  props<{ butunAktifKusurList: Combo[] }>()
);

export const getButunAktifKusurListFailure = createAction(
  '[Kk8139/API] Get Butun Aktif Kusur List Failure',
  props<{ error: ErrorModel }>()
);

/*
 *
 * Ekran 3 modelini getirir
 *
 */

export const getQcKayitBilgileri = createAction(
  '[Kk8139 Page] Get Qc Kayit Bilgileri',
  props<{ data: CMSMpratigiModelListQueryModel }>()
);

export const getQcKayitBilgileriSuccess = createAction(
  '[Kk8139/API] Get Qc Kayit Bilgileri Success',
  props<{ qcKayitBilgileri: QCKayitBilgileri }>()
);

export const getQcKayitBilgileriFailure = createAction(
  '[Kk8139/API] Get Qc Kayit Bilgileri Success Failure',
  props<{ error: ErrorModel }>()
);

export const resetQcKayitBilgileri = createAction(
  '[Kk8139/API] Reset QcKayitBilgileri Bilgisi'
);

export const resetYuzeyKusur = createAction('[Kk8139/Page] Reset Yuzey Kusur');

export const setQcKayitBilgileri = createAction(
  '[Kk8139/API] Set Qc Kayit Bilgileri Success',
  props<{ qcKayitBilgileri: QCKayitBilgileri }>()
);

export const setUretimDegerleri = createAction(
  '[Kk8139/Page] Set Uretim Degerleri',
  props<{ uretimDegerleri: HSM1UretimDegerleri[] }>()
);

export const updateHsm1UretimDegerleri = createAction(
  '[Kk8139 Page] Update Hsm1 Üretim Degerleri',
  props<{ uretimDegerleri: HSM1UretimDegerleri }>()
);

export const setCurrentStepIndex = createAction(
  '[Kk8139/Page] Set HSM1 Page Step Index',
  props<{ index: number }>()
);
