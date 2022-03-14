import { Action, createReducer, on } from '@ngrx/store';
import * as _ from 'lodash';
import { ColumnData } from '../../models/data-grid-input.model';
import * as KatsayiGirisActions from './katsayi-giris.actions';
import { KatsayiModel, Katsayi } from './katsayi-giris.models';

export const COEFFICIENT_INPUT_FEATURE_KEY = 'coefficientInput';

export interface State {
  coefficients: KatsayiModel[];
  dataGrid: Katsayi<ColumnData> | null;
  treeView: string[];
  isInvalid: boolean;
  currentColumn: string | null;
  loaded: boolean; // has the KatsayiGris list been loaded
  error?: string | null; // last known error (if any)
}

export interface CoefficientInputPartialState {
  readonly [COEFFICIENT_INPUT_FEATURE_KEY]: State;
}

export const initialState: State = {
  coefficients: [],
  dataGrid: null,
  treeView: [],
  isInvalid: true,
  currentColumn: null,
  loaded: false,
};

const coefficientInputReducer = createReducer(
  initialState,
  on(KatsayiGirisActions.initCoefficientPage, state => ({
    ...state,
    ...initialState,
  })),
  on(
    KatsayiGirisActions.loadCoefficientInputSuccess,
    (state, { coefficients }) => {
      // TODO: should be provided as dynamically...
      const keysOfObject = ['sirket', 'direktorluk', 'basmuhendislik', 'hat'];
      return {
        ...state,
        loaded: true,
        coefficients: coefficients,
        dataGrid: keysOfObject.reduce((acc, key) => {
          return { ...acc, [key]: groupingColumn(coefficients, key) };
        }, {}),
        treeView: coefficients.map(value => value.birim),
      };
    }
  ),
  on(KatsayiGirisActions.loadCoefficientInputFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(KatsayiGirisActions.updateCoefficientDataGrid, (state, { group }) => {
    const counts: number[] = [];
    return {
      ...state,
      dataGrid: {
        ...state.dataGrid,
        [group.column]: _.cloneDeep(state.dataGrid[group.column])
          .map((column: ColumnData) => {
            if (column.order === group.item.order) {
              column.percent = parseFloat(
                parseFloat(group.inputValue.split(',').join('.')).toFixed(2)
              );
            }
            if (column.parent === group.item.parent) {
              counts.push(column.percent);
            }
            return column;
          })
          .map((column: ColumnData) => {
            if (column.order === group.item.parent) {
              column.percent = Number(
                counts
                  .reduce((acc, cur) => {
                    return (acc += cur);
                  }, 0)
                  .toFixed(2)
              );
            }
            return column;
          }),
      },
    };
  }),
  on(KatsayiGirisActions.verifyCoefficientDataGrid, (state, { key }) => {
    return {
      ...state,
      currentColumn: key,
      isInvalid: state.dataGrid[key]
        .filter(value => value.entry === 'H' && value.percent > 0)
        .some(total => invalidTotal(total.percent)),
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return coefficientInputReducer(state, action);
}

//--------------------------------------------------//
// <----------> *** HELPER METHODS *** <----------> //
//--------------------------------------------------//

/**
 * Grouping column
 * @param collections
 * @param prefix
 * @returns
 */
function groupingColumn(collections: KatsayiModel[], prefix: string) {
  return collections.reduce((acc, cur) => {
    /**
     * Pleaase don't remove `ban-ts-comment` lines,
     * object key (like cur[`${prefix}Sign`]) must be dynamically generated
     */
    acc.push({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ['sign']: cur[`${prefix}Sign`],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ['parent']: cur[`${prefix}UstGrup`],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ['percent']: cur[`${prefix}Yuzdesi`],
      ['entry']: cur.hesapGiris,
      ['unit']: cur.birim,
      ['order']: cur.sira,
    });
    return acc;
  }, []);
}

/**
 * Invalids total
 * @param total
 * @returns true if total
 */
function invalidTotal(total: number): boolean {
  return total > 100 || total < 100 || isNaN(total);
}
