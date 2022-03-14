import { Kt1252Entity } from './kt-1252.models';
import { kt1252Adapter, Kt1252PartialState, initialState } from './kt-1252.reducer';
import * as Kt1252Selectors from './kt-1252.selectors';

describe('Kt1252 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1252Id = (it: Kt1252Entity) => it.id;
  const createKt1252Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1252Entity);

  let state: Kt1252PartialState;

  beforeEach(() => {
    state = {
      kt1252: kt1252Adapter.setAll(
        [createKt1252Entity('PRODUCT-AAA'), createKt1252Entity('PRODUCT-BBB'), createKt1252Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1252 Selectors', () => {
    it('getAllKt1252() should return the list of Kt1252', () => {
      const results = Kt1252Selectors.getAllKt1252(state);
      const selId = getKt1252Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1252Selectors.getSelected(state) as Kt1252Entity;
      const selId = getKt1252Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1252Loaded() should return the current "loaded" status', () => {
      const result = Kt1252Selectors.getKt1252Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1252Error() should return the current "error" state', () => {
      const result = Kt1252Selectors.getKt1252Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
