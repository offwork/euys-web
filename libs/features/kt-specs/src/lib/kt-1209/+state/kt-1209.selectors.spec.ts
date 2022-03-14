import { Kt1209Entity } from './kt-1209.models';
import { kt1209Adapter, Kt1209PartialState, initialState } from './kt-1209.reducer';
import * as Kt1209Selectors from './kt-1209.selectors';

describe('Kt1209 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1209Id = (it: Kt1209Entity) => it.id;
  const createKt1209Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1209Entity);

  let state: Kt1209PartialState;

  beforeEach(() => {
    state = {
      kt1209: kt1209Adapter.setAll(
        [createKt1209Entity('PRODUCT-AAA'), createKt1209Entity('PRODUCT-BBB'), createKt1209Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1209 Selectors', () => {
    it('getAllKt1209() should return the list of Kt1209', () => {
      const results = Kt1209Selectors.getAllKt1209(state);
      const selId = getKt1209Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1209Selectors.getSelected(state) as Kt1209Entity;
      const selId = getKt1209Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1209Loaded() should return the current "loaded" status', () => {
      const result = Kt1209Selectors.getKt1209Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1209Error() should return the current "error" state', () => {
      const result = Kt1209Selectors.getKt1209Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
