import {
  ErrorModel,
  HSMBobinModel,
  SlabBilgisi,
  KabaHaddelemePasoModel,
  FmPratigiModel,
  BagimsizNumuneModel,
  BagimsizMesajModel,
  QCKayitBilgileri,
  EvetHayir,
  KkUretimYuzeyKusuru,
  Combo,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import {
  defaultYuzeyKusurKodu,
  disableYuzeyKusuruVarMi,
  getMinDerece,
  isDispozeBobin,
  updateUretimDegerleri,
  yuzeyKusuruVarMi,
} from '../utils/rules';
import * as Kk8115Actions from './kk-8115.actions';

export const KK_8115_FEATURE_KEY = 'kk8115';

export interface State {
  qcKayitBilgileri: QCKayitBilgileri;
  qcKayitBilgileriLoaded: boolean;
  hsmBobinList: HSMBobinModel[];
  hsmBobinListLoaded: boolean;
  bagimsizNumuneList: BagimsizNumuneModel[];
  bagimsizNumuneListLoaded: boolean;
  bagimsizMesajList: BagimsizMesajModel[];
  bagimsizMesajListLoaded: boolean;
  slabBilgisi: SlabBilgisi;
  slabBilgisiLoaded: boolean;
  error?: ErrorModel;
  kabaHaddelemeBilgisi: KabaHaddelemePasoModel;
  kabaHaddelemeBilgisiLoaded: boolean;
  fmPratigiList: FmPratigiModel[];
  fmPratigiListLoaded: boolean;
  bobinAcmaKontrol: EvetHayir;
  numuneAl: EvetHayir;
  showNumuneAlCombo: boolean;
  yuzeyKusuruVarMi: EvetHayir;
  disableYuzeyKusuruVarMi: boolean;
  yuzeyKusurKaydiList: KkUretimYuzeyKusuru[];
  butunAktifKusurList: Combo[];
  butunAktifKusurListLoaded: boolean;
  yuzeyKusurKaydiListLoaded: boolean;
  defaultYuzeyKusurKodu: string;
  dispoze: boolean;
  minDispozeKusurDerecesi: number;
  stepIndex: number;
}

export const initialState: State = {
  qcKayitBilgileri: null,
  qcKayitBilgileriLoaded: false,
  hsmBobinList: null,
  hsmBobinListLoaded: false,
  bagimsizNumuneList: null,
  bagimsizNumuneListLoaded: false,
  bagimsizMesajList: null,
  bagimsizMesajListLoaded: false,
  slabBilgisi: null,
  slabBilgisiLoaded: false,
  kabaHaddelemeBilgisi: null,
  kabaHaddelemeBilgisiLoaded: false,
  fmPratigiList: null,
  fmPratigiListLoaded: false,
  bobinAcmaKontrol: EvetHayir.HAYIR,
  numuneAl: EvetHayir.HAYIR,
  showNumuneAlCombo: true,
  yuzeyKusuruVarMi: EvetHayir.HAYIR,
  disableYuzeyKusuruVarMi: false,
  yuzeyKusurKaydiList: [],
  butunAktifKusurList: [],
  butunAktifKusurListLoaded: false,
  yuzeyKusurKaydiListLoaded: false,
  defaultYuzeyKusurKodu: null,
  dispoze: false,
  minDispozeKusurDerecesi: 1,
  stepIndex: 0,
};

const kk8115Reducer = createReducer(
  initialState,
  on(Kk8115Actions.setCurrentStepIndex, (state, { index }) => ({
    ...state,
    stepIndex: index,
  })),
  on(
    Kk8115Actions.getQCKayitBilgileriSuccess,
    (state, { qcKayitBilgileri }) => ({
      ...state,
      qcKayitBilgileri,
      qcKayitBilgileriLoaded: true,
      qcAciklama: null,
      bobinAcmaKontrol: EvetHayir.HAYIR,
      numuneAl: EvetHayir.HAYIR,
      // TODO: buna qcKayitBilgileri'ne bakarak karar ver
      showNumuneAlCombo: true,
      yuzeyKusuruVarMi: yuzeyKusuruVarMi(qcKayitBilgileri),
      disableYuzeyKusuruVarMi: disableYuzeyKusuruVarMi(qcKayitBilgileri),
      defaultYuzeyKusurKodu: defaultYuzeyKusurKodu(qcKayitBilgileri),
      dispoze: isDispozeBobin(qcKayitBilgileri.dispozeKodu),
      minDispozeKusurDerecesi: getMinDerece(
        isDispozeBobin(qcKayitBilgileri.dispozeKodu)
      ),
    })
  ),
  on(Kk8115Actions.getQCKayitBilgileriFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8115Actions.loadHSMBobinListSucess, (state, { hsmBobinList }) => ({
    ...state,
    hsmBobinList,
    hsmBobinListLoaded: true,
  })),
  on(Kk8115Actions.loadHSMBobinListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8115Actions.loadBagimsizNumuneListSuccess,
    (state, { bagimsizNumuneList }) => ({
      ...state,
      bagimsizNumuneList,
      bagimsizNumuneListLoaded: true,
    })
  ),
  on(Kk8115Actions.loadBagimsizNumuneListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8115Actions.loadBagimsizMesajListSuccess,
    (state, { bagimsizMesajList }) => ({
      ...state,
      bagimsizMesajList,
      bagimsizMesajListLoaded: true,
    })
  ),
  on(Kk8115Actions.loadBagimsizMesajListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8115Actions.getSlabBilgisiFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kk8115Actions.getSlabBilgisiSuccess, (state, { slabBilgisi }) => ({
    ...state,
    slabBilgisiLoaded: true,
    slabBilgisi,
  })),
  on(
    Kk8115Actions.getKabaHaddelemePasoSuccess,
    (state, { kabaHaddelemeBilgisi }) => ({
      ...state,
      kabaHaddelemeBilgisi,
      kabaHaddelemeBilgisiLoaded: true,
    })
  ),
  on(
    Kk8115Actions.getFmPratigiBilgileriSuccess,
    (state, { fmPratigiBilgisi }) => ({
      ...state,
      fmPratigiListLoaded: true,
      fmPratigiList: [...fmPratigiBilgisi],
    })
  ),
  on(Kk8115Actions.getFmPratigiBilgileriFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8115Actions.resetSlabBilgisi, state => ({
    ...state,
    slabBilgisi: null,
    slabBilgisiLoaded: false,
  })),
  on(Kk8115Actions.resetKabaHaddelemePaso, state => ({
    ...state,
    kabaHaddelemeBilgisi: null,
    kabaHaddelemeBilgisiLoaded: false,
  })),
  on(Kk8115Actions.resetFmPratigiBilgileri, state => ({
    ...state,
    fmPratigiList: null,
    fmPratigiListLoaded: false,
  })),
  on(
    Kk8115Actions.updateBobinKalinlikDegerleri,
    (state, { bobinKalinlikDegerleri }) => ({
      ...state,
      qcKayitBilgileri: {
        ...state.qcKayitBilgileri,
        bobinKalinlikDegerleri,
      },
    })
  ),
  on(Kk8115Actions.updateAciklama, (state, { aciklama }) => ({
    ...state,
    qcKayitBilgileri: {
      ...state.qcKayitBilgileri,
      aciklama,
    },
  })),
  on(Kk8115Actions.resetAciklama, state => ({
    ...state,
    qcKayitBilgileri: {
      ...state.qcKayitBilgileri,
      aciklama: null,
    },
  })),

  on(Kk8115Actions.updateHsm2QcOptions, (state, { options }) => ({
    ...state,
    ...options,
  })),

  on(
    Kk8115Actions.getButunAktifKusurListSuccess,
    (state, { butunAktifKusurList }) => ({
      ...state,
      butunAktifKusurList,
      butunAktifKusurListLoaded: true,
    })
  ),
  on(Kk8115Actions.getButunAktifKusurListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8115Actions.updateYuzeyKusurDegerleri,
    (state, { kkUretimYuzeyKusuru }) => ({
      ...state,
      yuzeyKusurKaydiList: kkUretimYuzeyKusuru,
    })
  ),

  on(Kk8115Actions.updateHsm2UretimDegerleri, (state, { uretimDegerleri }) => ({
    ...state,
    qcKayitBilgileri: {
      ...state.qcKayitBilgileri,
      hsm2UretimDegerleri: updateUretimDegerleri(
        state.qcKayitBilgileri.hsm2UretimDegerleri,
        uretimDegerleri
      ),
    },
  })),

  on(Kk8115Actions.qcKayitSuccess, state => ({
    ...state,
    stepIndex: 0,
    error: null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8115Reducer(state, action);
}
