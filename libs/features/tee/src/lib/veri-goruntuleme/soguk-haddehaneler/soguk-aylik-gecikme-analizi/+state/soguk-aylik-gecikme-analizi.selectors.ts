import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SOGUK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, State } from './soguk-aylik-gecikme-analizi.reducer';

// Lookup the 'SogukAylikGecikmeAnalizi' feature state managed by NgRx
export const getSogukAylikGecikmeAnaliziState = createFeatureSelector<State>(SOGUK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY);

export const getSogukAylikGecikmeAnaliziLoaded = createSelector(
  getSogukAylikGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getSogukAylikGecikmeAnaliziError = createSelector(
  getSogukAylikGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllSogukAylikGecikmeAnalizi = createSelector(
  getSogukAylikGecikmeAnaliziState,
  (state: State) => state.gecikmeAnalizi
);

export const getSoguk1AylikGecikmeAnalizi = createSelector(
  getAllSogukAylikGecikmeAnalizi,
  (gecikmeAnalizi: { soguk1: AylikGecikmeAnalizi; ikmal: AylikGecikmeAnalizi; soguk2: AylikGecikmeAnalizi }) =>
    gecikmeAnalizi.soguk1.aylik
);

export const getSoguk2AylikGecikmeAnalizi = createSelector(
  getAllSogukAylikGecikmeAnalizi,
  (gecikmeAnalizi: { soguk1: AylikGecikmeAnalizi; ikmal: AylikGecikmeAnalizi; soguk2: AylikGecikmeAnalizi }) =>
    gecikmeAnalizi.soguk2.aylik
);

export const getIkmalAylikGecikmeAnalizi = createSelector(
  getAllSogukAylikGecikmeAnalizi,
  (gecikmeAnalizi: { soguk1: AylikGecikmeAnalizi; ikmal: AylikGecikmeAnalizi; soguk2: AylikGecikmeAnalizi }) =>
    gecikmeAnalizi.ikmal.aylik
);

export const getSoguk1YillikGecikmeAnalizi = createSelector(
  getAllSogukAylikGecikmeAnalizi,
  (gecikmeAnalizi: { soguk1: AylikGecikmeAnalizi; ikmal: AylikGecikmeAnalizi; soguk2: AylikGecikmeAnalizi }) =>
    gecikmeAnalizi.soguk1.yillik
);

export const getSoguk2YillikGecikmeAnalizi = createSelector(
  getAllSogukAylikGecikmeAnalizi,
  (gecikmeAnalizi: { soguk1: AylikGecikmeAnalizi; ikmal: AylikGecikmeAnalizi; soguk2: AylikGecikmeAnalizi }) =>
    gecikmeAnalizi.soguk2.yillik
);

export const getIkmalYillikGecikmeAnalizi = createSelector(
  getAllSogukAylikGecikmeAnalizi,
  (gecikmeAnalizi: { soguk1: AylikGecikmeAnalizi; ikmal: AylikGecikmeAnalizi; soguk2: AylikGecikmeAnalizi }) =>
    gecikmeAnalizi.ikmal.yillik
);
