import { Kt1249Entity } from './kt-1249.models';
import { kt1249Adapter, Kt1249PartialState, initialState } from './kt-1249.reducer';
import * as Kt1249Selectors from './kt-1249.selectors';

describe('Kt1249 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1249Id = (it: Kt1249Entity) => it.id;
  const createKt1249Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1249Entity);

  let state: Kt1249PartialState;

  beforeEach(() => {
    state = {
      kt1249: kt1249Adapter.setAll(
        [createKt1249Entity('PRODUCT-AAA'), createKt1249Entity('PRODUCT-BBB'), createKt1249Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1249 Selectors', () => {
    it('getAllKt1249() should return the list of Kt1249', () => {
      const results = Kt1249Selectors.getAllKt1249(state);
      const selId = getKt1249Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1249Selectors.getSelected(state) as Kt1249Entity;
      const selId = getKt1249Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1249Loaded() should return the current "loaded" status', () => {
      const result = Kt1249Selectors.getKt1249Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1249Error() should return the current "error" state', () => {
      const result = Kt1249Selectors.getKt1249Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
