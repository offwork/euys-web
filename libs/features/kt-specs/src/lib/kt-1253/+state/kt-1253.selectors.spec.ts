import { Kt1253Entity } from './kt-1253.models';
import { kt1253Adapter, Kt1253PartialState, initialState } from './kt-1253.reducer';
import * as Kt1253Selectors from './kt-1253.selectors';

describe('Kt1253 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1253Id = (it: Kt1253Entity) => it.id;
  const createKt1253Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1253Entity);

  let state: Kt1253PartialState;

  beforeEach(() => {
    state = {
      kt1253: kt1253Adapter.setAll(
        [createKt1253Entity('PRODUCT-AAA'), createKt1253Entity('PRODUCT-BBB'), createKt1253Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1253 Selectors', () => {
    it('getAllKt1253() should return the list of Kt1253', () => {
      const results = Kt1253Selectors.getAllKt1253(state);
      const selId = getKt1253Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1253Selectors.getSelected(state) as Kt1253Entity;
      const selId = getKt1253Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1253Loaded() should return the current "loaded" status', () => {
      const result = Kt1253Selectors.getKt1253Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1253Error() should return the current "error" state', () => {
      const result = Kt1253Selectors.getKt1253Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
