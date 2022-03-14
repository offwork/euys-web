import { ErrorModel, Hat, KkKusurGoruntuleme } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kk8102Actions from './kk-8102.actions';

export const KK_8102_FEATURE_KEY = 'kk8102';

export interface FilterObject {
  label: string;
  value: any;
}

interface HeaderHatObject extends Hat {
  isPinnedDown: boolean;
}

export interface State {
  utHatList: Hat[];
  utHatListLoaded: boolean;
  kusurGoruntulemeListRaw: KkKusurGoruntuleme[];
  kusurGoruntulemeList: KkKusurGoruntuleme[];
  kusurListLoaded: boolean;
  hoverKusurTanimBaslik: string;
  kusurSinifiFilter: FilterObject[];
  anaKusurKoduFilter: FilterObject[];
  anaKusurKoduAciklamaFilter: FilterObject[];
  kusurKoduFilter: FilterObject[];
  kusurKoduAciklamaFilter: FilterObject[];
  statuFilter: FilterObject[];
  hurdaFilter: FilterObject[];
  tabloBaslik: HeaderHatObject[];
  isFilterMod: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  utHatList: [],
  kusurGoruntulemeListRaw: [],
  kusurGoruntulemeList: [],
  utHatListLoaded: false,
  kusurListLoaded: false,
  hoverKusurTanimBaslik: '',
  kusurSinifiFilter: [],
  anaKusurKoduFilter: [],
  anaKusurKoduAciklamaFilter: [],
  kusurKoduFilter: [],
  kusurKoduAciklamaFilter: [],
  statuFilter: [],
  hurdaFilter: [],
  isFilterMod: false,
  tabloBaslik: [
    { hatAdi: 'Kusur Sınıfı', hatKodu: 'Kusur Sınıfı', isPinnedDown: true },
    { hatAdi: 'Ana Kusur Kodu', hatKodu: 'Ana Kusur Kodu', isPinnedDown: true },
    {
      hatAdi: 'Ana Kusur Kodu Açıklama',
      hatKodu: 'Ana Kusur Kodu Açıklama',
      isPinnedDown: true,
    },
    { hatAdi: 'Kusur Kodu', hatKodu: 'Kusur Kodu', isPinnedDown: true },
    {
      hatAdi: 'Kusur Kodu Açıklaması',
      hatKodu: 'Kusur Kodu Açıklaması',
      isPinnedDown: true,
    },
    { hatAdi: 'Statü', hatKodu: 'Statü', isPinnedDown: true },
    { hatAdi: 'Hurda', hatKodu: 'Hurda', isPinnedDown: true },
  ],
};

const kk8102Reducer = createReducer(
  initialState,

  on(Kk8102Actions.initKusurGoruntulemeSuccess, (state, { data }) => ({
    ...state,
    kusurGoruntulemeListRaw: data,
    kusurGoruntulemeList: data,

    kusurSinifiFilter: [
      ...Array.from(new Set(data.map(e => e.kusurSinifiTanim.toString()))).map(
        m => {
          return { label: m, value: m };
        }
      ),
    ],

    anaKusurKoduFilter: [
      ...Array.from(
        new Set<string>(data.map(e => e.kkKusur.anaKusurKodu.toString()))
      ).map(m => {
        return { label: m, value: m };
      }),
    ],

    anaKusurKoduAciklamaFilter: [
      ...Array.from(new Set(data.map(e => e.kkKusurAna))).map(m => {
        return { label: m, value: m };
      }),
    ],

    kusurKoduFilter: [
      ...Array.from(new Set<string>(data.map(e => e.kkKusur.kusurKodu))).map(
        m => {
          return { label: m, value: m };
        }
      ),
    ],

    kusurKoduAciklamaFilter: [
      ...Array.from(
        new Set<string>(data.map(e => e.kkKusur.kusurAciklama))
      ).map(m => {
        return { label: m, value: m };
      }),
    ],

    statuFilter: [
      ...Array.from(
        new Set(data.map(e => e.kkKusur.aktifPasif.toString()))
      ).map(m => {
        return { label: m, value: m };
      }),
    ],

    hurdaFilter: [
      ...Array.from(new Set(data.map(e => e.kkKusur.hurdaMi.toString()))).map(
        m => {
          return { label: m, value: m };
        }
      ),
    ],
    kusurListLoaded: true,
  })),

  on(Kk8102Actions.kusurGoruntulemeFilter, (state, { values, key }) => ({
    ...state,
    kusurGoruntulemeList: state.kusurGoruntulemeListRaw?.filter(raw => {
      if (values.length == 0) {
        return true;
      }
      if (key == 'Kusur Sınıfı') {
        return values.includes(raw.kusurSinifiTanim);
      }
      if (key == 'Ana Kusur Kodu') {
        return values.includes(raw.kkKusur.anaKusurKodu);
      }
      if (key == 'Ana Kusur Kodu Açıklama') {
        return values.includes(raw.kkKusurAna);
      }
      if (key == 'Kusur Kodu') {
        return values.includes(raw.kkKusur.kusurKodu);
      }
      if (key == 'Kusur Kodu Açıklaması') {
        return values.includes(raw.kkKusur.kusurAciklama);
      }
      if (key == 'Statü') {
        return values.includes(raw.kkKusur.aktifPasif);
      }
      if (key == 'Hurda') {
        return values.includes(raw.kkKusur.hurdaMi);
      }
    }),
    isFilterMod: values.length != 0,
  })),

  on(Kk8102Actions.filterTemizleyici, state => ({
    ...state,
    kusurGoruntulemeList: state.kusurGoruntulemeListRaw,
    isFilterMod: false,
  })),

  on(Kk8102Actions.initKusurGoruntulemeFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8102Actions.initHatListSuccess, (state, { data }) => ({
    ...state,
    utHatListLoaded: true,
    utHatList: data,
    tabloBaslik: state.tabloBaslik.concat(
      data.map(d => {
        return { ...d, isPinnedDown: false };
      })
    ),
  })),

  on(Kk8102Actions.initHatListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8102Actions.hoverKusurTanimBaslik, (state, { data }) => ({
    ...state,
    hoverKusurTanimBaslik: data,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8102Reducer(state, action);
}
