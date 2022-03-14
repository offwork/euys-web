import {
  ErrorModel,
  HSMBobinModel,
  SlabBilgisi,
  KabaHaddelemePasoModel,
  FmPratigiModel,
  BagimsizNumuneModel,
  BagimsizMesajModel,
  QCKayitBilgileri,
  BobinKalinlikDegerleri,
  Combo,
  KkUretimYuzeyKusuru,
  QCOnayModel,
  HSM2UretimDegerleri,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';
import { Hsm2QcOptions } from '../models/hsm2-options';

export const loadHSMBobinList = createAction('[Kk8115 Page] Load HSMBobinList');

export const loadHSMBobinListSucess = createAction(
  '[Kk8115/API] Load HSMBobinList Success',
  props<{ hsmBobinList: HSMBobinModel[] }>()
);

export const loadHSMBobinListFailure = createAction(
  '[Kk8115/API] Load HSMBobinList Failure',
  props<{ error: ErrorModel }>()
);

export const resetSlabBilgisi = createAction(
  '[Kk8115 Page] Reset Slab Bilgisi'
);
export const getSlabBilgisi = createAction(
  '[Kk8115 Page] Get Slab Bilgisi',
  props<{ hatNo: string; bobinNo: string }>()
);
export const getSlabBilgisiSuccess = createAction(
  '[Kk8115/API] Get Slab Bilgisi Success',
  props<{ slabBilgisi: SlabBilgisi }>()
);
export const getSlabBilgisiFailure = createAction(
  '[Kk8115/API] Get Slab Bilgisi Failure',
  props<{ error: ErrorModel }>()
);

export const resetKabaHaddelemePaso = createAction(
  '[Kk8115 Page] Reset Kaba Haddeleme'
);

export const getKabaHaddelemePaso = createAction(
  '[Kk8115 Page] Get Kaba Haddeleme Paso Bilgisi',
  props<{ hatNo: string; bobinNo: string }>()
);

export const getKabaHaddelemePasoSuccess = createAction(
  '[Kk8115/API] Get Kaba Haddeleme Paso List Success',
  props<{ kabaHaddelemeBilgisi: KabaHaddelemePasoModel }>()
);
export const getKabaHaddelemePasoFailure = createAction(
  '[Kk8115/API] Get Kaba Haddeleme Paso List Failure',
  props<{ error: ErrorModel }>()
);

export const getFmPratigiBilgileri = createAction(
  '[Kk8115 Page] Get FM Pratigi Bilgisi',
  props<{ hatNo: string; bobinNo: string }>()
);

export const getFmPratigiBilgileriSuccess = createAction(
  '[Kk8115/API] Get FM Pratigi List Success',
  props<{ fmPratigiBilgisi: FmPratigiModel[] }>()
);

export const getFmPratigiModelListFailure = createAction(
  '[Kk8115/API] Get FM Pratigi List Failure',
  props<{ error: ErrorModel }>()
);

export const loadBagimsizNumuneList = createAction(
  '[Kk8115 Page] Load Bagimsiz Numune List',
  props<{ bobinNo: string }>()
);

export const loadBagimsizNumuneListSuccess = createAction(
  '[Kk8115/API] Load Bagimsiz Numune List Success',
  props<{ bagimsizNumuneList: BagimsizNumuneModel[] }>()
);

export const loadBagimsizNumuneListFailure = createAction(
  '[Kk8115/API] Load Bagimsiz Numune List Failure',
  props<{ error: ErrorModel }>()
);

export const loadBagimsizMesajList = createAction(
  '[Kk8115 Page] Load Bagimsiz Mesaj List',
  props<{ bobinNo: string }>()
);

export const loadBagimsizMesajListSuccess = createAction(
  '[Kk8115/API] Load Bagimsiz Mesaj List Success',
  props<{ bagimsizMesajList: BagimsizMesajModel[] }>()
);

export const loadBagimsizMesajListFailure = createAction(
  '[Kk8115/API] Load Bagimsiz Mesaj List Failure',
  props<{ error: ErrorModel }>()
);

export const getFmPratigiBilgileriFailure = createAction(
  '[Kk8115/API] Get FM Pratigi List Failure',
  props<{ error: ErrorModel }>()
);

export const resetFmPratigiBilgileri = createAction(
  '[Kk8115 Page] Reset Fm Pratigi Bilgisi'
);

export const getQCKayitBilgileri = createAction(
  '[Kk8115 Page] Get QC Kayıt Bilgileri',
  props<{ hatNo: string; bobinNo: string; qcOnayYapilmis: boolean }>()
);

export const getQCKayitBilgileriSuccess = createAction(
  '[Kk8115/API] Get QC Kayıt Bilgileri Success',
  props<{ qcKayitBilgileri: QCKayitBilgileri }>()
);

export const getQCKayitBilgileriFailure = createAction(
  '[Kk8115/API] Get QC Kayıt Bilgileri Failure',
  props<{ error: ErrorModel }>()
);

export const updateBobinKalinlikDegerleri = createAction(
  '[Kk8115 Page] Update Bobin Kalınlık Degerleri',
  props<{ bobinKalinlikDegerleri: BobinKalinlikDegerleri }>()
);

export const updateAciklama = createAction(
  '[Kk8115 Page] Update QC Kaydi Aciklama',
  props<{ aciklama: string }>()
);

export const resetAciklama = createAction(
  '[Kk8115 Page] Reset QC Kaydi Aciklama'
);

export const updateHsm2QcOptions = createAction(
  '[Kk8115 Page] Update Hsm2 Qc Options',
  props<{ options: Hsm2QcOptions }>()
);

export const updateHsm2UretimDegerleri = createAction(
  '[Kk8115 Page] Update Hsm2 Üretim Degerleri',
  props<{ uretimDegerleri: HSM2UretimDegerleri }>()
);

export const updateYuzeyKusurDegerleri = createAction(
  '[Kk8115 Page] Update Yuzey Kusur Degerleri',
  props<{ kkUretimYuzeyKusuru: KkUretimYuzeyKusuru[] }>()
);

export const getButunAktifKusurList = createAction(
  '[Kk8115/Page] Get Butun Aktif Kusur List',
  props<{ hatNo: string }>()
);

export const getButunAktifKusurListSuccess = createAction(
  '[Kk8115/API] Get Butun Aktif Kusur List Success',
  props<{ butunAktifKusurList: Combo[] }>()
);

export const getButunAktifKusurListFailure = createAction(
  '[Kk8115/API] Get Butun Aktif Kusur List Failure',
  props<{ error: ErrorModel }>()
);

export const qcKayit = createAction(
  '[Kk8115/Page] QC Onay/Hold Kayıt',
  props<{ qcOnay: QCOnayModel }>()
);

export const qcKayitSuccess = createAction(
  '[Kk8115/API] QC Onay/Hold Kayıt Success'
);

export const qcKayitFailure = createAction(
  '[Kk8115/API] QC Onay/Hold Kayıt Failure',
  props<{ error: ErrorModel }>()
);

export const setCurrentStepIndex = createAction(
  '[Kk8115/Page] Set HSM2 Page Step Index',
  props<{ index: number }>()
);
