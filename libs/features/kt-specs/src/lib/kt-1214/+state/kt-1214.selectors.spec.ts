import { Kt1214Entity } from './kt-1214.models';
import { kt1214Adapter, Kt1214PartialState, initialState } from './kt-1214.reducer';
import * as Kt1214Selectors from './kt-1214.selectors';

describe('Kt1214 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1214Id = (it: Kt1214Entity) => it.id;
  const createKt1214Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1214Entity);

  let state: Kt1214PartialState;

  beforeEach(() => {
    state = {
      kt1214: kt1214Adapter.setAll(
        [createKt1214Entity('PRODUCT-AAA'), createKt1214Entity('PRODUCT-BBB'), createKt1214Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1214 Selectors', () => {
    it('getAllKt1214() should return the list of Kt1214', () => {
      const results = Kt1214Selectors.getAllKt1214(state);
      const selId = getKt1214Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1214Selectors.getSelected(state) as Kt1214Entity;
      const selId = getKt1214Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1214Loaded() should return the current "loaded" status', () => {
      const result = Kt1214Selectors.getKt1214Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1214Error() should return the current "error" state', () => {
      const result = Kt1214Selectors.getKt1214Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
