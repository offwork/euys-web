import {
  BagimsizMesajModel,
  HSMBobinModel,
  BagimsizNumuneModel,
  CMSMPratigiBilgileri,
  KkUretimYuzeyKusuru,
  Combo,
  QCKayitBilgileri,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import {
  defaultYuzeyKusurKodu,
  disableYuzeyKusuruVarMi,
  getMinDerece,
  isDispozeBobin,
  updateUretimDegerleri,
} from '../utils/rules';
import * as Kk8139Actions from './kk-8139.actions';

export const KK_8139_FEATURE_KEY = 'kk8139';
export interface State {
  bagimsizMesajList: BagimsizMesajModel[];
  bagimsizMesajListLoaded: boolean;
  bagimsizNumuneList: BagimsizNumuneModel[];
  bagimsizNumuneListLoaded: boolean;
  cmPratigiList: CMSMPratigiBilgileri[];
  cmPratigiListLoaded: boolean;
  hsmBobinList: HSMBobinModel[];
  hsmBobinListLoaded: boolean;
  smPratigiList: CMSMPratigiBilgileri[];
  smPratigiListLoaded: boolean;
  yuzeyKusurKaydiList: KkUretimYuzeyKusuru[];
  butunAktifKusurList: Combo[];
  butunAktifKusurListLoaded: boolean;
  yuzeyKusurKaydiListLoaded: boolean;
  qcKayitBilgileri: QCKayitBilgileri;
  qcKayitBilgileriLoaded: boolean;
  defaultYuzeyKusurKodu: string;
  dispoze: boolean;
  minDispozeKusurDerecesi: number;
  stepIndex: number;
}

export const initialState: State = {
  bagimsizMesajList: [],
  bagimsizMesajListLoaded: false,
  bagimsizNumuneList: [],
  bagimsizNumuneListLoaded: false,
  cmPratigiList: [],
  cmPratigiListLoaded: false,
  hsmBobinList: [],
  hsmBobinListLoaded: false,
  smPratigiList: [],
  smPratigiListLoaded: false,
  yuzeyKusurKaydiList: [],
  butunAktifKusurList: [],
  butunAktifKusurListLoaded: false,
  yuzeyKusurKaydiListLoaded: false,
  qcKayitBilgileri: null,
  qcKayitBilgileriLoaded: false,
  defaultYuzeyKusurKodu: null,
  dispoze: false,
  minDispozeKusurDerecesi: 1,
  stepIndex: 0,
};

const kk8139Reducer = createReducer(
  initialState,
  on(Kk8139Actions.setCurrentStepIndex, (state, { index }) => ({
    ...state,
    stepIndex: index,
  })),
  on(Kk8139Actions.initOnayListSuccess, (state, { data }) => ({
    ...state,
    hsmBobinList: data,
    hsmBobinListLoaded: true,
  })),
  on(Kk8139Actions.resetBobinList, state => ({
    ...state,
    hsmBobinList: null,
    hsmBobinListLoaded: false,
  })),
  on(
    Kk8139Actions.getCmPratigiListSuccess,
    (state, { cmSmPratigiModelList }) => ({
      ...state,
      cmPratigiList: cmSmPratigiModelList,
      cmPratigiListLoaded: true,
    })
  ),
  on(Kk8139Actions.resetCmPratigiList, state => ({
    ...state,
    cmPratigiList: null,
    cmPratigiListLoaded: false,
  })),
  on(
    Kk8139Actions.getSmPratigiListSuccess,
    (state, { cmSmPratigiModelList }) => ({
      ...state,
      smPratigiList: cmSmPratigiModelList,
      smPratigiListLoaded: true,
    })
  ),
  on(Kk8139Actions.getBagimsizNumuneFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8139Actions.getBagimsizNumuneSuccess,
    (state, { bagimsizNumuneList }) => ({
      ...state,
      bagimsizNumuneList,
      bagimsizNumuneListLoaded: true,
    })
  ),
  on(Kk8139Actions.resetBagimsizNumune, state => ({
    ...state,
    bagimsizNumuneList: null,
    bagimsizNumuneListLoaded: false,
  })),
  on(
    Kk8139Actions.updateBagimsizNumuneList,
    (state, { bagimsizNumuneList }) => ({
      ...state,
      bagimsizNumuneList,
    })
  ),
  on(
    Kk8139Actions.getBagimsizMesajListSuccess,
    (state, { bagimsizMesajList }) => ({
      ...state,
      bagimsizMesajList: bagimsizMesajList,
      bagimsizMesajListLoaded: true,
    })
  ),
  on(Kk8139Actions.resetBagimsizMesajList, state => ({
    ...state,
    bagimsizMesajList: null,
    bagimsizMesajListLoaded: false,
  })),
  on(Kk8139Actions.resetSmPratigiList, state => ({
    ...state,
    smPratigiList: null,
    smPratigiListLoaded: false,
  })),
  on(Kk8139Actions.getBagimsizMesajListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8139Actions.getButunAktifKusurListSuccess,
    (state, { butunAktifKusurList }) => ({
      ...state,
      butunAktifKusurList,
      butunAktifKusurListLoaded: true,
    })
  ),
  on(Kk8139Actions.getButunAktifKusurListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8139Actions.updateYuzeyKusurDegerleri,
    (state, { kkUretimYuzeyKusuru }) => ({
      ...state,
      yuzeyKusurKaydiList: kkUretimYuzeyKusuru,
    })
  ),
  on(
    Kk8139Actions.getQcKayitBilgileriSuccess,
    (state: State, { qcKayitBilgileri }) => ({
      ...state,
      qcKayitBilgileri: qcKayitBilgileri,
      qcKayitBilgileriLoaded: true,
      disableYuzeyKusuruVarMi: disableYuzeyKusuruVarMi(qcKayitBilgileri),
      defaultYuzeyKusurKodu: defaultYuzeyKusurKodu(qcKayitBilgileri),
      dispoze: isDispozeBobin(qcKayitBilgileri.dispozeKodu),
      minDispozeKusurDerecesi: getMinDerece(
        isDispozeBobin(qcKayitBilgileri.dispozeKodu)
      ),
    })
  ),
  on(Kk8139Actions.resetQcKayitBilgileri, state => ({
    ...state,
    qcKayitBilgileri: null,
    qcKayitBilgileriLoaded: false,
  })),
  on(
    Kk8139Actions.setQcKayitBilgileri,
    (state: State, { qcKayitBilgileri }) => ({
      ...state,
      qcKayitBilgileri: qcKayitBilgileri,
      qcKayitBilgileriLoaded: true,
    })
  ),
  on(Kk8139Actions.setUretimDegerleri, (state, { uretimDegerleri }) => ({
    ...state,
    qcKayitBilgileri: {
      ...state.qcKayitBilgileri,
      hsm1UretimDegerleri: uretimDegerleri,
    },
  })),
  on(Kk8139Actions.updateHsm1UretimDegerleri, (state, { uretimDegerleri }) => ({
    ...state,
    qcKayitBilgileri: {
      ...state.qcKayitBilgileri,
      hsm1UretimDegerleri: updateUretimDegerleri(
        state.qcKayitBilgileri.hsm1UretimDegerleri,
        uretimDegerleri
      ),
    },
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8139Reducer(state, action);
}
