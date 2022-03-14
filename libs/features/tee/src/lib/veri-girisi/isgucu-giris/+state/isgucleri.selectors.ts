import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISGUCLERI_FEATURE_KEY, State } from './isgucleri.reducer';

// Lookup the 'Isgucleri' feature state managed by NgRx
export const getIsgucleriState = createFeatureSelector<State>(ISGUCLERI_FEATURE_KEY);

export const getIsgucleriLoaded = createSelector(getIsgucleriState, (state: State) => state.loaded);

export const getIsgucleriError = createSelector(getIsgucleriState, (state: State) => state.error);

export const getAllIsgucleri = createSelector(getIsgucleriState, (state: State) => state.isgucleri);

export const getIsgucleriValid = createSelector(getIsgucleriState, (state: State) => !!state.isValid);

export const getIsgucleriData = createSelector(getIsgucleriState, (state: State) =>
  state.isgucleri.filter((isgucu) => {
    const {
      yil,
      ay,
      celikhaneIsgucu,
      kokIsgucu,
      sicak1Isgucu,
      sicak2Isgucu,
      sinterIsgucu,
      soguk1Isgucu,
      soguk2Isgucu,
      surekliIsgucu,
      yuksekfirinIsgucu,
    } = isgucu;

    const fields = [
      celikhaneIsgucu,
      kokIsgucu,
      sicak1Isgucu,
      sicak2Isgucu,
      sinterIsgucu,
      soguk1Isgucu,
      soguk2Isgucu,
      surekliIsgucu,
      yuksekfirinIsgucu,
    ];

    const validCheck1 = (input: unknown) => typeof input === 'number' && input > 0;
    return /[0-9]{4}/.test(yil) && /[0-9]{2}/.test(ay) && fields.every(validCheck1);
  })
);
